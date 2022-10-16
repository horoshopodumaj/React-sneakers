import Card from "./components/Card";
import Header from "./components/Header";

function App() {
    return (
        <div className="wrapper clear">
            <div style={{ display: "none" }} className="overlay">
                <div className="drawer">
                    <h2 className="mb-30 d-flex justify-between">
                        Корзина{" "}
                        <img
                            className="removeBtn cu-p"
                            src="./img/remove.svg"
                            alt="remove"
                        />
                    </h2>
                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("./img/sneakers/2.jpg")',
                                }}
                                className="cartItemImg"
                            ></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">
                                    Мужские Кроссовки Nike Air Max 270
                                </p>
                                <b>12 999 руб.</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="./img/remove.svg"
                                alt="remove"
                            />
                        </div>
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("./img/sneakers/4.jpg")',
                                }}
                                className="cartItemImg"
                            ></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">
                                    Мужские Кроссовки Nike Air Max 270
                                </p>
                                <b>12 999 руб.</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="./img/remove.svg"
                                alt="remove"
                            />
                        </div>
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
                </div>
            </div>
            <Header />
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="d-flex">
                    <Card />
                    <div className="card">
                        <img
                            width={133}
                            height={112}
                            src="./img/sneakers/2.jpg"
                            alt=""
                        />
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 RUB</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="./img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            width={133}
                            height={112}
                            src="./img/sneakers/3.jpg"
                            alt=""
                        />
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 RUB</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="./img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            width={133}
                            height={112}
                            src="./img/sneakers/4.jpg"
                            alt=""
                        />
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 RUB</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="./img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
