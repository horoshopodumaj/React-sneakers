import React from "react";
import Card from "../components/Card";

export default function Home() {
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
                            addFavorite={(item) => {
                                onFavorite(item);
                            }}
                            addCart={(item) => {
                                addCart(item);
                            }}
                            deleteOrder={deleteOrder}
                        />
                    ))}
            </div>
        </div>
    );
}
