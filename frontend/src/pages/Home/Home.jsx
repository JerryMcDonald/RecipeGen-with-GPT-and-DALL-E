import * as React from "react";
import axios from "axios";
import AccessTime from "@mui/icons-material/AccessTime";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

import AIawwBG from "../../static/images/AIawwBG.png";
import DalleSwitch from "../../components/DalleSwitch";
import RecipeCard from "../../components/RecipeCard";
import IngredientChips from "../../components/IngredientChips";
import InstructionList from "../../components/InstructionList";
import RecipeForm from "../../components/RecipeForm";

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
  const [recipeName, setRecipeName] = React.useState(null);
  const [loadingImage, setLoadingImage] = React.useState(false);
  const [loadingRecipe, setLoadingRecipe] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [generatedRecipe, setGeneratedRecipe] = React.useState(null);
  const [generatedImage, setGeneratedImage] = React.useState(null);
  const [dalleAPIEnabled, setDalleAPIEnabled] = React.useState(true);
  const [promptSentToDalle, setPromptSentToDalle] = React.useState("");
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const handleInputChange = (event) => {
    setRecipeNameInput(event.target.value);
  };

  const handleSwitchChange = (event) => {
    setDalleAPIEnabled(event.target.checked);
  };

  const onGenerateRecipe = () => {
    if (recipeNameInput.trim() !== "") {
      setOpenSnackbar(false);
      setRecipeName(recipeNameInput);
      setLoadingRecipe(true);
      // reset the generated recipe and generated image
      setGeneratedRecipe(null);
      setGeneratedImage(null);

      // Start by making a request to /generate-recipe
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}api/gpt/generate-recipe`, {
          prompt: recipeNameInput,
        })
        .then((response) => {
          let recipe = response.data.recipe; // assuming the response contains the recipe data
          setGeneratedRecipe(recipe);
          setLoadingRecipe(false);

          const dallePrompt = recipe.visual_discription_of_image;

          // Here is the old way I was trying to build an accurate promp,
          // before realizing that I could just have ChatGPT make me an image prompt
          // const seriousToSillyRating = recipe.serious_to_silly_rating;
          // if (seriousToSillyRating <= 5) {
          //   dallePrompt = `A nice image of a delicious meal called ${recipeNameInput}, ingredients ${ingredientNames}`;
          // } else if (seriousToSillyRating <= 8) {
          //   dallePrompt = `A silly image of a fun meal called ${recipeNameInput}, ingredients ${ingredientNames}`;
          // } else {
          //   dallePrompt = `An image of something called ${recipeNameInput}, ingredients: ${ingredientNames}`;
          // }

          setPromptSentToDalle(dallePrompt);

          if (dalleAPIEnabled) {
            // Only send request to DALL-E API if the switch is enabled
            setLoadingImage(true);

            // After /generate-recipe, request /api/dalle/generate-image
            axios
              .post(
                `${process.env.REACT_APP_API_BASE_URL}api/dalle/generate-image`,
                {
                  prompt: dallePrompt,
                }
              )
              .then((response) => {
                setGeneratedImage(response.data.image);
                setLoadingImage(false);
              })
              .catch((error) => {
                console.error(error);
                setLoadingImage(false);
                // There was a problem loading the image
                setSnackbarMessage("There was a problem loading the Image");
                setOpenSnackbar(true); // Show the notification
                console.log("Image Error", error);
              });
          }
        })
        .catch((error) => {
          setLoadingRecipe(false);
          // there was a problem loading the Recipe
          setSnackbarMessage(
            "There was a problem loading the Recipe, please try another name"
          );
          setOpenSnackbar(true); // Show the notification

          console.log("Recipe Error", error);
        });
    } else {
      // Recipe name is empty
      setSnackbarMessage("Please enter a recipe name.");
      setOpenSnackbar(true); // Show the notification
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false); // Close the notification
  };

  let displayRecipe = generatedRecipe ? generatedRecipe : recipeDummyData;

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
      <RecipeForm
        onGenerateRecipe={onGenerateRecipe}
        recipeNameInput={recipeNameInput}
        handleInputChange={handleInputChange}
      />

      <DalleSwitch
        dalleAPIEnabled={dalleAPIEnabled}
        handleSwitchChange={handleSwitchChange}
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
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
      <RecipeCard
        loadingRecipe={loadingRecipe}
        loadingImage={loadingImage}
        generatedImage={generatedImage}
        recipeNameInput={recipeNameInput}
        promptSentToDalle={promptSentToDalle}
        dalleAPIEnabled={dalleAPIEnabled}
        displayRecipe={displayRecipe}
      />
      <IngredientChips ingredients={displayRecipe.ingredients} />
      <Typography
        variant="h5"
        component="h2"
        color="var(--secondary-color)"
        sx={{ marginTop: 2 }}
      >
        Instructions
      </Typography>
      <InstructionList instructions={displayRecipe.instructions} />
    </Box>
  );
}

export default Home;
