import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Show from "./pages/show";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/artists/:id" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
