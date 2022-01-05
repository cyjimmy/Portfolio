import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume/Resume";
import Project from "./components/Project/Project";
import { AnimationProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <AnimationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Resume />} />
            <Route path="/project" element={<Project />} />
          </Route>
        </Routes>
      </Router>
    </AnimationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
