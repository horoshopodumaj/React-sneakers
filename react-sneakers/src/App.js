import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        axios
            .get("https://634d55e6f5d2cc648ea33890.mockapi.io/items")
            .then((res) => {
                setItems(res.data);
            });
        axios
            .get("https://634d55e6f5d2cc648ea33890.mockapi.io/cart")
            .then((res) => {
                setCartItems(res.data);
            });
    }, []);

    const addCart = (item) => {
        axios.post("https://634d55e6f5d2cc648ea33890.mockapi.io/cart", item);
        //!cartItems.some((e) => e.num === item.num) &&
        setCartItems((prev) => [...prev, item]);
    };
    const deleteOrder = (id) => {
        axios.delete(`https://634d55e6f5d2cc648ea33890.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((e) => e.id !== id));
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    key={cartItems.map((item) => item.num)}
                    closeCart={() => setCartOpened(!cartOpened)}
                    deleteOrder={deleteOrder}
                />
            )}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>
                        {searchValue
                            ? `Поиск по запросу: "${searchValue}"`
                            : "Все кроссовки"}
                    </h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search" />
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue("")}
                                className="clear cu-p"
                                src="./img/remove.svg"
                                alt="clear"
                            />
                        )}
                        <input
                            value={searchValue}
                            onChange={onChangeSearchInput}
                            placeholder="Поиск..."
                        />
                    </div>
                </div>

                <div className="d-flex flex-wrap card-container">
                    {items
                        .filter((item) =>
                            item.name
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((sneaker) => (
                            <Card
                                name={sneaker.name}
                                price={sneaker.price}
                                img={sneaker.img}
                                num={sneaker.key}
                                key={sneaker.key}
                                addFavorite={() => {}}
                                addCart={(item) => {
                                    addCart(item);
                                }}
                                deleteOrder={deleteOrder}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
