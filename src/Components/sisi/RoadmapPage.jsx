import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RoadmapPage = () => {
  return (
    <div className="w-full min-h-screen bg-backgroundBgColor">
      <Container maxWidth="xl" className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="lg:w-[300px] w-full sm:w-0">
            <div
              className="h-32 lg:h-[600px] w-full bg-adsBgColor rounded-md 
                                    shadow-lg transition-all duration-300 hover:shadow-xl"
            ></div>
          </div>

          <div className="flex bg-footerBgColor w-full">
            <div className="py-8 px-6">
              <h2 className="font-Montserrat text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl tracking-wide font-semibold">
                Title
              </h2>
              <img src="" alt="" />
              <pre className="mt-6 mb-10 text-base md:text-lg font-Montserrat">
                para1
              </pre>
              <img src="" alt="" />
              <pre className="mt-6 mb-10 text-base md:text-lg font-Montserrat">
                para2
              </pre>
              <div className="flex gap-x-5">
                <Link
                  to="/"
                  className="text-base md:text-lg bg-secondaryTextColor/15 hover:bg-secondaryTextColor/5 rounded-lg text-textStrong transition-all duration-300 ease-in-out px-6 py-3"
                >
                  btn 1
                </Link>
                <Link
                  to="/"
                  className="text-base md:text-lg bg-secondaryTextColor/15 hover:bg-secondaryTextColor/5 rounded-lg text-textStrong transition-all duration-300 ease-in-out px-6 py-3"
                >
                  btn 2
                </Link>
                <Link
                  to="/"
                  className="text-base md:text-lg bg-secondaryTextColor/15 hover:bg-secondaryTextColor/5 rounded-lg text-textStrong transition-all duration-300 ease-in-out px-6 py-3"
                >
                  btn 3
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
};

export default RoadmapPage;
