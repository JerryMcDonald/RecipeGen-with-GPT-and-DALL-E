import React from 'react';
import CardContent from "@mui/material/CardContent";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from "@mui/material/Typography";


function LoadingImage({ loadingText }) {
  return (
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
          <CircularProgress /> 
          <Typography variant="h6" fontWeight="bold" color="text.secondary">
            Image Is loading
          </Typography>
        </CardContent>
  );
}

export default LoadingImage;
