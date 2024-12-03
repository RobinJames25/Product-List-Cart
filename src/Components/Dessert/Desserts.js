import React, { useState } from "react";

import waffle1 from "../../assets/images/image-waffle-desktop.jpg";
import waffle2 from "../../assets/images/image-waffle-tablet.jpg";
import waffle3 from "../../assets/images/image-waffle-mobile.jpg";
import waffle4 from "../../assets/images/image-waffle-thumbnail.jpg";

import creme1 from "../../assets/images/image-creme-brulee-desktop.jpg";
import creme2 from "../../assets/images/image-creme-brulee-tablet.jpg";
import creme3 from "../../assets/images/image-creme-brulee-mobile.jpg";
import creme4 from "../../assets/images/image-creme-brulee-thumbnail.jpg";

import macaron1 from "../../assets/images/image-macaron-desktop.jpg";
import macaron2 from "../../assets/images/image-macaron-tablet.jpg";
import macaron3 from "../../assets/images/image-macaron-mobile.jpg";
import macaron4 from "../../assets/images/image-macaron-thumbnail.jpg";

import tiramisu1 from "../../assets/images/image-tiramisu-desktop.jpg";
import tiramisu2 from "../../assets/images/image-tiramisu-tablet.jpg";
import tiramisu3 from "../../assets/images/image-tiramisu-mobile.jpg";
import tiramisu4 from "../../assets/images/image-tiramisu-thumbnail.jpg";

import baklava1 from "../../assets/images/image-baklava-desktop.jpg";
import baklava2 from "../../assets/images/image-baklava-tablet.jpg";
import baklava3 from "../../assets/images/image-baklava-mobile.jpg";
import baklava4 from "../../assets/images/image-baklava-thumbnail.jpg";

import meringue1 from "../../assets/images/image-meringue-desktop.jpg";
import meringue2 from "../../assets/images/image-meringue-tablet.jpg";
import meringue3 from "../../assets/images/image-meringue-mobile.jpg";
import meringue4 from "../../assets/images/image-meringue-thumbnail.jpg";

import cake1 from "../../assets/images/image-cake-desktop.jpg";
import cake2 from "../../assets/images/image-cake-tablet.jpg";
import cake3 from "../../assets/images/image-cake-mobile.jpg";
import cake4 from "../../assets/images/image-cake-thumbnail.jpg";

import brownie1 from "../../assets/images/image-brownie-desktop.jpg";
import brownie2 from "../../assets/images/image-brownie-tablet.jpg";
import brownie3 from "../../assets/images/image-brownie-mobile.jpg";
import brownie4 from "../../assets/images/image-brownie-thumbnail.jpg";

import panna1 from "../../assets/images/image-panna-cotta-desktop.jpg";
import panna2 from "../../assets/images/image-panna-cotta-tablet.jpg";
import panna3 from "../../assets/images/image-panna-cotta-mobile.jpg";
import panna4 from "../../assets/images/image-panna-cotta-thumbnail.jpg";

import "./Dessert.css";
import Cart from "../Cart/Cart";
import icon from "../../assets/images/icon-add-to-cart.svg";
import icon2 from "../../assets/images/icon-decrement-quantity.svg";
import icon3 from "../../assets/images/icon-increment-quantity.svg";

const dessertData = [
    {
        id: 1,
        name: "Waffle",
        description: "Waffle with Berries",
        price: 6.5,
        images: { desktop: waffle1, tablet: waffle2, mobile: waffle3, thumbnail: waffle4 }
    },
    {
        id: 2,
        name: "Crème Brûlées",
        description: "Vanilla Bean Crème Brûlée",
        price: 7.0,
        images: { desktop: creme1, tablet: creme2, mobile: creme3, thumbnail: creme4 }
    },
    {
        id: 3,
        name: "Macaron",
        description: "Macaron Mix of Five",
        price: 8.0,
        images: { desktop: macaron1, tablet: macaron2, mobile: macaron3, thumbnail: macaron4 }
    },
    {
        id: 4,
        name: "Tiramisu",
        description: "Classic Tiramisu",
        price: 5.0,
        images: { desktop: tiramisu1, tablet: tiramisu2, mobile: tiramisu3, thumbnail: tiramisu4 }
    },
    {
        id: 5,
        name: "Baklava",
        description: "Pistachio Baklava",
        price: 4.0,
        images: { desktop: baklava1, tablet: baklava2, mobile: baklava3, thumbnail: baklava4 }
    },
    {
        id: 6,
        name: "Pie",
        description: "Lemon Meringue Pie",
        price: 5.0,
        images: { desktop: meringue1, tablet: meringue2, mobile: meringue3, thumbnail: meringue4 }
    },
    {
        id: 7,
        name: "Cake",
        description: "Red Velvet Cake",
        price: 4.5,
        images: { desktop: cake1, tablet: cake2, mobile: cake3, thumbnail: cake4 }
    },
    {
        id: 8,
        name: "Brownie",
        description: "Salted Caramel Brownie",
        price: 5.5,
        images: { desktop: brownie1, tablet: brownie2, mobile: brownie3, thumbnail: brownie4 }
    },
    {
        id: 9,
        name: "Panna Cotta",
        description: "Vanilla Panna Cotta",
        price: 6.5,
        images: { desktop: panna1, tablet: panna2, mobile: panna3, thumbnail: panna4 }
    }
];

const Dessert = () => {
    const [cart, setCart] = useState({});
    const [activeImage] = useState(null);

    // Add to cart
    const addToCart = (dessert) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };

            if (updatedCart[dessert.name]) {
                updatedCart[dessert.name].quantity += 1;
            } else {
                updatedCart[dessert.name] = { ...dessert, quantity: 1 };
            }

            return updatedCart;
        });
    };

    // Update quantity in cart
    const updateQuantity = (dessertName, increment) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart }; // Shallow copy of the cart
    
            if (updatedCart[dessertName]) {
                const updatedProduct = { ...updatedCart[dessertName] }; // Create a copy of the product object
                updatedProduct.quantity += increment;
    
                if (updatedProduct.quantity <= 0) {
                    delete updatedCart[dessertName]; // Remove product from cart if quantity <= 0
                } else {
                    updatedCart[dessertName] = updatedProduct; // Update product in the cart
                }
            }
    
            return updatedCart; // Return updated cart state
        });
    };
    

    // Get total price of the cart
    const getCartTotal = () => {
        return Object.values(cart).reduce(
            (total, product) => total + product.quantity * product.price,
            0
        );
    };

    return (
        <>
            <div className="cont">
                <section className="main-section">
                <h1>Desserts</h1>
                <main>
                    {dessertData.map((dessert) => (
                        <div className="card" key={dessert.id}>
                            <picture>
                                <source media="(max-width: 768px)" srcSet={dessert.images.mobile} />
                                <source media="(max-width: 1024px)" srcSet={dessert.images.tablet} />
                                <img
                                    src={dessert.images.desktop}
                                    alt={dessert.name}
                                    className={`img ${cart[dessert.name] ? 'active' : ''}`}
                                />
                            </picture>

                            {/* Only show the 'Add to Cart' button if the product is not in the cart */}
                            {!cart[dessert.name] ? (
                                <button
                                    className="add-to-cart"
                                    onClick={() => addToCart(dessert)} // Add product to cart and activate the counter
                                    disabled={activeImage === dessert.id} // Disable the button if the image is active
                                >
                                    <img src={icon} alt="Add to Cart" /> Add to Cart
                                </button>
                            ) : (
                                // Show the counter if the product is in the cart
                                <div className="counter active">
                                    <img
                                        className="icon-decrement"
                                        src={icon2}
                                        alt="Decrement Quantity"
                                        onClick={() => updateQuantity(dessert.name, -1)}
                                    />
                                    <span>{cart[dessert.name]?.quantity || 0}</span>
                                    <img
                                        className="icon-increment"
                                        src={icon3}
                                        alt="Increment Quantity"
                                        onClick={() => updateQuantity(dessert.name, 1)}
                                    />
                                </div>
                            )}
                            
                            <p>{dessert.name}</p>
                            <h2 className="text-1">{dessert.description}</h2>
                            <h3 className="text-2">${dessert.price.toFixed(2)}</h3>
                        </div>
                    ))}
                </main>
                </section>
                <Cart
                    cart={cart}
                    removeFromCart={(productName) => {
                        setCart((prevCart) => {
                            const updatedCart = { ...prevCart };
                            delete updatedCart[productName];
                            return updatedCart;
                        });
                    }}
                    updateQuantity={updateQuantity}
                    cartTotal={getCartTotal()}
                />
            </div>

            
                
            
        </>
    );
};

export default Dessert;
