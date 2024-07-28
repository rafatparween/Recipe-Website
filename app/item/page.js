'use client';
import { useParams, useRouter } from 'next/navigation';
import { useCart } from '@/app/context/cartContext';
import foodData from '@/app/data';

const ItemDetail = () => {
  const { id } = useParams();  
  const router = useRouter();
  const { addToCart } = useCart();
  
  const item = foodData.find(data => data.id === parseInt(id, 10));
  
  if (!item) {
    return <div>Item not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(item);
    alert("Added to cart");
  };

  const handleBuyNow = () => {
    const query = new URLSearchParams({
      itemName: item.strCategory,
      itemPrice: item.Rs
    }).toString();
    router.push(`/success?${query}`);
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
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ItemDetail;
