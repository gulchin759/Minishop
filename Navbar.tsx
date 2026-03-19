import "../css/Navbar.css";
import { Link } from "react-router-dom";





function Navbar() {









    return (
        <div id="header">
            <div id="header-wold">
                <p>Sign up and get 20% off to your first order. <u>Sign Up Now</u></p>
                <i className="fa-solid fa-x"></i>
            </div>
            <div id="header-menu">
                <p id="shopco">SHOP.CO </p>
                <div id="left-menu">
                    <p><Link to={'/'}>Shop</Link></p>
                    <p><Link to={'/onsale'}>On Sale</Link></p>
                    <p><Link to={'/brands'}>Brands</Link></p>

                </div>

                <Link to={'/search/:query'}>
                    <div id="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="search" placeholder='Search for products...' />
                    </div>
                </Link>

                <div>
                    <Link to={"/basket"}><i className="fa-solid fa-cart-shopping"></i></Link>
                    <i className="fa-regular fa-circle-user"></i>
                </div>

            </div>



        </div>
    )
}

export default Navbar