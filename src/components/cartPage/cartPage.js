import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCloseCircleOutline } from 'react-icons/io';

const CartPage = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        try {
            const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartItems(storedCart);
        } catch (error) {
            console.error("Failed to parse cart from localStorage", error);
            setCartItems([]);
        }
    }, []);

    const saveCart = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        saveCart(updatedCart);
    };

    const handleEditItem = (item, index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        saveCart(updatedCart);
        navigate(`/product/${item.id}`);
    };
    
    const handleClearCart = () => {
        if (window.confirm("Are you sure you want to clear your cart?")) {
            localStorage.removeItem('cart');
            setCartItems([]);
        }
    };

    const handleDmToOrder = () => {
        let message = "Hi, I would like to place an order for the following items:\n\n";
        cartItems.forEach(item => {
            message += `- ${item.name} (x${item.quantity || 1})\n`;
            message += `  Price: ₹${item.totalPrice} per item\n`;
            
            if (item.selectedOptions) {
                const customizations = [
                    ...item.selectedOptions.baseComponents?.map(comp => comp.name) || [],
                    ...item.selectedOptions.complementaryItems?.map(comp => `${comp.name} (Complementary)`) || [],
                    ...item.selectedOptions.addOns?.map(addOn => addOn.name) || [],
                ];

                // ** FIXED PLATE LOGIC FOR WHATSAPP **
                if (item.selectedOptions.plates && Object.keys(item.selectedOptions.plates).length > 0) {
                    const allPlateParts = Object.entries(item.selectedOptions.plates).map(([type, weights]) => {
                        if (Object.keys(weights).length > 0) {
                            const weightParts = Object.entries(weights).map(([weight, quantity]) => `${quantity}x ${weight}`);
                            return `${type}: ${weightParts.join(', ')}`;
                        }
                        return null;
                    }).filter(Boolean);

                    if (allPlateParts.length > 0) {
                        customizations.push(`Plates: ${allPlateParts.join('; ')}`);
                    }
                }

                if (customizations.length > 0) {
                    message += `  Specifications: ${customizations.join(', ')}\n`;
                }
            }
            message += `\n`;
        });

        message += `\nSubtotal: ₹${subtotal}\n`;
        message += `Total Discount: -₹${Math.round(totalDiscount)}\n`;
        message += `Shipping Fee: ₹${shippingFee}\n`;
        message += `Total to Pay: ₹${totalToPayWithShipping}\n\n`;
        message += `Please confirm my order.`;

        window.open(`https://wa.me/+919354840793?text=${encodeURIComponent(message)}`, "_blank");
    };

    const SHIPPING_FEE_THRESHOLD = 1599;
    const SHIPPING_FEE_COST = 99;

    const { subtotal, totalToPay, totalDiscount, shippingFee, totalToPayWithShipping } = useMemo(() => {
        let sub = 0;
        let total = 0;
        cartItems.forEach(item => {
            const quantity = item.quantity || 1;
            sub += item.originalPrice * quantity;
            total += item.totalPrice * quantity;
        });
        const discount = sub - total;
        const shipping = (total >= SHIPPING_FEE_THRESHOLD) ? 0 : SHIPPING_FEE_COST;
        const finalTotal = total + shipping;

        return { 
            subtotal: sub, 
            totalToPay: total, 
            totalDiscount: discount, 
            shippingFee: shipping, 
            totalToPayWithShipping: finalTotal 
        };
    }, [cartItems]);

    // ** FULLY CORRECTED formatCustomizations FUNCTION **
    const formatCustomizations = (selectedOptions) => {
        if (!selectedOptions) return null;

        const included = selectedOptions.baseComponents?.map(comp => comp.name).join(', ');
        const complementary = selectedOptions.complementaryItems?.map(comp => comp.name).join(', ');
        const addOns = selectedOptions.addOns?.map(addOn => addOn.name).join(', ');

        let platesStrings = [];
        if (selectedOptions.plates && Object.keys(selectedOptions.plates).length > 0) {
            for (const [type, weights] of Object.entries(selectedOptions.plates)) {
                if (Object.keys(weights).length > 0) {
                    const weightParts = Object.entries(weights)
                        .map(([weight, quantity]) => `${quantity}x ${weight}`);
                    
                    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
                    platesStrings.push(`${capitalizedType}: ${weightParts.join(', ')}`);
                }
            }
        }

        return (
            <div className="customization-details-structured">
                {included && <p><strong>Included:</strong> {included}</p>}
                {complementary && <p><strong>Complementary:</strong> {complementary}</p>}
                {addOns && <p><strong>Add-ons:</strong> {addOns}</p>}
                {platesStrings.length > 0 && (
                    <div className="plates-section">
                        {platesStrings.map((str, index) => <p key={index}><strong>Plates:</strong> {str}</p>)}
                    </div>
                )}
            </div>
        );
    };

    const styles = `
        /* ... existing styles ... */
        .cart-page { max-width: 1400px; margin: 80px auto; padding: 0 20px; color: #fff; font-family: 'Roboto', sans-serif; margin-top: 150px; }
        .cart-page h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 40px; text-align: center; }
        .cart-content { display: flex; gap: 40px; align-items: flex-start; }
        .cart-items { flex: 2; display: flex; flex-direction: column; gap: 20px; }
        .order-summary { flex: 1; background: #1a1a1a; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.4); position: sticky; top: 100px; min-width: 250px; }
        .order-summary h2 { font-size: 1.5rem; border-bottom: 2px solid #333; padding-bottom: 15px; margin-bottom: 20px; }
        .summary-line { display: flex; justify-content: space-between; font-size: 1rem; margin-bottom: 10px; }
        .summary-total { font-size: 1.2rem; font-weight: 700; border-top: 1px solid #333; padding-top: 15px; margin-top: 15px; display: flex; justify-content: space-between; }
        .clear-cart-button { width: 100%; padding: 15px; background-color: #666; color: #000; border: none; border-radius: 8px; font-size: 1.2rem; font-weight: 700; cursor: pointer; margin-top: 10px; display: flex; align-items: center; justify-content: center; gap: 10px; transition: background-color 0.2s ease; }
        .clear-cart-button:hover { background-color: #888; }
        .cart-card { display: flex; margin-right:50px; background: #1a1a1a; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.4); transition: transform 0.2s ease; position: relative; align-items: center; width: 93%; padding: 10px 20px; gap: 15px; margin-left:20px; }
        .cart-card:hover { transform: translateY(-3px); }
        .card-image-container { width: 120px; height: 120px; min-width: 120px; overflow: hidden; border-radius: 12px; }
        .cart-card img { width: 100%; height: 100%; object-fit: cover; }
        .card-details-container { flex-grow: 1; display: flex; flex-direction: column; padding: 5px; position: relative; }
        .card-details-container h3 { font-size: 1rem; margin-bottom: 5px; }
        .customization-details-structured { font-size: 0.85rem; color: #ccc; margin-top: 5px; }
        .customization-details-structured p { margin: 2px 0; line-height: 1.4; }
        .customization-details-structured strong { color: #fff; font-weight: 600; }
        .remove-btn { background: none; border: none; color: #e53e3e; cursor: pointer; font-size: 24px; position: absolute; top: 10px; right: 10px; z-index: 10; }
        .edit-btn { background: none; color: #fff; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: color 0.2s ease; position: absolute; bottom: 15px; right: 15px; }
        .edit-btn:hover { color: #d4af37; }
        .dm-button { width: 100%; padding: 15px; background-color: #d4af37; color: #000; border: none; border-radius: 8px; font-size: 1.2rem; font-weight: 700; cursor: pointer; margin-top: 20px; display: flex; align-items: center; justify-content: center; gap: 10px; transition: background-color 0.2s ease; }
        .dm-button:hover { background-color: #b8982b; }
        .empty-cart { text-align: center; font-size: 1.2rem; color: #888; padding: 50px; }
        .price-display-wrapper { display: flex; flex-direction: column; align-items: flex-end; margin-left: auto; gap: 5px; }
        .price-display-wrapper .current-price { font-size: 1.5rem; font-weight: 700; color: #fff; text-shadow: none !important; }
        .price-display-wrapper .original-price-info { display: flex; align-items: center; gap: 5px; }
        .price-display-wrapper .original-price { font-size: 0.9rem; text-decoration: line-through; color: #888; }
        .price-display-wrapper .discount-badge { background-color: #e53e3e; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; }

        /* ** NEW STYLE FOR SAVINGS MESSAGE ** */
        .savings-message {
            color: #48bb78;
            font-weight: 700;
            text-align: center;
            margin: 15px 0;
            padding: 10px;
            background-color: rgba(72, 187, 120, 0.1);
            border-radius: 8px;
            border: 1px solid rgba(72, 187, 120, 0.3);
        }

        @media (max-width: 768px) {
            .cart-content { flex-direction: column; }
            .order-summary { order: 1; position: static; width: 100% !important; margin: 0 !important; padding: 25px 20px; box-sizing: border-box; }
            .cart-items { order: 2; }
            .cart-card { padding: 10px 20px; margin-right:0px; gap: 10px; margin-left:-5px; width: 100%; box-sizing: border-box; }
            .card-image-container { width: 100px; height: 100px; min-width: 100px; }
            .card-details-container { padding: 5px; flex-grow: 1; }
            .card-details-container h3 { font-size: 0.9rem; margin-bottom: 2px; }
            .customization-details-structured p { font-size: 0.75rem; line-height: 1.2; }
            .price-display-wrapper { align-items: flex-end; margin-left: auto; padding-right: 0; gap: 2px; }
            .remove-btn { font-size: 20px; top: 5px; right: 5px; }
            .edit-btn { padding: 6px 12px; font-size: 0.8rem; bottom: 5px; right: 5px; }
        }
        @media (max-width: 420px) {
            .cart-card { padding: 8px 15px; gap: 8px; margin-left:0 !important; }
            .card-image-container { width: 80px; height: 80px; min-width: 80px; }
            .card-details-container { padding: 5px 0; }
            .price-display-wrapper { padding-right: 8px; }
        }
    `;

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <style>{styles}</style>
                <h1>Your Cart</h1>
                <div className="empty-cart">Your cart is empty. Time to get shopping!</div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <style>{styles}</style>
            
            <h1>Your Cart</h1>
            <div className="cart-content">
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-card">
                            <button onClick={() => handleRemoveItem(index)} className="remove-btn">
                                <IoIosCloseCircleOutline />
                            </button>
                            <div className="card-image-container">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="card-details-container">
                                <h3>{item.name}</h3>
                                {formatCustomizations(item.selectedOptions)}
                            </div>
                            <div className="price-display-wrapper">
                                <div className="original-price-info">
                                    {item.originalPrice > item.totalPrice && (
                                        <>
                                            <span className="original-price">₹{item.originalPrice * (item.quantity || 1)}</span>
                                            <span className="discount-badge">{item.discount}</span>
                                        </>
                                    )}
                                </div>
                                <span className="current-price">₹{item.totalPrice * (item.quantity || 1)}</span>
                                <button onClick={() => handleEditItem(item, index)} className="edit-btn">
                                    Edit ›
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-line">
                        <span>Subtotal ({cartItems.length} items)</span>
                        <span>₹{subtotal}</span>
                    </div>
                    <div className="summary-line">
                        <span>Discount</span>
                        <span>-₹{Math.round(totalDiscount)}</span>
                    </div>
                    <div className="summary-line">
                        <span>Shipping</span>
                        <span>{shippingFee === 0 ? 'Free' : `₹${shippingFee}`}</span>
                    </div>

                    {/* ** NEW "YOU SAVED" MESSAGE ** */}
                    {totalDiscount > 0 && (
                        <div className="savings-message">
                            You saved ₹{Math.round(totalDiscount)} on this order! 🎉
                        </div>
                    )}

                    <div className="summary-total">
                        <span>Total to Pay</span>
                        <span>₹{totalToPayWithShipping}</span>
                    </div>
                    <button onClick={handleDmToOrder} className="dm-button">
                        <FaWhatsapp /> DM to Order
                    </button>
                    <button onClick={handleClearCart} className="clear-cart-button">
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;