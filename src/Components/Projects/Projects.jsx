import React from "react";
import { Box, Container } from "@mui/material";
import Project1 from "../../assets/Projects/01.png";
import Project2 from "../../assets/Projects/02.png";
import Project3 from "../../assets/Projects/03.png";
import Project4 from "../../assets/Projects/04.png";

const Projects = () => {
  return (
    <div className="">
      <Container maxWidth="lg" className="py-12">
        <Box className="px-8 xs:px-24 sm:px-10 md:px-20 lg:px-24 gap-x-12 gap-y-3 grid grid-flow-row grid-cols-1 sm:grid-cols-2 ">
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out mt-10">
            <img
              src={Project1}
              alt="Project 01"
              className="rounded-t-2xl p-0 h-auto w-auto object-cover hover:opacity-60 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out  mt-10">
            <img
              src={Project2}
              alt="Project 02"
              className="rounded-t-2xl p-0 h-auto w-auto object-cover hover:opacity-60 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
            <img
              src={Project3}
              alt="Project 03"
              className="rounded-t-2xl p-0 h-auto w-auto object-cover hover:opacity-60 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
            <img
              src={Project4}
              alt="Project 04"
              className="rounded-t-2xl p-0 h-auto w-auto object-cover hover:opacity-60 transition-all duration-500 ease-in-out"
            />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Projects;
