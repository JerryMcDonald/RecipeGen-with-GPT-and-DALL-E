import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

function IngredientChips({ ingredients }) {
  return (
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
      {ingredients.map((ingredient, index) => (
        <Box key={index} sx={{ margin: 1 }}>
          <Chip
            label={`${ingredient.name} - ${ingredient.amount} ${ingredient.unit}`}
            sx={{
              fontWeight: "bold",
              fontFamily: "Arial",
              color: "text.accent",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}

export default IngredientChips;
