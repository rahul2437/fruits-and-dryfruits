import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../assests/content";
import "./SingleProduct.css";
const getCategory = (data, key) => {
  return data.filter((cat) => cat.title === key)[0];
};

const getProduct = (data, key) => {
  return data.filter((prod) => prod.id === key);
};

const initState = {
  name: "..Loading",
  image: "..Loading",
  description: [],
  availability: "..Loading",
};

const SingleProduct = () => {
  const { id, category } = useParams();
  const [data, setData] = useState(initState);
  useEffect(() => {
    const pArray = getCategory(categories, category);
    const product = getProduct(pArray?.data || [], id);
    setData(product[0]);
  }, [id, category]);
  return (
    <div>
      <h1 className="title">{data?.name}</h1>
      <div className="single_page">
        <div>
          <img
            className="image"
            src={data?.img ? data?.img : "https://i.stack.imgur.com/kOnzy.gif"}
            alt="product_image"
          />
        </div>
        <ol>
          {data?.description?.map((each, i) => (
            <li key={i} className="desc">
              {each}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SingleProduct;
