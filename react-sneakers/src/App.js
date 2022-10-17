import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        fetch("https://634d55e6f5d2cc648ea33890.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then((res) => setItems(res));
    }, []);

    const addCart = (item) => {
        setCartItems((prev) => [...prev, item]);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    closeCart={() => setCartOpened(!cartOpened)}
                />
            )}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="d-flex flex-wrap card-container">
                    {items.map((sneaker) => (
                        <Card
                            name={sneaker.name}
                            price={sneaker.price}
                            img={sneaker.img}
                            key={sneaker.key}
                            addFavorite={() => {}}
                            addCart={(item) => {
                                addCart(item);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
