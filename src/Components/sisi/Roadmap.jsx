import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./context/sisicontext";

const Roadmap = () => {
  return (
    <Consumer>
      {(value) => {
        const { roadmaps } = value;
        return (
          <section className="font-Montserrat" id="roadmaps">
            <h1 className="text-xl md:text-2xl tracking-wide font-semibold">
              Roadmaps
            </h1>
            <div className="flex flex-col gap-y-2 pl-10 mt-4">
              {roadmaps.map((roadmap) => (
                <Link
                  key={roadmap.id}
                  to={roadmap.link}
                  className="text-[14px] md:text-base hover:text-textStrong transition-all duration-300 ease-in-out"
                >
                  {roadmap.title}
                </Link>
              ))}
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Roadmap;
