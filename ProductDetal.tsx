import { useEffect, useState } from "react";
import "../css/ProductDetal.css";
import { useParams } from "react-router-dom";
import Footers from "./Footers";




function ProductDetal() {

    interface Review {
        rating: number;
        reviewerName: string;
        comment: string;
        reviewerEmail: string;
        date: string;
    }


    const { id } = useParams();
    const [productdetal, Setproductdetal] = useState<any>(null);
    const [count, SetCount] = useState<number>(1);
    const [sizevalue, Setsizevalue] = useState<string>("0")

    const [coments, setcoments] = useState<Review[]>([]);
    useEffect(() => {
        if (!id) return

        Setproductdetal(null);


        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                Setproductdetal(data)
                console.log(data)
                setcoments(data.reviews)
                console.log(data.reviews);


            })
    }, [id])
    if (!productdetal) return <p>Loading...</p>;

    const minus_function = () => {
        SetCount(prev => (prev > 1 ? prev - 1 : 1));
    };

    const plus_function = () => {
        SetCount(prev => prev + 1);
    };




    return (
        <>
            <div>


                <div>
                    <div className="prod">
                        <div className="img-div">
                            <img src={productdetal.thumbnail} alt={productdetal?.title} />
                        </div>
                        <div>
                            <p className="title">{productdetal?.title}</p>
                            <p className="rating">{productdetal?.rating}/5 ⭐</p>

                            <p className="pricep">
                                {productdetal?.discountPercentage > 0 ? (
                                    <>
                                        <span className="oldp">{productdetal.price}</span>
                                        <span className="newp">
                                            $
                                            {(
                                                productdetal.price -
                                                (productdetal.price * productdetal.discountPercentage) / 100
                                            ).toFixed(2)}


                                        </span>

                                        <span className="pointp">
                                            {productdetal.discountPercentage}%
                                        </span>
                                    </>
                                ) : (
                                    `$${productdetal?.price}`
                                )}
                            </p>


                            <p className="description">{productdetal?.description}</p>
                            <div>
                                <input type="text" className="size" placeholder="S (Small): 36-38,M (Medium),L (Large): 40-42 " value={sizevalue}
                                    onChange={(e) => Setsizevalue(e.target.value)} />
                            </div>
                            <div className="countandcart">
                                <div className="counter">
                                    <div onClick={minus_function}>-</div>
                                    <span className="count">{count}</span>
                                    <div onClick={plus_function}>+</div>
                                </div>
                                <p className="addcart"
                                    onClick={() => {
                                        const existing = JSON.parse(localStorage.getItem("cart") || "[]");

                                        const findItem = existing.find((item: any) => item.id === productdetal.id);

                                        if (findItem) {

                                            const updated = existing.map((item: any) =>
                                                item.id === productdetal.id
                                                    ? {
                                                        ...item,
                                                        count: item.count + count,
                                                        total: (item.count + count) * item.price,
                                                        size: sizevalue || item.size,
                                                    }
                                                    : item
                                            );
                                            localStorage.setItem("cart", JSON.stringify(updated));
                                        } else {

                                            const newItem = {
                                                id: productdetal.id,
                                                title: productdetal.title,
                                                price: productdetal.price,
                                                thumbnail: productdetal.thumbnail,
                                                count: count,
                                                total: productdetal.price * count,
                                                size: sizevalue,
                                            };
                                            localStorage.setItem("cart", JSON.stringify([...existing, newItem]));
                                        }

                                    }}

                                >ADD TO CART</p>
                            </div>
                        </div>

                    </div>
                    <h1>All Reviews</h1>
                    <div className="productdetalreviws">

                        {coments.map((el, index) => (
                            <div className="reviw" key={index}>
                                <p className="p1">{el.rating}⭐</p>
                                <p className="p2"> <i className="fa-solid fa-circle-user"></i>{el.reviewerName}</p>
                                <p className="p3"> <i className="fa-solid fa-comments"></i>{el.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footers />
        </>
    )
}

export default ProductDetal