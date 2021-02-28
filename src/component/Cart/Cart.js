import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    //  const total = cart.reduce((total,prd) => total +prd.price,0);
     let total = 0;
     for(let i = 0; i<cart.length; i++){
         const product = cart[i];
         total = total + product.price;

     }
     let shiping = 0;
    if(total > 35){
         shiping = 0;
     }
     else if(total > 15){
         shiping = 4.99;
     }
     else if(total > 0){
         shiping = 12.99
     }
  const tax = total / 10;
  const grandtotal = (total + shiping + Number(text).toFixed(2));

  const formatNumber = num => {
      const precision = num.toFixed(2);
      return Number(precision);
  }
    return (
        <div>
            <h4>order summary</h4>
            <p>Item ordered:{cart.length}</p>
            <p>product price: {formatNumber(total)}</p>
            <p><small> shiping cost:{shiping}  </small></p>
            <p><small> tax + VAT:{tax} </small></p>
            <p>Total price: {tax}</p>
        </div>
    );
};

export default Cart;