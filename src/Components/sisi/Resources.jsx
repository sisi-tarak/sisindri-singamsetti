import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./context/sisicontext";

const Resources = () => {
  return (
    <Consumer>
      {(value) => {
        const { resources } = value;
        return (
          <section className="font-Montserrat my-10" id="resources">
            <h1 className="text-xl md:text-2xl tracking-wide font-semibold">
              Resources
            </h1>
            <div className="flex flex-col gap-y-2 pl-10 mt-4">
              {resources.map((resource) => (
                <Link
                  key={resource.id}
                  to={resource.link}
                  className="text-base md:text-lg hover:text-textStrong transition-all duration-300 ease-in-out"
                >
                  {resource.title}
                </Link>
              ))}
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Resources;
