import React from "react";
import UpSideCover from "../UpSideCover/UpSideCover";
import Projects from "../Projects/Projects";
import DownSideLink from "../DownSideLink/DownSideLink";
import Cover from "../Cover/Cover";

const HomePage = () => {
  return (
    <>
      <UpSideCover />
      <Cover />
      <Projects />
      <DownSideLink />
    </>
  );
};

export default HomePage;
