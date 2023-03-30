import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;