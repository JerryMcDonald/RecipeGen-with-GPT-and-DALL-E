import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        light: "#679fc9",
        main: "#4188bc",
        dark: "#2d5f83",
        contrastText: "#fff",
      },
      secondary: {
        light: "#e0e0e0",
        main: "#d9d9d9",
        dark: "#979797",
        contrastText: "#000",
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: '#d9d9d9', // Set input text color
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d9d9d9', // Border color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d9d9d9', // Border color on hover
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: '#d9d9d9', // Label color
            '&.Mui-focused': {
              color: '#d9d9d9', // Label color when focused
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: '#d9d9d9', // secondary color
            color: '#000000', // primary color
          },
        },
      },
      
    },
  });

export default theme;
