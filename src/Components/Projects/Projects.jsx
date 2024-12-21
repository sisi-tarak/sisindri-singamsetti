import React from "react";
import { Box, Container } from "@mui/material";
import Project1 from "../../assets/Projects/02.png";

const Projects = () => {
  return (
    <div className="">
      <Container maxWidth="lg" className="py-12">
        <Box className="px-8 xs:px-10 sm:px-12 md:px-20 lg:px-28 gap-x-9 gap-y-3 grid grid-flow-row grid-cols-1 sm:grid-cols-2 ">
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out mt-10">
            <img
              src={Project1}
              alt="Project 01"
              className="rounded-t-2xl p-0 h-auto w-auto object-cover"
            />
          </div>
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out  mt-10">
            <img
              src={Project1}
              alt="Project 01"
              className="rounded-t-2xl p-0"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
            <img
              src={Project1}
              alt="Project 01"
              className="rounded-t-2xl p-0"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
            <img
              src={Project1}
              alt="Project 01"
              className="rounded-t-2xl p-0"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
            <img
              src={Project1}
              alt="Project 01"
              className="rounded-t-2xl p-0"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out w-full mt-10">
            <img
              src={Project1}
              alt="Project 01"
              className="rounded-t-2xl p-0"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Projects;
