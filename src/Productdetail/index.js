import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './style.css'


const Productdetail = () =>{
    const { productId } = useParams();
    const [product, setProducts] = useState();

    useEffect(() =>{
        const getDetails = async ()=>{
            try{
                const response = await fetch (`https://dummyjson.com/products/${productId}`);
                const data = await response.json();
                setProducts(data);
            }
            catch(error){
                console.log(error)
            }
        }
        getDetails();
    },
    [productId]);

    if(!product){
        return <h4>loading.....</h4>;
    }
    return(
        <div className="details">
            <h2>Product Details</h2>
            <div className="productdetails">
                <img src={product.thumbnail} alt={product.name}/>
                <h2>name:{product.name}</h2>
                <p>Description:{product.description}</p>
                <p>Brand:{product.brand}</p>
                <h1>Price:{product.price}</h1>
            </div>
        </div>
    );
};

export default Productdetail