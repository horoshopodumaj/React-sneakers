import React, { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

export default function Home({
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onFavorite,
    addCart,
    deleteOrder,
    isLoading,
}) {
    const { items, cartItems } = useContext(AppContext);
    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (isLoading ? [...Array(12)] : filtredItems).map(
            (sneaker, index) => (
                <Card
                    key={index}
                    onFavorite={(item) => {
                        onFavorite(item);
                    }}
                    addCart={(item) => {
                        addCart(item);
                    }}
                    added={cartItems.some(
                        (obj) => Number(obj.id) === Number(sneaker.id)
                    )}
                    deleteOrder={deleteOrder}
                    isLoading={isLoading}
                    {...sneaker}
                />
            )
        );
    };

    return (
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
                {renderItems()}
            </div>
        </div>
    );
}
