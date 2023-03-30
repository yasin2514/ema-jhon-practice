import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    function addToCart(product) {
        setCart([...cart, product]);
    }
    return (
        <div className='products-container'>
            <div className='product'>
                {
                    products.map(product => <Shop product={product} key={product.id} handleAddToCart={addToCart}></Shop>)
                }

            </div>
            <div className='order'>
                <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Order Details</h2>
                <div style={{ marginTop: "20px" }}>
                    <p>Selected Items: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Products;