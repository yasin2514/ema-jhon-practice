import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // get id
        for (const id in storedCart) {
            // get the product using id
            const addedProduct = products.find(product => product.id == id);
            // get  quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step-4 added the product to the saved cart
                saveCart.push(addedProduct);
            }
        }
        // step -5 set the cart
        setCart(saveCart);
    }, [products])

    function addToCart(product) {
        setCart([...cart, product]);
        addToDb(product.id)
    }
    return (
        <div className='products-container'>
            <div className='product'>
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={addToCart}></Product>)
                }

            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;