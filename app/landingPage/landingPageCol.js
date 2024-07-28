import Link from 'next/link';
import './landingPage.css';
import { useCart } from '@/app/context/cartContext';
import foodData from '@/app/data';

const LanDingPageCol = ({ id, img, description, price, name }) => {
    const item = foodData.find(data => data.id === parseInt(id, 10));
    
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item);
        alert("Added to cart");
    };

    return (
        <div className="col-sm-12 col-md-3">
            <Link href={`/item/${id}`}>
                <div className='imageContainer'>
                    <div className='dataImage'>
                        <img src={img} alt="food" className='image' />
                    </div>
                </div>
                <h4>₹<span>{price}</span></h4>
                <h6>{name}</h6>
                <p>{description}</p>
            </Link>
            <div className='btn'>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default LanDingPageCol;
