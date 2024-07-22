"use client";
import { useParams, useRouter } from 'next/navigation';
import { useCart } from '@/app/context/cartContext';
import './cart.css';
import foodData from '../data';

const CartPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const { cart } = useCart();

    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.Rs);
        return total + (isNaN(price) ? 0 : price);
    }, 0);

    const item = foodData.find(data => data.id === parseInt(id, 10));
    const handleBuyNow = (item) => {
        const query = new URLSearchParams({
          itemName: item.strCategory,
          itemPrice: item.Rs
        }).toString();
        router.push(`/success?${query}`);
    };

    return (
        <div className="cart-container">
            {cart.length === 0 ? (
                <div>Your cart is empty</div>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.description} className="cart-item-image" />
                            <div>
                                <h4>₹<span>{item.Rs}</span></h4>
                                <h6>{item.strCategory}</h6>
                                <p>{item.description}</p>
                            </div>
                            <div className='buyBtn'>
                                <button onClick={() => handleBuyNow(item)}>Buy Now</button>
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
