import Info from "./Info";

export default function Drawer({ closeCart, items = [], deleteOrder }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина{" "}
                    <img
                        onClick={closeCart}
                        className="removeBtn cu-p"
                        src="./img/remove.svg"
                        alt="remove"
                    />
                </h2>
                {items.length > 0 ? (
                    <>
                        <div className="items">
                            {items.map((item) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.img})`,
                                        }}
                                        className="cartItemImg"
                                    ></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{item.name}</p>
                                        <b>
                                            {item.price
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    " "
                                                )}{" "}
                                            руб.
                                        </b>
                                    </div>
                                    <img
                                        onClick={() => {
                                            deleteOrder(item.id);
                                        }}
                                        className="removeBtn"
                                        src="./img/remove.svg"
                                        alt="remove"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li className="d-flex">
                                    <span>Итого: </span>
                                    <div></div>
                                    <b>21 498 руб. </b>
                                </li>
                                <li className="d-flex">
                                    <span>Налог 5%: </span>
                                    <div></div>
                                    <b>1074 руб. </b>
                                </li>
                            </ul>
                            <button className="greenButton">
                                Оформить заказ{" "}
                                <img src="./img/arrow.svg" alt="arrow" />
                            </button>
                        </div>
                    </>
                ) : (
                    <Info
                        title={"Корзина пуста"}
                        description={
                            "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                        }
                        image="./img/cart-empty.jpg"
                    />
                )}
            </div>
        </div>
    );
}
