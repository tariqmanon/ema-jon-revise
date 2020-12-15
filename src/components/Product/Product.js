import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div className>
                <img src={img} alt=""/>
            </div>
            <div className="product-des">
                <h4>{name}</h4>
                <p><span>By </span>{seller}</p>
                <p>$ {price}</p>
                <p><span>Only {stock}</span> Left - Order Soon</p>
                <button className="cart-btn"
                onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;