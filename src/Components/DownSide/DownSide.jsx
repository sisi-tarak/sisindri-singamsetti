import React from "react";
import DownSideCover from "../DownSideCover/DownSideCover";
import UpSideLink from "../UpSideLink/UpSideLink";
import DownSideCards from "../DownSideCards/DownSideCards";
import DownSideSocial from "../DownSideSocial/DownSideSocial";
import TopPicks from "../TopPicks/TopPicks";

const DownSide = () => {
  return (
    <>
      <DownSideCover />
      <DownSideSocial />
      <TopPicks />
      <DownSideCards />
      <UpSideLink />
    </>
  );
};

export default DownSide;
