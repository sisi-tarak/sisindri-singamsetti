import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { BlurText } from "../Animations/BlurText";
import ShinyText from "../Animations/ShinyText";
import { WordPullUp } from "../Animations/WordPullUp";

const UpSideCover = () => {
  return (
    <Container
      maxWidth="lg"
      className="mb-8 xs:mb-12 sm:mb-16 md:mb-24 lg:mb-44 h-full w-full relative"
    >
      <Box className="m-4 sm:m-6 md:m-10 lg:m-20 p-8 xs:p-10 sm:p-12 md:p-16 lg:p-20">
        <Box>
          <h1 className="text-headStrong text-[30px] xs:text-[35px] sm:text-[40px] md:text-[45px] lg:text-[53px] font-bold capitalize tracking-wide leading-tight">
            <BlurText
              text="Sisindri Singamsetti"
              className="uppercase"
              delay={100}
            />
          </h1>

          <WordPullUp
            words="CODING, SOLVING & INSPIRING"
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight text-left uppercase xs:pr-10 sm:pr-20 md:pr-[9.5rem] lg:pr-32 xl:pr-48 2xl:pr-56"
            delay={500}
          />
        </Box>
        <Box className="mt-10">
          <div className="text-textColor mt-10 text-base font-normal">
            <ShinyText
              text="Dive into my world of code, scalable solutions, debugging
            adventures, late-night coffee fixes, and building the web of
            tomorrow."
              disabled={false}
              speed={5}
              className=""
            />
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default UpSideCover;
