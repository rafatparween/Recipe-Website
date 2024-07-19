import './landingPage.css'
import LanDingPageCol from './landingPageCol';

const LandingPageRow = ({ item ,item1,item2,item3}) => {
    return (
        <div className='row'>
            <LanDingPageCol img={item.img} description={item.description}   price={item.Rs} id={item.id} name={item.strCategory}/>
            <LanDingPageCol img={item1.img} description={item1.description} price={item1.Rs}id={item1.id} name={item1.strCategory}/>
            <LanDingPageCol img={item2.img} description={item2.description} price={item2.Rs} id={item2.id} name={item2.strCategory}/>
            <LanDingPageCol img={item3.img} description={item3.description} price={item3.Rs} id={item3.id} name={item3.strCategory}/>
        </div>
    );
}

export default LandingPageRow;