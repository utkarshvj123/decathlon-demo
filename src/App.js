import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SpinnerComponent from "./components/SpinnerComponent";

import Routes from "./routes";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <SpinnerComponent />
      <Routes />
    </Router>
  );
}

export default App;
