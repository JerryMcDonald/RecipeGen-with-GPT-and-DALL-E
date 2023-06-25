import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

function InstructionList({ instructions }) {
  return (
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
          {instructions.map((instruction, index) => (
            <ListItem key={index}>
              <ListItemIcon sx={{ color: "text.accent" }}>
                <RadioButtonCheckedIcon />
              </ListItemIcon>
              <ListItemText
                primary={instruction}
                primaryTypographyProps={{ sx: { color: "text.accent" } }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </List>
  );
}

export default InstructionList;
