import React, { useEffect } from "react";
import { Container } from "@mui/material";
import sisiImg from "./assets/sisi.png";
import "./index.css";
import Roadmap from "./Roadmap";
import Resources from "./Resources";
import DownSideSocial from "../DownSideSocial/DownSideSocial";
import { Consumer } from "./context/sisicontext";

const MainPage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
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
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <img
                src={sisiImg}
                alt="sisi"
                className="w-full max-h-[500px] object-cover rounded-2xl transform scale-90"
              />
            </div>

            <Container maxWidth="xl" className="mt-8 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="lg:w-[300px] w-full sm:w-0">
                  <div
                    className="h-32 lg:h-[600px] w-full bg-adsBgColor rounded-md 
                                shadow-lg transition-all duration-300 hover:shadow-xl"
                  ></div>
                </div>

                <div className="flex bg-footerBgColor">
                  <div className="rounded-md p-4 sm:p-6">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                      {buttonLabels.map((buttonLabel) => (
                        <button
                          className="ui-btn font-Montserrat cursor-pointer"
                          key={buttonLabel.id}
                          onClick={() => scrollToSection(buttonLabel.link)}
                        >
                          <span className="text-[12px] sm:text-[14px] lg:text-[16px]">
                            {buttonLabel.label}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div id="intro" className="mt-10">
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
                        <DownSideSocial />
                      </div>
                    </div>

                    <div id="roadmaps">
                      <Roadmap />
                    </div>

                    <div id="resources">
                      <Resources />
                    </div>
                  </div>
                </div>

                <div className="lg:w-[300px] w-full sm:w-[60%] md:w-[40%]">
                  <div
                    className="h-32 lg:h-[600px] w-full bg-adsBgColor rounded-md 
                                shadow-lg transition-all duration-300 hover:shadow-xl"
                  ></div>
                </div>
              </div>
            </Container>
          </div>
        );
      }}
    </Consumer>
  );
};

export default MainPage;
