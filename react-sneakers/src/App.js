import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const sneakers = [
    {
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        img: "./img/sneakers/1.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Air Max 270",
        price: 12999,
        img: "./img/sneakers/2.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 8499,
        img: "./img/sneakers/3.jpg",
    },
    {
        name: "Кроссовки Puma X Aka Boku Future Rider",
        price: 8999,
        img: "./img/sneakers/4.jpg",
    },
    {
        name: "Мужские Кроссовки Under Armour Curry 8",
        price: 15199,
        img: "./img/sneakers/5.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Kyrie 7",
        price: 11299,
        img: "./img/sneakers/6.jpg",
    },
    {
        name: "Мужские Кроссовки Jordan Air Jordan 11",
        price: 10799,
        img: "./img/sneakers/7.jpg",
    },
    {
        name: "Мужские Кроссовки Nike LeBron XVIII",
        price: 16499,
        img: "./img/sneakers/8.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Lebron XVIII Low",
        price: 13999,
        img: "./img/sneakers/9.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 8499,
        img: "./img/sneakers/10.jpg",
    },
    {
        name: "Кроссовки Puma X Aka Boku Future Rider",
        price: 8999,
        img: "./img/sneakers/11.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
        price: 11299,
        img: "./img/sneakers/12.jpg",
    },
];

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

                <div className="d-flex flex-wrap card-container">
                    {sneakers.map((sneaker) => (
                        <Card
                            name={sneaker.name}
                            price={sneaker.price}
                            img={sneaker.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
