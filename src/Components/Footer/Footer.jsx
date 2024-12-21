import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-10 border-t border-strongBgColor">
      <Container
        maxWidth="lg"
        className="grid grid-flow-row grid-cols-1 md:grid-cols-2"
      >
        <div className="">
          <p className="text-headColor tracking-wider text-base leading-7 font-semibold uppercase mx-auto pt-5">
           <Link to="/"> sisindri singamsetti </Link>
          </p>
          <p className="text-secondaryTextColor text-base leading-7 font-normal mx-auto">
            Full Stack Web Developer
          </p>
        </div>
        <div className="">
          <p className="text-headColor tracking-wider text-base leading-7 font-semibold uppercase mx-auto pt-5">
            social media
          </p>
          <div className="text-secondaryTextColor text-base leading-7 font-normal mx-auto no-underline">
            <Link to="https://www.linkedin.com/in/sisitarak/" target="blank" className="transition-all duration-500 ease-in-out hover:text-headColor">
              LinkedIn
            </Link>{" "}
            | {""}
            <Link to="https://github.com/sisi-tarak" target="blank" className="transition-all duration-500 ease-in-out hover:text-headColor">
              GitHub
            </Link>{" "}
            | {""}
            <Link to="https://www.instagram.com/sisi_tarakk/" target="blank" className="transition-all duration-500 ease-in-out hover:text-headColor">
              Instagram
            </Link>{" "}
            | {""}
            <Link to="https://youtube.com/@singamsettisisindri/" target="blank" className="transition-all duration-500 ease-in-out hover:text-headColor">
              Youtube
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
