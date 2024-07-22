'use client';
import './success.css'
import { useSearchParams } from 'next/navigation';

const Success = () => {
  const searchParams = useSearchParams();
  const itemName = searchParams.get('itemName');
  const itemPrice = searchParams.get('itemPrice');


  return (
    <div className='successContainer'>
      <h1>Your order is confirmed <span className='conform'>{itemName}!</span></h1>
      <p>Total price: ₹{itemPrice}</p>
    </div>
  );
};

export default Success;


// 'use client';
// import './success.css';

// const Success = ({ itemName, itemPrice }) => {
//   return (
//     <div className='successContainer'>
//       <h1>Your order is confirmed <span className='conform'>{itemName}!</span></h1>
//       <p>Total price: ₹{itemPrice}</p>
//     </div>
//   );
// };

// export const getServerSideProps = async (context) => {
//   const { query } = context;
//   const itemName = query.itemName || 'Unknown Item';
//   const itemPrice = query.itemPrice || '0';

//   return {
//     props: {
//       itemName,
//       itemPrice,
//     },
//   };
// };

// export default Success;



