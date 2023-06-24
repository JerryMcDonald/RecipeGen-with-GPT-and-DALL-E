import * as React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import AccessTime from "@mui/icons-material/AccessTime";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import AIawwBG from "../../static/images/AIawwBG.png";
import LoadingImage from "../../components/Loading/LoadingImage";
import LoadingRecipe from "../../components/Loading/LoadingRecipe";
import DalleSwitch from "../../components/DalleSwitch";

const recipeDummyData = {
  ingredients: [
    { name: "Ingredient 1", amount: 0, unit: "grams" },
    { name: "Ingredient 2", amount: 0, unit: "grams" },
    { name: "Ingredient 3", amount: 0, unit: "grams" },
    { name: "Ingredient 4", amount: 0, unit: "grams" },
  ],
  instructions: [
    "Step 1: Do something",
    "Step 2: Do something else",
    "Step 3: Continue doing things",
    "Step 4: Almost there",
    "Step 5: Finished",
  ],
  time_to_cook: "0", // minutes
};

function Home() {
  const [recipeNameInput, setRecipeNameInput] = React.useState("");
  const [recipeImage, setRecipeImage] = React.useState(null);
  const [recipeName, setRecipeName] = React.useState(null);
  const [loadingImage, setLoadingImage] = React.useState(false);
  const [loadingRecipe, setLoadingRecipe] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [generatedRecipe, setGeneratedRecipe] = React.useState(null);
  const [dalleAPIEnabled, setDalleAPIEnabled] = React.useState(true);
  const [promptSentToDalle, setPromptSentToDalle] = React.useState('');

  const handleInputChange = (event) => {
    setRecipeNameInput(event.target.value);
  };

  const handleSwitchChange = (event) => {
    setDalleAPIEnabled(event.target.checked);
  };

  const handleButtonClick = () => {
    if (recipeNameInput.trim() !== "") {
      setOpenSnackbar(false);
      setRecipeName(recipeNameInput);
      setLoadingRecipe(true);

      // Start by making a request to /generate-recipe
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}api/gpt/generate-recipe`, {
          prompt: recipeNameInput,
        })
        .then((response) => {
          let recipe = response.data.recipe; // assuming the response contains the recipe data
          setGeneratedRecipe(recipe);
          setLoadingRecipe(false);

          if (dalleAPIEnabled) {
            // Only send request to DALL-E API if the switch is enabled
            setLoadingImage(true);

            // Extract the names of ingredients
            const ingredientNames = recipe.ingredients.map((ingredient) => ingredient.name).join(
              ", ");
            const seriousToSillyRating = recipe.serious_to_silly_rating

            // compose the prompt based off the seriousness of the recipe name
            console.log(seriousToSillyRating, 'rating in then statement')
            let recipeText = ""
            if (seriousToSillyRating <= 5) {
              recipeText = `A nice image of a delicious meal called ${recipeNameInput} made from ${ingredientNames}`;
            } else if (seriousToSillyRating <= 8) {
              recipeText = `A silly image of a fun meal called ${recipeNameInput} made from ${ingredientNames}`;
            } else {
              recipeText = `An image of something called ${recipeNameInput}, this is definitely not food, and these items should also be in the image: ${ingredientNames}`;
            }

    
            setPromptSentToDalle(recipeText)

            // After /generate-recipe, request /api/dalle/generate-image
            axios
              .post(
                `${process.env.REACT_APP_API_BASE_URL}api/dalle/generate-image`,
                {
                  prompt: recipeText,
                }
              )
              .then((response) => {
                setRecipeImage(response.data.image);
                setLoadingImage(false);
              })
              .catch((error) => {
                console.error(error);
                setLoadingImage(false);
              });
          }
        })
        .catch((error) => {
          console.error(error);
          setLoadingImage(false);
        });
    } else {
      // Recipe name is empty
      setOpenSnackbar(true); // Show the notification
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false); // Close the notification
  };

  let displayRecipe = generatedRecipe ? generatedRecipe : recipeDummyData;
  console.log("the current recipe", displayRecipe);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", // Ensures it fills at least the viewport
        backgroundImage: `url(${AIawwBG})`,
        backgroundSize: "cover",
        opacity: 1,
        overflowY: "auto", // Enables scrolling
        paddingTop: "90px",
      }}
    >
      <TextField
        label="Enter recipe name"
        value={recipeNameInput || ""}
        onChange={handleInputChange}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            handleButtonClick();
          }
        }}
        variant="outlined"
        color="secondary"
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="secondary" onClick={handleButtonClick}>
        Enter
      </Button>

      <DalleSwitch
        dalleAPIEnabled={dalleAPIEnabled}
        handleSwitchChange={handleSwitchChange}
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Please enter a recipe name."
      />
      <Typography
        variant="h4"
        component="h2"
        color="var(--secondary-color)"
        sx={{ marginTop: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minwidth: 600, // adjust this value for more/less space
          }}
        >
          <Box>{recipeName || "Recipe Name"}</Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ marginRight: 2, marginLeft: 4 }} />
            <Typography>{displayRecipe.time_to_cook} min</Typography>
          </Box>
        </Box>
      </Typography>
      <Card sx={{ maxWidth: 600, margin: 2 }}>
        {!loadingRecipe && !loadingImage ? (
          !dalleAPIEnabled ? (
            <CardContent
              sx={{
                backgroundColor: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 200,
                minWidth: 400,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                You are not using the image API
              </Typography>
            </CardContent>
          ) : recipeImage ? (
            <CardMedia
              component="img"
              image={recipeImage}
              alt="recipe dish image"
            />
          ) : (
            <CardContent
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textAlign: "center" }}
              >
                Enter a recipe name, this box will keep you updated on each step
                <br />
                You are Using the Dalle API (Change)
              </Typography>
              
            </CardContent>
          )
        ) : loadingRecipe ? (
          <LoadingRecipe recipeNameInput={recipeNameInput} />
        ) : (
          <LoadingImage recipeNameInput={recipeNameInput} promptSentToDalle={promptSentToDalle} seriousToSillyRating={displayRecipe.serious_to_silly_rating} />
        )}
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          padding: 1,
          margin: 0,
        }}
      >
        {displayRecipe.ingredients.map((ingredient, index) => {
          return (
            <Box key={index} sx={{ margin: 1 }}>
              <Chip
                label={`${ingredient.name} - ${ingredient.amount} ${ingredient.unit}`}
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Arial",
                }}
              />
            </Box>
          );
        })}
      </Box>
      <Typography
        variant="h5"
        component="h2"
        color="var(--secondary-color)"
        sx={{ marginTop: 2 }}
      >
        Instructions
      </Typography>
      <List>
        <Box
          sx={{
            width: "500px",
            margin: "0 auto",
            backgroundColor: "var(--secondary-color)",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <List>
            {displayRecipe.instructions.map((instruction, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <RadioButtonCheckedIcon />
                </ListItemIcon>
                <ListItemText primary={instruction} />
              </ListItem>
            ))}
          </List>
        </Box>
      </List>
    </Box>
  );
}

export default Home;
