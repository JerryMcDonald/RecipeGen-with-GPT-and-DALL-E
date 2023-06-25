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
        main: "#fcfcfc",
        dark: "#979797",
        contrastText: "#000",
      },
      text: {
        accent: '#312f2f'
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: '#fcfcfc', // Set input text color
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fcfcfc', // Border color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fcfcfc', // Border color on hover
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: '#fcfcfc', // Label color
            '&.Mui-focused': {
              color: '#fcfcfc', // Label color when focused
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: '#fcfcfc', // secondary color
            color: '#000000', // primary color
          },
        },
      },
      
    },
  });

export default theme;
