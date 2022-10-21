import Card from "../components/Card";
import AppContext from "../context";
import { useContext } from "react";

export default function Favorites({ onFavorite }) {
    const state = useContext(AppContext);
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои кроссовки</h1>
            </div>
            <div className="d-flex flex-wrap card-container">
                {state.items.map((sneaker) => (
                    <Card
                        key={sneaker.id}
                        isFavorite={true}
                        onFavorite={onFavorite}
                        {...sneaker}
                    />
                ))}
            </div>
        </div>
    );
}
