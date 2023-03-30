import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const { cart } = props;
    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 0.07;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Order Summary</h2>
            <div style={{ marginTop: "40px" }}>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;