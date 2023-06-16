import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

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
  },
});


function App() {
  return (
    <>
      <div className="app">
        <ThemeProvider theme={theme}>
          <Navigation />
          <div className="content" style={{ marginTop: "64px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
