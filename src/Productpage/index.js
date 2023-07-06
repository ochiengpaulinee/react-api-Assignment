import React , {useState, useEffect}from "react";
import './style.css'
import { Link } from "react-router-dom";

const Products =()=>{
    const [products,setProducts] = useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })();
    }, [])
    console.log({ products })


    const getProducts = async ()=>{
        try{
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
    }

    if(loading){
        return <h2>Loading.....</h2>
    }
    return(
        <div>
            <br/>
            <br/>
    <div className="products">
        <h1>All products</h1>
        {products.map((item) =>(
            <div className="items" key={item.id}>
                <img className="image" src={item.thumbnail}></img>
                <h3 className="title">{item.title}</h3>
                <h3 className="price">{item.price}</h3>
                <h3 className="discount">{item.discountPercentage}</h3>
                <Link to={`/Productdetail/${item.id}`} key={item.id}><button className="product-detail">See more</button></Link>
                <Link to={`/Addproduct`}><button className="add">Add Product</button></Link>
            <h2>{item.title}</h2>
            </div>
        ))}
    </div>
    </div>
    );
};

export default Products


