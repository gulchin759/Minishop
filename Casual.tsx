import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Casual.css'
import Footers from "./Footers";


type Product = {
    id: number;
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
    discountPercentage: number;
    category: string;
};

function Casual() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("tops");

    // Casual category-lar
    const casualCategories = [
        { slug: "tops", name: "Tops" },
        { slug: "mens-shirts", name: "Men's Shirts" },
        { slug: "womens-dresses", name: "Women's Dresses" },
        { slug: "womens-bags", name: "Women's Bags" },
        { slug: "sunglasses", name: "Sunglasses" },
    ];


    useEffect(() => {
        setLoading(true);

        fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setProducts([]);
                setLoading(false);
            });

    }, [selectedCategory]);

    if (loading) return <p>Loading products...</p>;

    return (
        <>
            <div className="casual-section">
                <h1>Casual Products</h1>


                <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    {casualCategories.map(cat => (
                        <option key={cat.slug} value={cat.slug}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                {products.length === 0 && <p>No products found in this category</p>}

                <div className="casual-products">
                    {products.map(el => (
                        <div className="product-card" key={el.id}>
                            <img src={el.thumbnail} alt={el.title} />
                            <p className="product-title">{el.title}</p>
                            <p>{el.rating}/5 ⭐</p>
                            <div className="product-pricees">
                                {el.discountPercentage > 0 ? (
                                    <div className="product-price1">
                                        <span className="oldc">${el.price}</span>
                                        <span className="pointer">
                                            -{el.discountPercentage}%
                                        </span>

                                        <span className="newc">
                                            ${(el.price - (el.price * el.discountPercentage) / 100).toFixed(2)}
                                        </span>

                                    </div>
                                ) : (
                                    <p>`$${el.price}`</p>
                                )}
                            </div>
                            <Link to={`/productdetal/${el.id}`}>
                                <div className="more-detailC">More detail</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footers />
        </>
    );
}

export default Casual;