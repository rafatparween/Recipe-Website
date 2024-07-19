"use client";
import { useParams } from 'next/navigation';
import { useCart } from '@/app/context/cartContext';
import foodData from '@/app/data';
import './item.css';

const ItemDetail = () => {
    const { id } = useParams();
    const item = foodData.find(data => data.id === parseInt(id, 10));
    const { addToCart } = useCart(); 

    if (!item) {
        return <div>Item not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(item);
    };

    return (
        <div className="item-detail-container">
            <div className='item-detail'>
                <div className='image-container'>
                    <img src={item.img} alt="food" className='image' />
                </div>
                <h4>₹<span>{item.Rs}</span></h4>
                <h6>{item.strCategory}</h6>
                <p>{item.description}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>
    );
};

export default ItemDetail;
