import React, { useState, useEffect } from 'react';
import CardContent from "@mui/material/CardContent";
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LoadingRecipe({ recipeNameInput }) {
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
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        minWidth: 400,
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        <CircularProgress />
      </Box>
      <Typography variant="h6" fontWeight="bold" color="text.secondary" textAlign="center">
        Recipe Is loading  <br/> <br />
        The prompt being sent to the ChatCompletions API is: <br/> <br />
        <span style={{ color: 'black' }}>You are a helpful assistant. {`Provide a recipe for ${recipeNameInput}`} <br/>
        (along with the schema in backend/recipe_schema.py)
        </span> <br/> <br />
        This could take up to 15 seconds <br/>
        {countdown} <br/>
        {countdown <= 0 && countdown > -10 && 'It is still loading.....at least I have chicken..'}
        {countdown <= -10  && 'Oh no. Right click on the web page and click inspect. Then select the console tab. Paste your error in ChatGPT'}
      </Typography>
    </CardContent>
  );
}

export default LoadingRecipe;
