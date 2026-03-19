import Casual from "../images/image11.svg"
import Formal from "../images/image13.svg"
import Party from "../images/image12.svg"
import Gym from "../images/gym.svg"
import "../css/StylePerson.css"
import { Link } from "react-router-dom"



function StylePerson() {
    return (
        <div className="stylePerson">


            <div>
                <h1>BROWSE BY DRESS STYLE</h1>
            </div>

            <div id="carts">
                <div id="block1">
                    <p>Casual</p>
                    <Link to={'/casual'}><img src={Casual} alt="ph1" /></Link>

                </div>

                <div id="block2">
                    <p>Formal</p>
                    <Link to={'/formal'}><img src={Formal} alt="ph2" /></Link>

                </div>

                <div id="block3">
                    <p>Party</p>
                    <Link to={'/party'}><img src={Party} alt="ph3" /></Link>
                </div>

                <div id="block4">
                    <p>Gym</p>
                    <Link to={'/gym'}><img src={Gym} alt="ph4" /></Link>
                </div>
            </div>
        </div>
    )
}

export default StylePerson