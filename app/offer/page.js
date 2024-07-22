'use client';
import React from 'react';

const offers = [
    {
        title: "Domino's Pizza",
        rating: "4.4",
        description: "Pizzas, Italian, Pastas, Desserts",
        offer: "₹150 OFF ABOVE ₹299",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8"
    },
    {
        title: "Irani Std. Tea",
        rating: "4.1",
        description: "Beverages, Snacks, Fast Food",
        offer: "₹125 OFF ABOVE ₹299",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1e756ee8d230b65d570f7e8e70f7062c"
    },
    {
        title: "Marwadi chaat & Tiffin services",
        rating: "4.1",
        description: "Rajasthani, Snacks, Chaat",
        offer: "60% OFF UPTO ₹120",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bdie0dbppeas6jfd8mek"
    },
    {
        title: "The Fritter Company",
        rating: "4.3",
        description: "Burgers, American, shawarma, Rolls &...",
        offer: "25% OFF UPTO ₹125",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hrn5r5ghcl7m3piog5iy"
    },
    {
        title: "Captain Olive",
        rating: "4.3",
        description: "Burgers, American, shawarma, Rolls &...",
        offer: "25% OFF UPTO ₹125",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3660c857274de528702f316b4a7a1996"
    },
    {
        title: "Temperature",
        rating: "4.4",
        description: "Desserts, Chaat, Juices, Beverages...",
        offer: "ITEMS AT ₹99",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e8f48a82caf1cdc428448f64dba7b61e"
    },
    {
        title: "Royal Biryani Kitchen",
        rating: "3.3",
        description: "Biryani, Chinese, Tandoor, Snacks, Mughlai",
        offer: "₹125 OFF ABOVE ₹349",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pumkvlptxkneyfdtisf5"
    },
    {
        title: "Sree Banashankari Donne Biryani",
        rating: "4.1",
        description: "Biryani, South Indian, Indian, Chinese, Grill...",
        offer: "₹100 OFF ABOVE ₹449",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/rze3ha5v1jced9951x0b"
    }
];

const OfferCard = ({ offer }) => {
    return (
        <div className="border rounded-lg shadow p-3 w-full sm:w-1/1 md:w-1/1 lg:w-1/1">
            <img src={offer.image} alt={offer.title} className="w-full h-64 object-cover rounded mb-4" />
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{offer.title}</h3>
                <span className="bg-green-500 text-white rounded-full px-2 py-1 text-sm">{offer.rating}</span>
            </div>
            <p className="text-gray-500 mb-2">{offer.description}</p>
            <span className="text-gray-700 font-bold">{offer.offer}</span>
        </div>
    );
};

const OffersList = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Restaurants With Great Offers Near Me</h1>
            <div className="flex flex-wrap -mx-2">
                {offers.map((offer, index) => (
                    <div key={index} className="px-2 mb-4 mt-[62px] ml-[70px]">
                        <OfferCard offer={offer} />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default OffersList;
