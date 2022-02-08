import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Header from "../../components/layouts/Header";
import BodyLeft from "../../components/layouts/BodyLeft";
import BodyRight from "../../components/layouts/BodyRight";
import Body from "../../components/layouts/Body";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          backgroundColor: "rgb(196, 196, 196)",
        }}
      >
        <BodyLeft />
        <Body />
        <BodyRight />
      </div>
    </>
  );
};

export default HomePage;
