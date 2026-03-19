import { useEffect, useState } from "react";
import '../css/Cart.css'



type CartItem = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    count: number;
    total: number;
    size?: string;
};

function Cart() {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const data = localStorage.getItem("cart");
        if (data) setCart(JSON.parse(data));
    }, []);

    const updateCart = (updatedCart: CartItem[]) => {
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeItem = (id: number) =>
        updateCart(cart.filter(item => item.id !== id));

    const changeCount = (id: number, delta: number) =>
        updateCart(
            cart.map(item =>
                item.id === id
                    ? {
                        ...item,
                        count: Math.max(item.count + delta, 1),
                        total: item.price * Math.max(item.count + delta, 1),
                    }
                    : item
            )
        );

    const totalPrice = cart.reduce((sum, item) => sum + item.total, 0);

    return (
        <div>
            <h1>Cart Products</h1>

            {cart.length === 0 ? (
                <p>Cart boşdur</p>
            ) : (
                <div className="cartss">
                    {cart.map(item => (
                        <div key={item.id} className="cart">

                            <img src={item.thumbnail} />

                            <div className="nameandprice">

                                <p>{item.title}</p>
                                <div className="count-div">
                                    <div onClick={() => changeCount(item.id, -1)}> - </div>
                                    <span> {item.count} </span>
                                    <div onClick={() => changeCount(item.id, 1)}> + </div>
                                </div>
                                <p>${item.total}</p>
                                {item.size && <p className="sizeout">Size: {item.size}</p>}



                            </div>

                            <div onClick={() => removeItem(item.id)}><i className="fa-solid fa-trash"></i></div>

                        </div>
                    ))}
                    <h2 className="total-end">Total: {totalPrice} $</h2>
                </div>
            )}
        </div>
    );
}

export default Cart;