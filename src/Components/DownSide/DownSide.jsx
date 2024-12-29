import React from "react";
import DownSideCover from "../DownSideCover/DownSideCover";
import UpSideLink from "../UpSideLink/UpSideLink";
import DownSideCards from "../DownSideCards/DownSideCards";
import DownSideSocial from "../DownSideSocial/DownSideSocial";

const DownSide = () => {
  return (
    <>
      <DownSideCover />
      <DownSideSocial />
      <DownSideCards />
      <UpSideLink />
    </>
  );
};

export default DownSide;
