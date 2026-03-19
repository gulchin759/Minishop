import '../css/footer.css'
import Social from '../images/Social.svg'
import Cards from '../images/Frame53.svg'






function Footers() {
    return (
        <div className='foot'>

            <div id='sendmail'>
                <h1>
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h1>
                <div >
                    <input type="email" placeholder='Enter you ymails adsress' />
                    <p>Subscribe to Newsletter</p>
                </div>
            </div>


            <div id='foot1and2'>
                <div className='foot1'>
                    <div id='left-word'>
                        <p id='shop'>SHOP.CO</p>
                        <p id='p'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div>
                            <img src={Social} alt="icons" />
                        </div>
                    </div>

                    <div className='ul'>


                        <ul>
                            <li>Help</li>
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li> Terms & Conditions </li>
                            <li>Privacy Policy</li>
                        </ul>

                        <ul>
                            <li>FAQ</li>
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>

                        <ul>
                            <li>Resources</li>
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How to - Blog</li>
                            <li>Youtube Playlist</li>
                        </ul>

                        <ul>
                            <li>Company</li>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>

                </div>

                <div className='foot2'>

                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <img src={Cards} alt="" />



                </div>

            </div>

        </div>
    )
}

export default Footers