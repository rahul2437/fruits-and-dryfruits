import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
  );
};

export default MainRoutes;
