import { Container } from "@mui/material";
import React from "react";
import resume from "../../assets/Resume/sisindrisingamsetti_resume.pdf";

const Resume = () => {
  return (
    <Container maxWidth="lg">
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 mt-16 mb-96 p-10 md:px-20 lg:p-10 gap-10">
        <div className="flex flex-col justify-center gap-5">
          <p className="text-base italic">
            "If you want to solve a problem, don’t start by writing code or
            picking tools, but rather understand the people who will use it and
            the challenges they face. Code is just a means; the solution is the
            purpose."
          </p>
          <p className="text-base">
            My philosophy is to craft technology that simplifies lives, merging
            logic with creativity and always putting the user first.
          </p>
        </div>
        <div className="flex flex-col justify-center text-center items-center gap-5">
          <a
            type="button"
            className="w-56 text-center items-center align-middle text-sm font-semibold text-headStrong border border-headStrong hover:border-buttonHoverBorder hover:text-textStrong hover:rounded-lg transition-all duration-500 ease-in-out px-5 py-3"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Resume;
