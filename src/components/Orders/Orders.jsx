import React from 'react';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css';

const Orders = () => {
    return (
        <div className='products-container'>
            <div className='product'>
                <h2>Order page</h2>

            </div>
            <div>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;