import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import './style.css';

const Productpage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log({ products });
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
             <br/>
             <br/>
    <div className="product">
      {products.map((item) => (
        <div className="item" key={item.id}>
          <img className="img" src={item.thumbnail} alt=" "></img>
          <h3 className="title">{item.title}</h3>
          <h4 className="price">Ksh.{item.price}</h4>
          <h6 className="discount">{item.discountPercentage}%</h6>
          <Link to={`/login/${item.id}`} key={item.id} >
          <button className="links">See More</button>
          </Link>
        </div>
      ))}
    </div>
    <Link to={`/ProductDetails`} ><button className="add">Add Product</button></Link>
    {/* <Link to={`/login`} ><button className="add">ProductDetails</button></Link> */}
    </div>
  );
};
export default Productpage;