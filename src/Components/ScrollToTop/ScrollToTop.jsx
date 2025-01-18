// import React, { useState, useEffect } from "react";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Handle scroll event
//   useEffect(() => {
//     const toggleVisibility = () => {
//       // Show button when page is scrolled up 300px
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", toggleVisibility);

//     // Clean up event listener
//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className="fixed bottom-8 right-8 w-[45px] h-[45px]
//                      bg-gradient-to-b from-[#44ea76] to-[#39fad7]
//                      flex items-center justify-center rounded-full
//                      cursor-pointer border-none relative group
//                      transition-opacity duration-300 ease-in-out
//                      opacity-90 hover:opacity-100 z-50"
//       aria-label="Back to top"
//     >
//       <svg
//         height="1.2em"
//         viewBox="0 0 512 512"
//         className="fill-white transition-all duration-700
//                        group-hover:animate-[slide-in-bottom_0.7s_cubic-bezier(0.25,0.46,0.45,0.94)_both]"
//       >
//         <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
//       </svg>
//       <p
//         className="text-xs w-[100px] absolute text-white
//                        flex items-center justify-center -bottom-[18px]
//                        opacity-0 transition-opacity duration-700
//                        group-hover:opacity-100"
//       >
//         Back to Top
//       </p>
//     </button>

//   );
// };

// export default ScrollToTop;

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;

      if (scrolled > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box
        className={`fixed right-4 bottom-4 lg:right-7 lg:bottom-7 z-[9999] bg-textStrong w-12 h-12 p-auto rounded-full flex align-middle justify-center cursor-pointer transition-all duration-300 ${
          isVisible ? "transition-opacity opacity-90 hover:opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onClick={scrollToTop}
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <svg
          height="1.2em"
          viewBox="0 0 512 512"
          className="fill-backgroundColor self-center transition-all duration-700
                       group-hover:animate-[slide-in-bottom_0.7s_cubic-bezier(0.25,0.46,0.45,0.94)_both]"
        >
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </Box>
    </>
  );
};

export default ScrollToTop;
