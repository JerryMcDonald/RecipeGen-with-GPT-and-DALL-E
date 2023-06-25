import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import LoadingImage from "./Loading/LoadingImage";
import LoadingRecipe from "./Loading/LoadingRecipe";

function RecipeCard({
  loadingRecipe,
  loadingImage,
  generatedImage,
  recipeNameInput,
  promptSentToDalle,
  dalleAPIEnabled,
  displayRecipe,
}) {
  // your renderCardContents function here
  const renderCardContents = () => {
    if (loadingRecipe) {
      return <LoadingRecipe recipeNameInput={recipeNameInput} />;
    } else if (loadingImage) {
      return (
        <LoadingImage
          recipeNameInput={recipeNameInput}
          promptSentToDalle={promptSentToDalle}
          seriousToSillyRating={displayRecipe.serious_to_silly_rating}
        />
      );
    } else if (!generatedImage) {
      return (
        <CardContent
          sx={{
            backgroundColor: "var(--secondary-color)",
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
            color="text.accent"
            sx={{ textAlign: "center" }}
          >
            {(promptSentToDalle.trim() !== "" && (
              <>
                You can paste the following image prompt at{" "}
                <a href="https://labs.openai.com/">DALL-E</a>, using the free
                credits they give you:
                <br />
                <br />
                {promptSentToDalle}
              </>
            )) || (
              <>
                Enter a recipe name, this box will keep you updated on each step
                <br />
                {dalleAPIEnabled
                  ? "You are using the Dalle API"
                  : "You are not using the image API"}
                <br />
              </>
            )}
          </Typography>
        </CardContent>
      );
    } else {
      return (
        <CardMedia
          component="img"
          image={generatedImage}
          alt="recipe dish image"
        />
      );
    }
  };

  return <Card sx={{ maxWidth: 600, margin: 2 }}>{renderCardContents()}</Card>;
}

export default RecipeCard;
