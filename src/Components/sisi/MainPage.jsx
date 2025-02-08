import React, { useEffect, lazy, useRef } from "react";
import { Container } from "@mui/material";
import "./index.css";
import { Consumer } from "../Context/Context";

const Resources = lazy(() => import("./Resources"));
const Roadmap = lazy(() => import("./Roadmap"));
const Blogs = lazy(() => import("./Blogs"));
const SocialHandlers = lazy(() => import("./SocialHandlers"));

import sisiImg from "./assets/sisi.png";

const MainPage = () => {
  const sectionsRef = {
    intro: useRef(null),
    roadmaps: useRef(null),
    resources: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    if (sectionsRef[sectionId]?.current) {
      sectionsRef[sectionId].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionsRef[hash]?.current) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  return (
    <Consumer>
      {(value) => {
        const { buttonLabels } = value;
        return (
          <div className="w-full min-h-screen bg-backgroundBgColor">
            <div className="flex justify-center w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <img
                src={sisiImg}
                alt="sisi"
                className="w-full aspect-video md:aspect-auto max-h-[560px] md:h-full object-cover rounded-2xl transform scale-100"
              />
            </div>

            <Container maxWidth="lg" className="mt-8 px-2 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 w-full">
                {/* <div className="block md:hidden xl:block md:w-[200px]  2xl:w-[300px] flex-shrink-0">
                  <div className="h-48 md:h-dvh w-full bg-adsBgColor rounded-md shadow-lg transition-all duration-300 hover:shadow-xl"></div>
                </div> */}

                <div className="flex bg-footerBgColor flex-grow-0">
                  <div className="rounded-md p-4 sm:p-6 w-full">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                      {buttonLabels.map((buttonLabel) => (
                        <button
                          className="ui-btn font-Montserrat cursor-pointer"
                          key={buttonLabel.id}
                          onClick={() => scrollToSection(buttonLabel.link)}
                        >
                          <span className="text-[14px] md:text-[16px]">
                            {buttonLabel.label}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div id="intro" ref={sectionsRef.intro} className="mt-10">
                      <h1 className="text-2xl md:text-4xl tracking-wide font-semibold mt-16">
                        👋 Hii Everyone!!
                      </h1>
                      <p className="text-sm md:text-base tracking-wide mt-4">
                        This is a page where you can find all the resources,
                        tutorials, roadmaps, and projects that I have created.
                        Feel free to explore and learn from them.
                      </p>
                      <div className="mt-16">
                        <h1 className="text-xl md:text-2xl tracking-wide font-semibold">
                          Follow me on
                          <span className="text-textStrong">...</span>
                        </h1>
                        <SocialHandlers />
                      </div>
                    </div>

                    <div id="roadmaps" ref={sectionsRef.roadmaps}>
                      <Roadmap />
                    </div>

                    <div id="resources" ref={sectionsRef.resources}>
                      <Resources />
                    </div>

                    <div id="blogs" ref={sectionsRef.blogs}>
                      <Blogs />
                    </div>
                  </div>
                </div>

                {/* <div className="w-full md:w-[200px] mb-4 md:mb-0  2xl:w-[300px] flex-shrink-0">
                  <div className="h-48 md:h-dvh w-full bg-adsBgColor rounded-md shadow-lg transition-all duration-300 hover:shadow-xl"></div>
                </div> */}
              </div>
            </Container>
          </div>
        );
      }}
    </Consumer>
  );
};

export default MainPage;
