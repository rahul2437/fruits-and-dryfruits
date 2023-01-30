import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import SingleCategory from "../pages/singleCategory/SingleCategory";
import SingleProduct from "../pages/singleproduct/SingleProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<SingleCategory />} />
      <Route path="/products/:category/:id" element={<SingleProduct />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
  );
};

export default MainRoutes;
