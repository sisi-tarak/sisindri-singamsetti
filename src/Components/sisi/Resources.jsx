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
            <div className="flex flex-col gap-x-5 gap-y-2 px-10 mt-4 w-full">
              {resources.map((resource) => (
                <Link
                  key={resource.id}
                  to={resource.link}
                  className="text-base md:text-lg hover:bg-secondaryTextColor/10 rounded-lg hover:text-textStrong transition-all duration-300 ease-in-out px-6 py-3"
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
