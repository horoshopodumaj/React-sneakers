import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />

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
