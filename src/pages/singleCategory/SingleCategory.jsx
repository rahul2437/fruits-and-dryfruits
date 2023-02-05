import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../assests/content";
import "./SingleCategory.css";
const getCategory = (data, key) => {
  return data.filter((cat) => cat.title === key)[0];
};

const initState = {
  name: "..Loading",
  image: "..Loading",
  description: [],
  availability: "..Loading",
};

const SingleCategory = () => {
  const { category } = useParams();
  const [data, setData] = useState(initState);
  useEffect(() => {
    const pArray = getCategory(categories, category);
    setData(pArray);
  }, [category]);
  return (
    <div className="single_cat_page">
      <div className="cTitle">{data.title}</div>
      <CategoryCards data={data.data} />
    </div>
  );
};

const CategoryCards = ({ data }) => {
  return (
    <div className="product_card_list">
      {data?.map((product) => (
        <div key={product?.id} className="product_card">
          <div>
            <img className="image" src={product?.img} alt="product_image" />
          </div>
          <div>
            <div className="product_title">{product?.name}</div>
            <div className="product_description">{product?.description}</div>
            <a href={`${product?.category}/${product?.id}`}>
              <button className="more_button">See More...</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCategory;
