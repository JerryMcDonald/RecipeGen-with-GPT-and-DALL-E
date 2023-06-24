import React from "react";
import { Box, CardContent, Typography, Grid, Divider } from "@mui/material";

const AboutCard = ({ title, textArray, icon }) => {
  return (
    <CardContent
      sx={{
        backgroundColor: "var(--secondary-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        minWidth: 800,
        maxWidth: 800,
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          "& .markdown": {
            py: 3,
          },
        }}
      >
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
          </Box>
          {icon}
        </Grid>
        <Divider sx={{ marginBottom: 1 }} />
        {textArray.map((text, index) => (
          <Typography variant="body1" sx={{ marginBottom: 2 }} key={index}>
            {text}
          </Typography>
        ))}
      </Grid>
    </CardContent>
  );
};

export default AboutCard;