import React from "react";
import MainPage from "./MainPage";
import { Provider } from "./context/sisicontext";
import Page from "./ResourcePage";

const Sisi = () => {
  return (
    <>
      <Provider>
        <MainPage />
        <Page />
      </Provider>
    </>
  );
};

export default Sisi;
