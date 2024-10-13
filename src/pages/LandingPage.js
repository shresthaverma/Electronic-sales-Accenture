import React, { useState } from 'react';
import './LandingPage.css'; 

const LandingPage = () => {

    const initialProducts = [
        {
            id: 1,
            name: "Audio Products",
            description: "Explore our wide range of audio products.",
            image: "https://www.reliancedigital.in/medias/Apple-Airpods-Pro-2nd-Gen-493839243-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMDE0N3xpbWFnZS9qcGVnfGltYWdlcy9oNjcvaDI5LzEwMDUwNzMxNDA5NDM4LmpwZ3w1MGE2NjQxZWU0M2Y5ZmNkY2Y3YzYwNmMzNzc2YTRmZmQ3NDhhZGQ3MzY4MDU5NzhjYTdhMzhlODM1Zjk4NTQw",
            quantity: 0,
        },
        {
            id: 2,
            name: "Phones",
            description: "Latest smartphones at amazing prices.",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
            quantity: 0,
        },
       
    ];

    const [products, setProducts] = useState(initialProducts);
    const [notification, setNotification] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const openModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const confirmAddToCart = () => {
        if (selectedProduct) {
            setProducts(products.map(product => 
                product.id === selectedProduct.id ? { ...product, quantity: product.quantity + 1 } : product
            ));
            setNotification('Product added to cart!'); 
            setTimeout(() => setNotification(''), 3000); 
        }
        setModalOpen(false); 
    };

 
    const removeFromCart = (id) => {
        setProducts(products.map(product => 
            product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
        ));
    };

    return (
        <div className="landing-page">
            <header className="hero-section">
                <h1>Welcome to Electronics Hub</h1>
                <p>Your one-stop shop for all electronics!</p>
                <button className="cta-button">Shop Now</button>
            </header>

            {notification && <div className="notification">{notification}</div>} 

            <section className="products-section">
                <h2>Featured Categories</h2>
                <div className="product-cards">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className="cart-controls">
                                <button onClick={() => removeFromCart(product.id)}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => openModal(product)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Electronics Hub. All rights reserved.</p>
            </footer>

            {modalOpen && (
                <div className="modal" onClick={() => setModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Confirm Add to Cart</h2>
                            <span className="modal-close" onClick={() => setModalOpen(false)}>&times;</span>
                        </div>
                        <p>Do you want to add {selectedProduct ? selectedProduct.name : ''} to the cart?</p>
                        <div className="modal-footer">
                            <button onClick={confirmAddToCart}>Yes</button>
                            <button onClick={() => setModalOpen(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
