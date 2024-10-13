import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ addToCart }) => {
    const { id } = useParams();
    const product = {
        id: id,
        name: 'Sample Product', 
        image: './224037_0_bbvgux.webp',
        description: 'Detailed description of the sample product.',
        price: 299,
    };

    return (
        <div className="product-details">
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetails;
