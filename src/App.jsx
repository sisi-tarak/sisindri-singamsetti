import React, { Suspense, useState, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import { Provider } from "./Components/Context/Context";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ResourcePage from "./Components/sisi/ResourcePage";
import MainPage from "./Components/sisi/MainPage";
import RoadmapPage from "./Components/sisi/RoadmapPage";
import BlogPage from "./Components/sisi/BlogPage";

const HomePage = lazy(() => import("./Components/HomePage/HomePage"));
const About = lazy(() => import("./Components/About/About"));
const Resume = lazy(() => import("./Components/Resume/Resume"));
const DownSide = lazy(() => import("./Components/DownSide/DownSide"));
const NotFound = lazy(() => import("./Components/NotFound/NotFound"));

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const WrappedHomePage = () => (
  <MainLayout>
    <HomePage />
  </MainLayout>
);

const WrappedAbout = () => (
  <MainLayout>
    <About />
  </MainLayout>
);

const WrappedResume = () => (
  <MainLayout>
    <Resume />
  </MainLayout>
);

const WrappedDownSide = () => (
  <MainLayout>
    <DownSide />
  </MainLayout>
);

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
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<WrappedHomePage />} />
            <Route path="/about" element={<WrappedAbout />} />
            <Route path="/resume" element={<WrappedResume />} />
            <Route path="/downside" element={<WrappedDownSide />} />
            <Route path="/sisi" element={<MainPage />} />
            <Route path="/sisi/roadmap/:slug" element={<RoadmapPage />} />
            <Route path="/sisi/resource/:slug" element={<ResourcePage />} />
            <Route path="/sisi/blogs/:slug" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
