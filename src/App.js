import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Header" />
      <Body pageBody={<></>} />
      <Footer />
    </>
  );
}

export default App;
