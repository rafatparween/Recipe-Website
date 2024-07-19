import Link from 'next/link';
import './landingPage.css';

const LanDingPageCol = ({ id, img, description, price,name }) => {
    return (
        <div className="col-sm-12 col-md-3">
            <Link href={`/details/${id}`}>
                
                    <div className='imageContainer'>
                        <div className='dataImage'><img src={img} alt="food" className='image' /></div>
                    </div>
                    <h4>{price}</h4>
                    <h6>{name}</h6>
                    <p>{description}</p>
                
            </Link>
        </div>
    );
};

export default LanDingPageCol;
