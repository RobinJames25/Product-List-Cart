import React, { useState } from "react";
import cartEmpty from "../../assets/images/illustration-empty-cart.svg";
import iconOrder from "../../assets/images/icon-order-confirmed.svg";
import carbon from "../../assets/images/icon-carbon-neutral.svg";
import "./Cart.css";


function Cart({ cart, removeFromCart, updateQuantity }) {
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const calculateTotal = () => {
        return Object.values(cart).reduce((total, product) => total + (product.quantity * product.price), 0);
    };

    const handleConfirmOrder = () => {
        setOrderConfirmed(true);
    };

    const resetCart = () => {
        window.location.reload(); // Simulate starting a new order
    };

    // Render the order summary content
    const renderOrderSummary = () => {
        return Object.entries(cart).map(([productName, product]) => {
            return (
                <div className="summary-item" key={productName}>
                    <div className="final-infos">
                        <img src={product.images.thumbnail} alt={product.name} className="product-image-summary" />
                        <div>
                            <h2>{product.description}</h2>
                            <div className="final-div-infos">
                                <p className="product-quantity">{product.quantity}x</p>
                                <p className="single-price">@ ${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                        
                    </div>
                    <p className="final-price">${(product.quantity * product.price).toFixed(2)}</p>
                </div>
            );
        });
    };

    return (
        <aside className="sidebar">
        <div className="cart">
            <h4>Your Cart ({Object.keys(cart).length})</h4>
            {Object.keys(cart).length === 0 ? (
                <div className="empty-content">
                    <img src={cartEmpty} alt="empty-cart" />
                    <p className="empty-message">Your added items will appear here.</p>
                </div>
            ) : (
                <div className="cart-items">
                    {Object.entries(cart).map(([productName, product]) => (
                        <div className="cart-item" key={productName}>
                            <div>
                                <h2 >{product.description}</h2>
                                <div className="pdcs-infos">
                                        <p className="product-quantity">{product.quantity}x</p>
                                        <p className="single-price">@ ${product.price.toFixed(2)}</p>
                                        <p className="total-price">${(product.quantity * product.price).toFixed(2)}</p>
                                </div>
                            </div>
                                <svg className="icon-remove" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    x="0px" y="0px" width="24" height="24" viewBox="0 0 128 128" 
                                    onClick={() => removeFromCart(productName)}>
                                    <path d="M 64 6 C 48.5 6 33.9 12 23 23 C 12 33.9 6 48.5 6 64 C 6 79.5 12 94.1 23 105 C 34 116 48.5 122 64 122 C 79.5 122 94.1 116 105 105 C 116 94 122 79.5 122 64 C 122 48.5 116 33.9 105 23 C 94.1 12 79.5 6 64 6 z M 64 12 C 77.9 12 90.900781 17.399219 100.80078 27.199219 C 110.70078 36.999219 116 50.1 116 64 C 116 77.9 110.60078 90.900781 100.80078 100.80078 C 90.900781 110.60078 77.9 116 64 116 C 50.1 116 37.099219 110.60078 27.199219 100.80078 C 17.299219 91.000781 12 77.9 12 64 C 12 50.1 17.399219 37.099219 27.199219 27.199219 C 36.999219 17.299219 50.1 12 64 12 z M 50.5625 47.5 C 49.8 47.5 49.05 47.800391 48.5 48.400391 C 47.3 49.600391 47.3 51.499609 48.5 52.599609 L 59.800781 64 L 48.400391 75.300781 C 47.200391 76.500781 47.200391 78.4 48.400391 79.5 C 49.000391 80.1 49.8 80.400391 50.5 80.400391 C 51.2 80.400391 51.999609 80.1 52.599609 79.5 L 64 68.199219 L 75.300781 79.5 C 75.900781 80.1 76.700391 80.400391 77.400391 80.400391 C 78.100391 80.400391 78.9 80.1 79.5 79.5 C 80.7 78.3 80.7 76.400781 79.5 75.300781 L 68.199219 64 L 79.5 52.699219 C 80.7 51.499219 80.699609 49.600391 79.599609 48.400391 C 78.399609 47.200391 76.500391 47.200391 75.400391 48.400391 L 64 59.800781 L 52.699219 48.400391 C 52.099219 47.800391 51.325 47.5 50.5625 47.5 z"></path>
                                </svg>       
                        </div>
                    ))}
                </div>
            )}

            <div className="cart-summary" style={{ display: Object.keys(cart).length ? 'block' : 'none' }}>
                <div className="total-div">
                    <p className="p-order">Order Total</p>
                    <p className="cart-total">${calculateTotal().toFixed(2)}</p>
                </div>
                <p className="carbo-neutral"><img src={carbon} alt="" />This is a carbo-neutral delivery</p>
                <button className="confirm-order" onClick={handleConfirmOrder}>Confirm order</button>
            </div>

            {orderConfirmed && (
                <div className="overlay">
                    <div className="final-summary">
                        <img src={iconOrder} alt="order confirmed" />
                        <h1>Order Confirmed</h1>
                        <p className="hope-p">We hope you enjoy your food!</p>

                        {/* Order summary */}
                        <div className="order-summary">
                            {renderOrderSummary()}
                            <p className="final-price">
                                Order Total <strong>${calculateTotal().toFixed(2)}</strong>
                            </p>
                        </div>

                        <button className="start-new-order" onClick={resetCart}>Start new order</button>
                    </div>
                </div>
            )}
        </div>
        </aside>
    );
}

export default Cart