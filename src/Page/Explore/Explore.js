import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Explore.css'

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://frozen-sands-28577.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>New Offers</h2>
            <div className="container" >
                <div className="offer">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Explore;