import React from "react";
import { Container } from "@mui/material";
import { SplitText } from "../Animations/SplitText";
import ShinyText from "../Animations/ShinyText";
import BlobCursor from "../Animations/BlobCursor/BlobCursor";

const DownSideCover = () => {
  return (
    <div>
      <BlobCursor />
      <Container
        maxWidth="lg"
        className="h-screen flex flex-col justify-center align-middle"
      >
        <h1 className="text-headColor text-center tracking-widest text-5xl uppercase mb-4 mx-auto ">
          <SplitText text="DownSide" className="font-bold" delay={50} />
        </h1>
        <p className="text-secondaryTextColor text-center tracking-widest text-sm">
          <ShinyText
            text="Read more about my downside projects & activities below."
            disabled={false}
            speed={3}
            className=""
          />
        </p>
      </Container>
    </div>
  );
};

export default DownSideCover;
