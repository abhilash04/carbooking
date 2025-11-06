import React from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "./components/common/ThemeProvider";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Grid>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
