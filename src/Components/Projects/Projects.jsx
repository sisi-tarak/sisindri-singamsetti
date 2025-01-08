import React, { Suspense } from "react";
import { Box, Container } from "@mui/material";
import Loader from "../Loader/Loader";
import Fade from "../Animations/Fade";
import { Consumer } from "../Context/Context";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Consumer>
      {(value) => {
        const { projectsLists } = value;
        return (
          <div className="" itemScope>
            <Container maxWidth="lg" className="py-12">
              <Suspense fallback={<Loader />}>
                <meta
                  itemProp="description"
                  content="Explore my portfolio featuring projects like 64 Frames, Webortex, Yes Telugu, and Aaharadhaan. Showcasing innovation, design, and development expertise"
                />
                <Box className="px-8 xs:px-24 sm:px-10 md:px-20 lg:px-24 gap-x-12 gap-y-3 grid grid-flow-row grid-cols-1 sm:grid-cols-2 ">
                  {projectsLists.map((projectsList) => (
                    <div
                      key={projectsList.id}
                      className="font-poppins text-center cursor-pointer rounded-3xl opacity-100 hover:bg-opacity-70 transition-all duration-500 ease-in-out mt-10"
                    >
                      <Fade blur={true}>
                        <Link to={projectsList.link}>
                          <img
                            src={projectsList.img}
                            alt="Project 01"
                            className="rounded-t-2xl p-0 h-auto w-auto object-cover hover:opacity-60 transition-all duration-500 ease-in-out"
                          />
                        </Link>
                      </Fade>
                    </div>
                  ))}
                </Box>
              </Suspense>
            </Container>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Projects;
