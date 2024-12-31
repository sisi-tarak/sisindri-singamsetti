import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DownSideSocial = () => {
  return (
    <Container maxWidth="md" className="pt-4 pb-10">
      <div className="grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 xs:gap-y-7 md:gap-y-9 lg:gap-y-12 gap-x-6 xs:gap-x-4 md:gap-x-6 lg:gap-x-6 mt-4 mb-16">
        <Link to="https://www.instagram.com/sisi_tarakk/">
          <div className="border border-secondaryTextColor rounded-sm flex justify-center items-center  hover:border-instaColorCode hover:drop-shadow-[0_35px_35px_rgba(221,42,123,1.0)] transition-all duration-500 ease-in-out cursor-pointer">
            <h2 className="text-headColor text-base sm:text-lg 2xl:text-xl font-semibold tracking-wider px-9 py-4">
              Instagram
            </h2>
          </div>
        </Link>
        <Link to="https://github.com/sisi-tarak">
          <div className="border border-secondaryTextColor rounded-sm flex justify-center items-center  hover:border-gitHubColorCode hover:drop-shadow-[0_35px_35px_rgba(240,80,51,1.0)] transition-all duration-500 ease-in-out cursor-pointer">
            <h2 className="text-headColor text-base sm:text-lg 2xl:text-xl font-semibold tracking-wider px-9 py-4">
              GitHub
            </h2>
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/sisitarak/">
          <div className="border border-secondaryTextColor rounded-sm flex justify-center items-center  hover:border-linkedInColorCode hover:drop-shadow-[0_35px_35px_rgba(0,119,181,1.0)] transition-all duration-500 ease-in-out cursor-pointer">
            <h2 className="text-headColor text-base sm:text-lg 2xl:text-xl font-semibold tracking-wider px-9 py-4">
              LinkedIn
            </h2>
          </div>
        </Link>
        <Link to="https://youtube.com/@sisi-tarakk">
          <div className="border border-secondaryTextColor rounded-sm flex justify-center items-center  hover:border-youTubeColorCode hover:drop-shadow-[0_35px_35px_rgba(255,0,0,1.0)] transition-all duration-500 ease-in-out cursor-pointer">
            <h2 className="text-headColor text-base sm:text-lg 2xl:text-xl font-semibold tracking-wider px-9 py-4">
              YouTube
            </h2>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default DownSideSocial;
