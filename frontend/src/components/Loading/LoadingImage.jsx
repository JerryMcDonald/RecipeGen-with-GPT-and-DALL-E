import React, { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

function LoadingImage({
  recipeNameInput,
  promptSentToDalle,
  seriousToSillyRating,
}) {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
      <Box sx={{ marginBottom: 2 }}>
        <CircularProgress />
      </Box>
      <Typography
        variant="h6"
        fontWeight="bold"
        color="text.accent"
        textAlign="center"
      >
        Image Is loading <br />
        The prompt being sent to DALL-E API is: <br />
        <span style={{ color: "black" }}>
          {promptSentToDalle} <br />
        </span>{" "}
        <br />
        This could take up to 15 seconds <br />
        {countdown} <br />
        {countdown <= 0 &&
          countdown > -10 &&
          "It is still loading.....at least I have chicken.."}
        {countdown <= -10 &&
          "Oh no. Right click on the web page and click inspect. Then select the console tab. Paste your error in ChatGPT"}
      </Typography>
    </CardContent>
  );
}

export default LoadingImage;
