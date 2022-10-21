import Card from "../components/Card";

export default function Orders({ onFavorite }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои заказы</h1>
            </div>
            <div className="d-flex flex-wrap card-container">
                {[].map((sneaker) => (
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
