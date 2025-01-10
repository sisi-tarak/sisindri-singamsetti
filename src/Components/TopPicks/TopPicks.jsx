import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Fade from "../Animations/Fade";
import { Consumer } from "../Context/Context";

const TopPicks = () => {
  return (
    <Consumer>
      {(value) => {
        const { topPicks } = value;
        return (
          <Container maxWidth="lg" className="mb-20">
            <h2 className="text-headColor font-Montserrat text-3xl mt-5 mb-8 font-semibold tracking-wide">
              Top Picks on Amazon & Flipkart
            </h2>
            <div className="mt-3 mb-5 py-5 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:gap-x-4 xs:gap-y-5 md:gap-x-5 md:gap-y-6 lg:gap-x-6 lg:gap-y-7">
              {topPicks.map((topPick) => (
                <Fade blur={true}>
                  <div
                    className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out"
                    key={topPick.id}
                  >
                    <Link to={topPick.link} target="_blank">
                      <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                        <img
                          src={topPick.image}
                          alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                          className="rounded-lg"
                        />
                      </div>
                    </Link>
                    <div className="my-5">
                      <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                        {topPick.title}
                      </h3>
                      <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                        {topPick.subtitle}
                      </h6>
                      <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                        {topPick.description}
                      </p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </Container>
        );
      }}
    </Consumer>
  );
};

export default TopPicks;
