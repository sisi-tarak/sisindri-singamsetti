import { Container } from "@mui/material";
import React from "react";

const DownSideSocial = () => {
  return (
    <Container maxWidth="md" className="pt-4 pb-10">
      <div className="grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 xs:gap-y-7 md:gap-y-9 lg:gap-y-12 gap-x-6 xs:gap-x-4 md:gap-x-6 lg:gap-x-6 mt-4 mb-16">
        <div className="border border-secondaryTextColor rounded-sm flex justify-center items-center  hover:border-headStrong transition-all duration-500 ease-in-out cursor-pointer">
          <h2 className="text-headColor text-base sm:text-lg 2xl:text-xl font-semibold tracking-wider px-9 py-4">
            Instagram
          </h2>
        </div>
        <div className="border border-secondaryTextColor rounded-sm flex justify-center items-center  hover:border-headStrong transition-all duration-500 ease-in-out cursor-pointer">
          <h2 className="text-headColor text-base sm:text-lg 2xl:text-xl font-semibold tracking-wider px-9 py-4">
            Instagram
          </h2>
        </div>
        <div className="border border-secondaryTextColor rounded-sm flex justify-center items-center  hover:border-headStrong transition-all duration-500 ease-in-out cursor-pointer">
          <h2 className="text-headColor text-base sm:text-lg 2xl:text-xl font-semibold tracking-wider px-9 py-4">
            Instagram
          </h2>
        </div>
        <div className="border border-secondaryTextColor rounded-sm flex justify-center items-center  hover:border-headStrong transition-all duration-500 ease-in-out cursor-pointer">
          <h2 className="text-headColor text-base sm:text-lg 2xl:text-xl font-semibold tracking-wider px-9 py-4">
            Instagram
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default DownSideSocial;
