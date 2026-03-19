import { useEffect, useState } from "react"
import "../css/SectionTwo.css"
import { Link } from "react-router-dom";


function SectionTwo() {

    const [products, setProducts] = useState<any[]>([]);
    const [show, Setshow] = useState(false)


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);

            })
    }, [])


    const filteredProducts = products.filter((el) => el.rating >= 4);
    const ShowProduct = show ? filteredProducts : filteredProducts.slice(0, 3)


    return (
        <div>
            <h1 >
                On sale
            </h1>

            <div id="topsal">


                <div className="blocks">
                    {ShowProduct
                        .map((elemet) =>
                            <div className="block" key={elemet.id}>
                                <img src={elemet.thumbnail} alt="photo" />
                                <p>{elemet.title}</p>
                                <p>{elemet.rating}/5<i className="fa-solid fa-star" ></i></p>
                                <div>
                                    <p className="price">
                                        {elemet?.discountPercentage > 0 ? (
                                            <>
                                                <span className="old">${elemet.price}</span>
                                                <span className="point">
                                                    - {elemet.discountPercentage}%
                                                </span>
                                                <span className="new">
                                                    $
                                                    {(
                                                        elemet.price -
                                                        (elemet.price * elemet.discountPercentage) / 100
                                                    ).toFixed(2)}


                                                </span>


                                            </>
                                        ) : (
                                            `$${elemet?.price}`
                                        )}
                                    </p>


                                </div>
                                <Link to={`/productdetal/${elemet.id}`}><div className="more-detal" >More detal</div></Link >
                            </div>
                        )}

                </div>

                <div>
                    <p id="Hideandshow" onClick={() => Setshow(!show)}>
                        {show ? "Hide" : "View all"}</p>
                </div>

            </div>


        </div >
    )
}

export default SectionTwo