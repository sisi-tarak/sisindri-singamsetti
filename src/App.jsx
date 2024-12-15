import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
// import Contact from "./Components/Contact/Contact";
// import Courses from "./Components/Courses/Courses";
// import Doc from "./Components/Doc/Doc";
// import Tutorials from "./Components/Tutorials/Tutorials";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
