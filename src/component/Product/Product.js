import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    const { addToCartClick } = props
    return (
        <div className='product'>
            <img src={img} alt="hello" />
            <div className='product-info'>
                <p className='productName'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={() => addToCartClick(props.product)} className='btn-cart'>
                <p>Add To cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>


            </button>
        </div>
    );
};

export default Product;