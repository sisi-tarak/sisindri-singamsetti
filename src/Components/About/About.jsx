import React from "react";
import { Box, Container } from "@mui/material";
import img1 from "../../assets/img3.png";
const About = () => {
  return (
    <Container maxWidth="lg" className="mt-8 mb-24 ">
      <h1 className="text-headColor text-center tracking-wide text-5xl font-semibold uppercase mb-4 mx-auto mt-10 pt-10">
        About Me
      </h1>
      <Box className="flex justify-center">
        <Box className="flex flex-col justify-center align-center w-[550px]">
          <img alt="Remy Sharp" src={img1} className="w-full h-auto" />
        </Box>
        <Box className="flex flex-col justify-center mt-8 w-[650px] px-8">
          <p className="text-textColor font-normal text-base font-Montserrat">
            Hi, I’m Sisindri Singamsetti! I’m a passionate web developer with a
            keen focus on{" "}
            <span className="text-headStrong">
              {" "}
              creating exceptional, user-centered digital experiences.
            </span>{" "}
            <br /> <br /> My journey into web development began long before I
            even realized it, driven by an innate curiosity for how technology
            can solve real-world problems. From the start, I’ve been fascinated
            by building efficient, responsive, and scalable applications that
            deliver seamless user interactions. <br /> <br />
            I’ve spent countless hours honing my skills, experimenting with new
            tools, and exploring various technologies to craft dynamic,
            intuitive websites. Whether it's building interactive user
            interfaces or designing powerful back-end systems, I thrive on
            developing solutions that push the boundaries of what's possible.
            <br /> <br />
            <b>
              <span className="text-headStrong">
                I've been a web developer at heart —
              </span>{" "}
              I just didn't know it until I started creating.
            </b>
          </p>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
