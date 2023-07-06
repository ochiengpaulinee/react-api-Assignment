import React from "react";
import '/style.css';


const Navbar = ()=>{
    return(
        <div className="nav">
            <nav className="navigation">
                <ul className="ul"> 
                <li><a href="/home">home</a></li>
                <li><a href="/login">login</a></li>
                <li><a href="/products">Products</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar