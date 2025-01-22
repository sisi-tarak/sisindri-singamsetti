import { Container } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Consumer } from "./context/sisicontext";

const ResourcePage = () => {
  const { title } = useParams();
  return (
    <Consumer>
      {(value) => {
        const { resourcesPage } = value;
        const resourceData = resourcesPage.find(
          (resource) => resource.title === title
        );

        if (!resourceData) {
          return (
            <div className="flex justify-center items-center h-screen text-headColor text-center tracking-widest text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase mb-4 mx-auto ">
              Resource not found
            </div>
          );
        }
        return (
          <div className="w-full min-h-screen bg-backgroundBgColor">
            <Container
              maxWidth="xl"
              className="mt-8 px-4 sm:px-6 lg:px-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="lg:w-[300px] w-full sm:w-0">
                  <div
                    className="h-32 lg:h-[600px] w-full bg-adsBgColor rounded-md 
                                    shadow-lg transition-all duration-300 hover:shadow-xl"
                  ></div>
                </div>

                <div className="flex bg-footerBgColor w-full">
                  <div
                    className="py-8 px-6"
                    key={resourceData.id}
                  >
                    <h2 className="font-Montserrat text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl tracking-wide font-semibold">
                      {resourceData.title}
                    </h2>
                    <img
                      src={resourceData.images.image1.src}
                      alt={resourceData.images.image1.alt}
                    />
                    <pre className="mt-6 mb-10 text-base md:text-lg font-Montserrat">
                      {resourceData.para1}
                    </pre>
                    <img
                      src={resourceData.images.image2.src}
                      alt={resourceData.images.image2.alt}
                    />
                    <pre className="mt-6 mb-10 text-base md:text-lg font-Montserrat">
                      {resourceData.para2}
                    </pre>
                    <div className="flex gap-x-5">
                      <Link
                        to={resourceData.buttons.btn1.link}
                        className="text-base md:text-lg bg-secondaryTextColor/15 hover:bg-secondaryTextColor/5 rounded-lg text-textStrong transition-all duration-300 ease-in-out px-6 py-3"
                      >
                        {resourceData.buttons.btn1.text}
                      </Link>
                      <Link
                        to={resourceData.buttons.btn2.link}
                        className="text-base md:text-lg bg-secondaryTextColor/15 hover:bg-secondaryTextColor/5 rounded-lg text-textStrong transition-all duration-300 ease-in-out px-6 py-3"
                      >
                        {resourceData.buttons.btn2.text}
                      </Link>
                      <Link
                        to={resourceData.buttons.btn3.link}
                        className="text-base md:text-lg bg-secondaryTextColor/15 hover:bg-secondaryTextColor/5 rounded-lg text-textStrong transition-all duration-300 ease-in-out px-6 py-3"
                      >
                        {resourceData.buttons.btn3.text}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[300px] w-full sm:w-[35%] md:w-[50%]">
                  <div
                    className="h-32 lg:h-[600px] bg-adsBgColor rounded-md 
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

export default ResourcePage;
