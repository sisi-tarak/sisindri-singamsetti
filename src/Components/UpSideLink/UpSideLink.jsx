import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const UpSideLink = () => {
  const navigate = useNavigate();

  const handleUpSideLink = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="lg" className="mt-24 mb-24">
      <div
        className="bg-strongBgColor font-poppins text-center cursor-pointer rounded-2xl w-full p-16 bg-opacity-100 hover:bg-opacity-60 transition-all duration-500 ease-in-out"
        onClick={handleUpSideLink}
      >
        <h1 className="text-headStrong text-center tracking-wide text-2xl xs:text-3xl md:text-5xl font-bold uppercase mx-auto mt-1">
          <div className="rotate-180">UP</div>
          <span className="text-headColor leading-normal">DOWNSIDE</span>
        </h1>
        <p className="text-secondaryTextColor text-xs xs:text-sm sm:text-base tracking-widest mt-3">
          Click here to go to <span className="text-textStrong">Up Side</span>
        </p>
      </div>
    </Container>
  );
};

export default UpSideLink;
