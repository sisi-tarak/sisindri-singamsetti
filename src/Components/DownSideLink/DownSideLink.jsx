import { Box, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const DownSideLink = () => {
  const navigate = useNavigate();

  const handleDownSideLink = () => {
    navigate("/downside");
  };

  return (
    <Container maxWidth="lg" className="mt-24 mb-24">
      <div
        className="bg-strongBgColor font-poppins text-center cursor-pointer rounded-2xl w-full p-16 opacity-100 hover:opacity-80 transition-all duration-500 ease-in-out"
        onClick={handleDownSideLink}
      >
        <h1 className="text-headStrong text-center tracking-wide text-5xl font-bold uppercase mx-auto mt-1">
          <div className="rotate-180">DOWN SIDE</div>
          <span className="text-headColor leading-normal">UP SIDE</span>
        </h1>
        <p className="text-secondaryTextColor text-base tracking-widest mt-3">
          Click here to go to <span className="text-textStrong">Down Side</span>
        </p>
      </div>
    </Container>
  );
};

export default DownSideLink;
