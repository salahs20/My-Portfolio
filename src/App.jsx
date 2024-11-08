import React from "react";
import Header from "./Component/Component/Header";
import Footer from "./Component/Component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Projects from "./Component/Pages/Projects";
import CV from "./Component/Pages/CV";
import NotFound from "./Component/Pages/NotFound";
import ContactUs from "./Component/Pages/ContactUs";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Projects />} />
        <Route path="cv" element={<CV />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className=" w-full  flex justify-center items-center">
        <Footer />
      </div>
    </>
  );
};

export default App;
