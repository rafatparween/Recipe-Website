"use client";
import { useCart } from '@/app/context/cartContext';
import './cart.css';

const CartPage = () => {
    const { cart } = useCart();
    
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.Rs);
        return total + (isNaN(price) ? 0 : price);
    }, 0);

    return (
        <div className="cart-container">
            {cart.length === 0 ? (
                <div>Your cart is empty</div>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.img} alt={item.description} className="cart-item-image" />
                            <div>
                                <h4>₹<span>{item.Rs}</span></h4>
                                <h6>{item.strCategory}</h6>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        Total Price: ₹{totalPrice.toFixed(2)}
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
