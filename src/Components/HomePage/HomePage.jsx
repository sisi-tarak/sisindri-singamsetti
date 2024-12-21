import React from "react";
import TimelineSection from "../TimelineSection/TimelineSection";
import UpSideCover from "../UpSideCover/UpSideCover";
import Projects from "../Projects/Projects";
import DownSideLink from "../DownSideLink/DownSideLink";

const HomePage = () => {
  return (
    <>
      <UpSideCover />
      <Projects />
      <DownSideLink />
    </>
  );
};

export default HomePage;
