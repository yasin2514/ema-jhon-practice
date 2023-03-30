import React from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Shop = (props) => {
    const { id, category, name, seller, price, ratings, img } = props.product;
    return (
        <div className='card-details'>
            <div className='card-image'>
                <img src={img} alt="" />
            </div>
            <div className='card-info'>
                <h5 className='card-title'>{name}</h5>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button className='card-footer' onClick={() => props.handleAddToCart(props.product)}>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Shop;