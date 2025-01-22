import React from "react";
import MainPage from "./MainPage";
import { Provider } from "./context/sisicontext";

const Sisi = () => {
  return (
    <>
      <Provider>
        <MainPage />
      </Provider>
    </>
  );
};

export default Sisi;
