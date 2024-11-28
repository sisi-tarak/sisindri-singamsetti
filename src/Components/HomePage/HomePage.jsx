import { Container } from "@mui/material";
import React from "react";
import TimelineSection from "../TimelineSection/TimelineSection";
import About from "../About/About";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <About />
      <TimelineSection />
    </Container>
  );
};

export default HomePage;
