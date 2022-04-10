import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import useProducts from '../../hooks/useProducts';

const Shop = () => {
    // const [products, setProducts] = useState([])
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([])
    // useEffect(() => {
    //     fetch('products.json')
    //         .then(response => response.json())
    //         .then(data => setProducts(data))
    // }, [])

    const addToCartClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='shopping'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCartClick={addToCartClick}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;