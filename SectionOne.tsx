import "../css/SectionOne.css"
import TwoPerson from "../images/twoperson.svg";
import Vektor from "../images/Vector.svg";
import Vercel from "../images/Group.svg";
import CalvinKlein from "../images/Group (1).svg";
import Zara from "../images/zara-logo-1 1.svg"
import Prada from "../images/prada-logo-1 1.svg"
import Guci from "../images/gucci-logo-1 1.svg"
import { Link } from "react-router-dom";


function SectionOne() {
    return (
        <div>
            <div id="SectionOne">
                <img src={TwoPerson} alt="person" id="person" />
                <img src={Vektor} alt="star" id="star1" />
                <img src={Vektor} alt="star" id="star2" />
                <div id="text">
                    <p id="slogan">
                        <span>FIND CLOTHES </span>
                        <span> THAT MATCHES </span>
                        <span> YOUR STYLE </span>
                    </p>
                    <p id="detal">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Link to={'/brands'}><p id="show-now">Shop Now</p></Link>

                    <div id="numbers">
                        <div className="num">
                            <p>200+</p>
                            <p>International Brands</p>
                        </div>

                        <div className="num">
                            <p>2,000+</p>
                            <p>High-Quality Products</p>
                        </div>
                        <div className="num">
                            <p>30,000+</p>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div >

            <div id="Brands">
                <img src={Vercel} alt="" />
                <img src={Zara} alt="" />
                <img src={Guci} alt="" />
                <img src={Prada} alt="" />
                <img src={CalvinKlein} alt="" />
            </div>
        </div>
    )
}

export default SectionOne