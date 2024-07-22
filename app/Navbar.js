import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPercent,
  faLifeRing,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-20 p-1.5 shadow-lg bg-white md:h-16 lg:h-20">
      <div className="flex justify-between items-center h-full px-4 md:px-8">
        <div className="flex items-center space-x-2 w-1/4 font-medium text-lg md:w-1/5 lg:w-1/5">
          <Link legacyBehavior href="/restaurants">
            <a>
              <img
                className="w-10 h-10 transition-transform duration-800 hover:scale-125 md:w-8 md:h-8 lg:w-12 lg:h-12"
                src="https://cdn.iconscout.com/icon/free/png-64/swiggy-1613371-1369418.png"
                alt="Logo" 
              />
            </a>
          </Link>
          <Link legacyBehavior href="/#">
            <a className="text-base md:text-sm lg:text-xl hover:text-orange-500">Home</a>
          </Link>
        </div>

        <div className="flex justify-around items-center w-3/4 md:w-4/5 lg:w-4/5">
          <div className="flex items-center space-x-2 w-1/5 h-full">
            <FontAwesomeIcon className="w-4 h-4 transition-transform duration-500 hover:scale-125 hover:text-orange-500 md:w-3 md:h-3 lg:w-4 lg:h-4" icon={faSearch} />
            <span className="hidden md:inline-block">
              <Link legacyBehavior href="/search" >
                <a className="text-black no-underline">Search</a>
              </Link>
            </span>
          </div>
          <div className="flex items-center space-x-2 w-1/5 h-full">
            <FontAwesomeIcon className="w-4 h-4 transition-transform duration-500 hover:scale-125 hover:text-orange-500 md:w-3 md:h-3 lg:w-4 lg:h-4" icon={faPercent} />
            <span className="hidden md:inline-block">
              <Link legacyBehavior href="/offer">
                <a className="text-black no-underline">Offers</a>
              </Link>
            </span>
          </div>
          <div className="flex items-center space-x-2 w-1/5 h-full">
            <FontAwesomeIcon className="w-4 h-4 transition-transform duration-500 hover:scale-125 hover:text-orange-500 md:w-3 md:h-3 lg:w-4 lg:h-4" icon={faLifeRing} />
            <span className="hidden md:inline-block">
              <Link legacyBehavior href="/help">
                <a className="text-black no-underline">Help</a>
              </Link>
            </span>
          </div>
          <div className="flex items-center space-x-2 w-1/5 h-full">
            <FontAwesomeIcon className="w-4 h-4 transition-transform duration-500 hover:scale-125 hover:text-orange-500 md:w-3 md:h-3 lg:w-4 lg:h-4" icon={faUser} />
            <span className="hidden md:inline-block">
              <Link legacyBehavior href="/Signup">
                <a className="text-black no-underline">Signup</a>
              </Link>
            </span>
          </div>
          <div className="flex items-center space-x-2 w-1/5 h-full">
            <FontAwesomeIcon className="w-4 h-4 transition-transform duration-500 hover:scale-125 hover:text-orange-500 md:w-3 md:h-3 lg:w-4 lg:h-4" icon={faCartShopping} />
            <span className="hidden md:inline-block">
              <Link legacyBehavior href="/carts">
                <a className="text-black no-underline">Cart</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
