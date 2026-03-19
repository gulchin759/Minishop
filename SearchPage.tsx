import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Casual.css";
type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    rating: number;
};

function SearchPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        fetch("https://dummyjson.com/products?limit=100")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Xəta:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p style={{ textAlign: "center", padding: "50px" }}>Loading...</p>;

    return (
        <div className="casual-section">
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>All</h1>

            <div className="casual-products">
                {products.map((item) => (
                    <div className="product-card" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p className="product-title">{item.title}</p>
                        <p>{item.rating}/5 ⭐</p>
                        <p style={{ fontWeight: "bold" }}>${item.price}</p>

                        <Link to={`/productdetal/${item.id}`}>
                            <div className="more-detailC">Detail</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;