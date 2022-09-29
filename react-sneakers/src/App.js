function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="headerLeft">
                    <img width={40} height={40} src="./img/logo.png" />
                    <div className="headerInfo">
                        <h3>react sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li>
                        <svg />
                        <span>1205 руб</span>
                    </li>
                    <li>
                        <svg />
                    </li>
                </ul>
            </header>
            <div className="content">
                <h1>все кроссовки</h1>
            </div>
        </div>
    );
}

export default App;
