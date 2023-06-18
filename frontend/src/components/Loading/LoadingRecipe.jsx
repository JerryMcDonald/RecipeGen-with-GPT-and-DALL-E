import React, { useState, useEffect } from 'react';
import CardContent from "@mui/material/CardContent";
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LoadingRecipe({ loadingText }) {
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
        Recipe Is loading  <br/>
        The prompt being sent to the generate-recipe endpoint is: <br/>
        <span style={{ color: 'black' }}>{loadingText}</span> <br/>
        This could take up to 15 seconds <br/>
        {countdown === 0 ? 'It is still loading.....at least I have chicken..' : countdown}
      </Typography>
    </CardContent>
  );
}

export default LoadingRecipe;
