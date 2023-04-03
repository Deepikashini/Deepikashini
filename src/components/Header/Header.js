import { useEffect, useState, useContext } from "react";
import Logo from '../../assets/images/foodie-logo.png';
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
// import "./Styles.css"

const Title = () => (
    <a>
    <img
        data-testid="logo"
        className="h-24"
        alt="Logo" 
        src={Logo}
    />
    </a>  
);

const Header = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    
    return (
        <div className="flex justify-between m-2 shadow-lg">
            <Title />
            <div className="p-5 mr-9">
                <ul className="flex justify-between list-none">
                    <Link to="/">
                        <li className="p-5">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="p-5">About Us</li>
                    </Link>
                    <Link to="/contact">
                        <li className="p-5">Contact Us</li>
                    </Link>
                    <Link to="/instamart">
                        <li className="p-5">Instamart</li>
                    </Link>
                    <Link to="/cart">
                        <li data-testid="cart" className="p-5">Cart - {cartItems.length}</li>
                    </Link>
                </ul>
            </div>
            {/* <span>{user.name} - {user.email}</span> */}
            {isUserAuthenticated ? 
            (<button className="p-2" onClick={() => setIsUserAuthenticated(false)}>Sign Out</button>) 
            : 
            (<button className="p-2" onClick={() => setIsUserAuthenticated(true)}>Sign In</button>)}
        </div>
    );    
};

export default Header;