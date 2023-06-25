import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function RecipeForm({ onGenerateRecipe, recipeNameInput, handleInputChange }) {
  return (
    <>
      <TextField
        label="Enter recipe name"
        value={recipeNameInput || ""}
        onChange={handleInputChange}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            onGenerateRecipe();
          }
        }}
        variant="outlined"
        color="secondary"
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={onGenerateRecipe}
        sx={{ color: "text.accent" }}
      >
        Enter
      </Button>
    </>
  );
}

export default RecipeForm;
