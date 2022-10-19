import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
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
        axios
            .get("https://634d55e6f5d2cc648ea33890.mockapi.io/favorites")
            .then((res) => {
                setFavorites(res.data);
            });
    }, []);

    const addCart = (item) => {
        if (cartItems.find((obj) => obj.id === item.id)) {
            axios.delete(
                `https://634d55e6f5d2cc648ea33890.mockapi.io/cart/${item.id}`
            );
            setCartItems((prev) => prev.filter((e) => e.id !== item.id));
        } else {
            axios.post(
                "https://634d55e6f5d2cc648ea33890.mockapi.io/cart",
                item
            );
            setCartItems((prev) => [...prev, item]);
        }
    };
    const deleteOrder = (id) => {
        axios.delete(`https://634d55e6f5d2cc648ea33890.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((e) => e.id !== id));
    };

    const onFavorite = (item) => {
        if (favorites.find((obj) => obj.id === item.id)) {
            axios.delete(
                `https://634d55e6f5d2cc648ea33890.mockapi.io/favorites/${item.id}`
            );
            setFavorites((prev) => prev.filter((e) => e.id !== item.id));
        } else {
            axios.post(
                "https://634d55e6f5d2cc648ea33890.mockapi.io/favorites",
                item
            );
            setFavorites((prev) => [...prev, item]);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    key={cartItems.map((item) => item.id)}
                    closeCart={() => setCartOpened(!cartOpened)}
                    deleteOrder={deleteOrder}
                />
            )}
            <Header onClickCart={() => setCartOpened(true)} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onFavorite={onFavorite}
                            addCart={addCart}
                            deleteOrder={deleteOrder}
                        />
                    }
                />
                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            items={favorites}
                            onFavorite={onFavorite}
                            key={items.map((item) => item.id)}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
