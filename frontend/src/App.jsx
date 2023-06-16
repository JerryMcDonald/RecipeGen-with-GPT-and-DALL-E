import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import theme from "./theme";

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
