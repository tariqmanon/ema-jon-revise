import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //const totalPrice = cart.reduce((total,prd) => total + prd.price,0);
    let totalPrice = 0;
    for(let i =0; i<cart.length;i++){
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }

    let shipping = 0;
    if(totalPrice>15){
        shipping = 4.99;
    }else if(totalPrice>30){
        shipping = 0;
    }else if(totalPrice>0){
        shipping = 8.49;
    }

    const tax = totalPrice/10;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const grandTotal = totalPrice + shipping + tax;
    return (
        <div>
            <h4>Order Summary</h4>
            <h3>Items Ordered : {cart.length}</h3>
            <h4>Product price : {formatNumber(totalPrice)}</h4>
            <h3>Shipping : {shipping}</h3>
            <h4>Tax : {formatNumber(tax)}</h4>
            <h3>Total Price {formatNumber(grandTotal)}</h3>
        </div>
    );
};

export default Cart;