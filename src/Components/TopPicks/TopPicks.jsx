import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Fade from "../Animations/Fade";

const TopPicks = () => {
  return (
    <Container maxWidth="lg" className="mb-20">
      <h2 className="text-headColor font-Montserrat text-3xl mt-5 mb-8 font-semibold tracking-wide">
        Top Picks on Amazon & Flipkart
      </h2>
      <div className="mt-3 mb-5 py-5 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:gap-x-4 xs:gap-y-5 md:gap-x-5 md:gap-y-6 lg:gap-x-6 lg:gap-y-7">
        <Fade blur={true}>
          <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
            <Link to="https://amzn.to/404LeMr">
              <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                <img
                  src="https://m.media-amazon.com/images/I/71ALJrxmmDL._SX679_.jpg"
                  alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <div className="my-5">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                HP 15, 13th Gen
              </h3>
              <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                Intel Core i5-1334U
              </h6>
              <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.59kg),
                Anti-glare, 15.6-inch(39.6cm) FHD Laptop, Intel Iris Xe
                Graphics, 1080p FHD camera, Backlit KB, fd0316TU
              </p>
            </div>
          </div>
        </Fade>
        <Fade blur={true}>
          <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
            <Link to="https://amzn.to/4h5UkzB">
              <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                <img
                  src="https://m.media-amazon.com/images/I/71mFAMHkWyL._SX679_.jpg"
                  alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <div className="my-5">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                Dell Inspiron, 13th Gen
              </h3>
              <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                Intel Core i5-1334U
              </h6>
              <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                16GB, 512GB SSD, 15.6"(39.62cm) FHD 120Hz 250 nits, Backlit KB,
                Windows 11 + Mso'21 & 15 Month McAfee, Silver, Thin & Light-
                1.62kg
              </p>
            </div>
          </div>
        </Fade>
        <Fade blur={true}>
          <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
            <Link to="https://amzn.to/3PplKo1">
              <div className="h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                <img
                  src="https://m.media-amazon.com/images/I/51QGlg5iRdL._SX679_.jpg"
                  alt="HP 15, 13th Gen Intel Core i5-1334U, 16GB DDR4, 512GB SSD"
                  className="rounded-lg"
                />
              </div>
            </Link>
            <div className="my-5">
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                Dell Inspiron, 12th Gen
              </h3>
              <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                Intel Core i5-1235U
              </h6>
              <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                8GB, 512GB SSD, 15.6" (39.62Cms) FHD Display- 3 Side Narrow
                Border, Win 11 + MSO'21, 2 Tuned Speakers, Black, Thin &
                Light-1.65Kg
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default TopPicks;
