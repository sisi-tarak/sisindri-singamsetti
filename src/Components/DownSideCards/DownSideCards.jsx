import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Fade from "../Animations/Fade";
import { Consumer } from "../Context/Context";


const DownSideCards = () => {
  return (
    <Consumer>
      {(value) => {
        const { documentationsData } = value;
        return(
          <Container maxWidth="lg">
          <h2 className="text-headColor font-Montserrat text-3xl mt-5 mb-8 font-semibold tracking-wide">
            Documentations
          </h2>
          <div className="mt-3 mb-5 py-5 grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-x-4 xs:gap-y-5 md:gap-x-5 md:gap-y-6 lg:gap-x-6 lg:gap-y-7">
              {documentationsData.map((documentationData) => (
             <Fade blur={true}>
             <div className="opacity-90 hover:opacity-100 transition-all duration-500 ease-in-out">
               <Link to={documentationData.link} target="_blank">
                 <div className="bg-strongBgColor py-[74px] h-100 flex flex-col justify-center items-center rounded-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out text-center">
                   <h2 className="text-lg sm:text-xl 2xl:text-2xl font-semibold text-headColor">
                     {documentationData.title}
                   </h2>
                   <h4 className="text-lg sm:text-xl 2xl:text-2xl font-semibold text-headStrong mt-1.5">
                     {documentationData.subtitle}
                   </h4>
                 </div>
               </Link>
               <div className="my-5">
                 <h3 className="text-base sm:text-lg 2xl:text-xl font-bold tracking-wider">
                   {documentationData.headtext}
                 </h3>
                 <h6 className="text-sm sm:text-base 2xl:text-lg font-semibold text-headStrong mt-1.5">
                   {documentationData.subtext}
                 </h6>
                 <p className="text-xs sm:text-sm font-poppins mt-2 tracking-wide">
                   {documentationData.description}
                 </p>
               </div>
             </div>
           </Fade>
  ))}
          </div>
        </Container>
        )
      }}
    </Consumer>
   
  );
};

export default DownSideCards;
