import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../Context/Context";

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
            <div className="flex flex-col gap-x-5 gap-y-2 px-3 md:px-6 xl:px-10 mt-4 w-full">
              {roadmaps.map((roadmap) => (
                <Link
                  key={roadmap.id}
                  to={`/sisi/roadmap/${roadmap.slug}`}
                  className="text-base md:text-lg hover:bg-secondaryTextColor/10 rounded-lg hover:text-textStrong transition-all duration-300 ease-in-out px-2 md:px-4 xl:px-6 py-1 md:py-2 xl:py-3"
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
