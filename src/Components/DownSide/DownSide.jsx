import React from "react";
import DownSideCover from "../DownSideCover/DownSideCover";
import UpSideLink from "../UpSideLink/UpSideLink";
import DownSideCards from "../DownSideCards/DownSideCards";

const DownSide = () => {
  return (
    <>
      <DownSideCover />
      <DownSideCards />
      <UpSideLink />
    </>
  );
};

export default DownSide;
