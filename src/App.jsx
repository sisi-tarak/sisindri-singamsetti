import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import DownSide from "./Components/DownSide/DownSide";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import { Provider } from "./Components/Context/Context";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return isLoading ? (
    <Loader />
  ) : (
      <Provider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/downside" element={<DownSide />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
  );
};

export default App;
