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
    }, [productId]);

    if()
}