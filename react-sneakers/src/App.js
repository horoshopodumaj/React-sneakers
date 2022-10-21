import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get(
                "https://634d55e6f5d2cc648ea33890.mockapi.io/cart"
            );
            const favoriteResponse = await axios.get(
                "https://634d55e6f5d2cc648ea33890.mockapi.io/favorites"
            );
            const itemsResponse = await axios.get(
                "https://634d55e6f5d2cc648ea33890.mockapi.io/items"
            );

            setIsLoading(false);

            setCartItems(cartResponse.data);
            setFavorites(favoriteResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);

    const addCart = async (item) => {
        try {
            if (cartItems.find((obj) => Number(obj.id) === Number(item.id))) {
                axios.delete(
                    `https://634d55e6f5d2cc648ea33890.mockapi.io/cart/${item.id}`
                );
                setCartItems((prev) =>
                    prev.filter((e) => Number(e.id) !== Number(item.id))
                );
            } else {
                const { data } = await axios.post(
                    "https://634d55e6f5d2cc648ea33890.mockapi.io/cart",
                    item
                );
                setCartItems((prev) => [...prev, data]);
            }
        } catch (error) {
            alert("Что-то пошло не так");
        }
    };
    const deleteOrder = (id) => {
        axios.delete(`https://634d55e6f5d2cc648ea33890.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((e) => e.id !== id));
    };

    const onFavorite = async (item) => {
        try {
            if (favorites.find((obj) => obj.id === item.id)) {
                axios.delete(
                    `https://634d55e6f5d2cc648ea33890.mockapi.io/favorites/${item.id}`
                );
                setFavorites((prev) =>
                    prev.filter((e) => Number(e.id) !== Number(item.id))
                );
            } else {
                const { data } = await axios.post(
                    "https://634d55e6f5d2cc648ea33890.mockapi.io/favorites",
                    item
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert("Что-то пошло не так");
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => +obj.id === +id);
    };

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                isItemAdded,
                setCartOpened,
                setCartItems,
            }}
        >
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
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onFavorite={onFavorite}
                                addCart={addCart}
                                deleteOrder={deleteOrder}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route
                        path="/favorites"
                        element={
                            <Favorites
                                onFavorite={onFavorite}
                                key={items.map((item) => item.id)}
                            />
                        }
                    />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
