"use client";
import { useParams } from 'next/navigation';
import foodData from '@/app/data';
import './item.css'

const ItemDetail = () => {
    const { id } = useParams();
    const item = foodData.find(data => data.id === parseInt(id, 10));

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="item-detail-container">
            <div className='item-detail'>
                <div className='image-container'>
                    <img src={item.img} alt="food" className='image' />
                </div>
                <h4>{item.Rs}</h4>
                <h6>{item.strCategory}</h6>  
                <p>{item.description}</p>
                <button> Add cart</button>
            </div>
        </div>
    );
};

export default ItemDetail;