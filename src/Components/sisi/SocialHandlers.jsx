import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import githubImg from "../../assets/github.png";

const SocialHandlers = () => {
  return (
    <Container maxWidth="md" className="pt-4 pb-4">
      <div className="grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 xs:gap-y-7 md:gap-y-9 lg:gap-y-12 gap-x-6 xs:gap-x-4 md:gap-x-6 lg:gap-x-6 mt-4 mb-16">
        <Link to="https://www.instagram.com/sisi_tarakk/">
          <div className="hover:rounded-full flex justify-start items-center  hover:border-instaColorCode hover:drop-shadow-[0_35px_35px_rgba(221,42,123,1.0)] transition-all duration-500 ease-in-out cursor-pointer">
            <h2 className="flex justify-center items-center gap-x-3 text-headColor text-[14px] md:text-base font-semibold tracking-wider px-9">
              <img
                src="https://img.icons8.com/fluency/48/instagram-new.png"
                alt="github"
                height="30"
                width="30"
              />
              Instagram
            </h2>
          </div>
        </Link>
        <Link to="https://github.com/sisi-tarak">
          <div className="hover:rounded-full flex justify-start items-center  hover:border-gitHubColorCode hover:drop-shadow-[0_35px_35px_rgba(240,240,240,0.5)] transition-all duration-500 ease-in-out cursor-pointer">
            <h2 className="flex justify-center items-center gap-x-3 text-headColor text-[14px] md:text-base font-semibold tracking-wider px-9">
              <img src={githubImg} alt="github" height="30" width="30" />
              GitHub
            </h2>
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/sisitarak/">
          <div className="hover:rounded-full flex justify-start items-center  hover:border-linkedInColorCode hover:drop-shadow-[0_35px_35px_rgba(0,119,181,1.0)] transition-all duration-500 ease-in-out cursor-pointer">
            <h2 className="flex justify-center items-center gap-x-3 text-headColor text-[14px] md:text-base font-semibold tracking-wider px-9">
              <img
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="github"
                height="30"
                width="30"
              />
              LinkedIn
            </h2>
          </div>
        </Link>
        <Link to="https://youtube.com/@sisi-tarakk">
          <div className="hover:rounded-full flex justify-start items-center  hover:border-youTubeColorCode hover:drop-shadow-[0_35px_35px_rgba(255,0,0,1.0)] transition-all duration-500 ease-in-out cursor-pointer">
            <h2 className="flex justify-center items-center gap-x-3 text-headColor text-[14px] md:text-base font-semibold tracking-wider px-9">
              <img
                src="https://img.icons8.com/color/48/youtube-play.png"
                alt="github"
                height="30"
                width="30"
              />
              YouTube
            </h2>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default SocialHandlers;
