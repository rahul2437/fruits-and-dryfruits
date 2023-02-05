import React from "react";
import { categories } from "../../assests/content";
import "./Products.css";
const Products = () => {
  return (
    <div>
      {categories.map((category) => (
        <div>
          <div className="cTitle">{category.title}</div>
          <CategoryCards data={category.data} />
        </div>
      ))}
    </div>
  );
};

const CategoryCards = ({ data }) => {
  return (
    <div className="product_card_list">
      {data.map((product) => (
        <div className="product_card">
          <div>
            <img className="image" src={product.img} alt="product_image" />
          </div>
          <div className="product_details">
            <div className="product_title">{product.name}</div>
            <div className="product_description">{product.description}</div>
            <a href={`products/${product.category}/${product.id}`}>
              <button className="more_button">See More...</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
