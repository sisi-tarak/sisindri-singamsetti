import React from "react";
import { Box, Container } from "@mui/material";
import Project1 from "../../assets/Projects/01.png";

const Projects = () => {
  return (
    <Container maxWidth="lg" className="mb-24 ">
      <h1 className="text-headColor text-center tracking-wide text-5xl font-semibold uppercase mb-4 mx-auto pt-10">
        Projects
      </h1>
      <Box className="gap-x-7 gap-y-4 grid grid-flow-row grid-cols-1 md:grid-cols-2 ">
        <div className="bg-headColor font-poppins text-center cursor-pointer rounded-2xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
          <img
            src={Project1}
            alt="Project 01"
            className="rounded-t-lg p-0"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-headColor font-poppins text-center cursor-pointer rounded-2xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
          <img
            src={Project1}
            alt="Project 01"
            className="rounded-t-lg p-0"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-headColor font-poppins text-center cursor-pointer rounded-2xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
          <img
            src={Project1}
            alt="Project 01"
            className="rounded-t-lg p-0"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-headColor font-poppins text-center cursor-pointer rounded-2xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
          <img
            src={Project1}
            alt="Project 01"
            className="rounded-t-lg p-0"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-headColor font-poppins text-center cursor-pointer rounded-2xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
          <img
            src={Project1}
            alt="Project 01"
            className="rounded-t-lg p-0"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-headColor font-poppins text-center cursor-pointer rounded-2xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
          <img
            src={Project1}
            alt="Project 01"
            className="rounded-t-lg p-0"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </Box>
    </Container>
  );
};

export default Projects;
