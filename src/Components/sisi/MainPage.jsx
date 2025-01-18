import React from "react";
import { Container } from "@mui/material";
import sisiImg from "./assets/sisi.png";
import "./index.css";

const MainPage = () => {
  const buttonLabels = [
    "Roadmaps",
    "Tutorials",
    "Resources",
    "Articles",
    "Projects",
  ];

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

          <div className="flex-grow bg-footerBgColor">
            <div className=" rounded-md p-4 sm:p-6 shadow-lg">
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {buttonLabels.map((label, index) => (
                  <button key={index} className="ui-btn font-Montserrat">
                    <span className="text-[14px] sm:text-[16px]">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-[300px] w-full sm:w-[50%]">
            <div
              className="h-32 lg:h-[600px] w-full bg-adsBgColor rounded-md 
                          shadow-lg transition-all duration-300 hover:shadow-xl"
            ></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
