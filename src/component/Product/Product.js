import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    // console.log(props);

    const { img, name, seller, price, stock } = props.product;

    return (
         <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <bar />
                <p><small>by:{seller} </small></p>
                <p>${price}</p>
                <p><small>Only{stock} left in stock - order soon </small></p>
                <button className="main-btn" 
                onClick={() => props.handleAddproduct(props.product)}> 
                <FontAwesomeIcon icon= {faShoppingCart}/>add to cart </button>
            </div>
             
        </div>
       
    );
};

export default Product;