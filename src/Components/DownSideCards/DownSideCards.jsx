import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DownSideCards = () => {
  return (
    <Container maxWidth="lg">
      <h2 className="text-headColor font-Montserrat text-3xl mt-5 mb-8 font-semibold tracking-wide">
        Documentations
      </h2>
      <div className="mt-3 mb-5 py-5 grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-x-4 xs:gap-y-5 md:gap-x-5 md:gap-y-6 lg:gap-x-6 lg:gap-y-7">
        <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
          <Link to="https://github.com/sisi-tarak/react-interview-questions.git">
            <div className="bg-strongBgColor w-[270px] h-[216px] flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out">
              <h2 className="text-2xl font-semibold text-headColor">
                React JS
              </h2>
              <h4 className="text-2xl font-semibold text-headStrong mt-1.5">
                Interview Questions
              </h4>
            </div>
          </Link>
          <div className="my-5">
            <h3 className="text-xl font-bold tracking-wider">React JS</h3>
            <h6 className="text-lg font-semibold text-headStrong mt-1.5">
              Interview Questions
            </h6>
            <p className="text-sm font-poppins mt-2 tracking-wide">
              A collection of frequently asked React interview questions to help
              you prepare, providing insight into potential topics without
              focusing on memorization.
            </p>
          </div>
        </div>
        <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
          <Link to="https://github.com/sisi-tarak/data-analysis-roadmap.git">
            <div className="bg-strongBgColor w-[270px] h-[216px] flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out">
              <h2 className="text-2xl font-semibold text-headColor">
                Data Analysis
              </h2>
              <h4 className="text-2xl font-semibold text-headStrong mt-1.5">
                Roadmap
              </h4>
            </div>
          </Link>

          <div className="my-5">
            <h3 className="text-xl font-bold tracking-wider">Data Analysis</h3>
            <h6 className="text-lg font-semibold text-headStrong mt-1.5">
              Roadmap
            </h6>
            <p className="text-sm font-poppins mt-2 tracking-wide">
              A 100-day guide to mastering data analytics, including core
              skills, practical projects, and advanced techniques to shape your
              career.
            </p>
          </div>
        </div>
        <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
          <Link to="https://github.com/sisi-tarak/resume-format.git">
            <div className="bg-strongBgColor w-[270px] h-[216px] flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out">
              <h2 className="text-2xl font-semibold text-headColor">Resume</h2>
              <h4 className="text-2xl font-semibold text-headStrong mt-1.5">
                Formats
              </h4>
            </div>
          </Link>

          <div className="my-5">
            <h3 className="text-xl font-bold tracking-wider">Resume</h3>
            <h6 className="text-lg font-semibold text-headStrong mt-1.5">
              Formats
            </h6>
            <p className="text-sm font-poppins mt-2 tracking-wide">
              Explore various resume formats tailored to different career stages
              and job requirements, designed to highlight your skills
              effectively.
            </p>
          </div>
        </div>
        <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
          <Link to="https://github.com/sisi-tarak/resume-guide.git">
            <div className="bg-strongBgColor w-[270px] h-[216px] flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out">
              <h2 className="text-2xl font-semibold text-headColor">Resume</h2>
              <h4 className="text-2xl font-semibold text-headStrong mt-1.5">
                Guide
              </h4>
            </div>
          </Link>

          <div className="my-5">
            <h3 className="text-xl font-bold tracking-wider">Resume</h3>
            <h6 className="text-lg font-semibold text-headStrong mt-1.5">
              Guide
            </h6>
            <p className="text-sm font-poppins mt-2 tracking-wide">
              A step-by-step guide to crafting a professional, ATS-friendly
              resume that highlights your skills and boosts your job
              opportunities.
            </p>
          </div>
        </div>
        <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
          <Link to="https://github.com/sisi-tarak/Git-Cheat-Sheet.git">
            <div className="bg-strongBgColor w-[270px] h-[216px] flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out">
              <h2 className="text-2xl font-semibold text-headColor">Git</h2>
              <h4 className="text-2xl font-semibold text-headStrong mt-1.5">
                Cheatsheet
              </h4>
            </div>
          </Link>

          <div className="my-5">
            <h3 className="text-xl font-bold tracking-wider">Git</h3>
            <h6 className="text-lg font-semibold text-headStrong mt-1.5">
              Cheatsheet
            </h6>
            <p className="text-sm font-poppins mt-2 tracking-wide">
              A beginner-friendly Git cheat sheet covering essential commands,
              workflows, and precautions for reliable version control practices.
            </p>
          </div>
        </div>
        <div className="opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out">
          <Link to="https://github.com/sisi-tarak/tailwindcssCheatsheat.git">
            <div className="bg-strongBgColor w-[270px] h-[216px] flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out">
              <h2 className="text-2xl font-semibold text-headColor">
                Tailwind CSS
              </h2>
              <h4 className="text-2xl font-semibold text-headStrong mt-1.5">
                Cheatsheet
              </h4>
            </div>
          </Link>

          <div className="my-5">
            <h3 className="text-xl font-bold tracking-wider">Tailwind CSS</h3>
            <h6 className="text-lg font-semibold text-headStrong mt-1.5">
              Cheatsheet
            </h6>
            <p className="text-sm font-poppins mt-2 tracking-wide">
              A comprehensive guide to essential Tailwind CSS classes, from
              basic layouts to advanced effects and transitions, mapped to CSS
              properties.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DownSideCards;
