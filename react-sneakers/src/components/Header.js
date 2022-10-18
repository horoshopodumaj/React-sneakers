export default function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img
                    className="mr-15"
                    width={40}
                    height={40}
                    src="./img/logo.png"
                    alt="Logo"
                />
                <div>
                    <h3 className="text-uppercase">react sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={props.onClickCart}>
                    <img
                        className="mr-15"
                        width={18}
                        height={18}
                        src="./img/cart.svg"
                        alt="cart"
                    />
                    <span>1205 руб</span>
                </li>
                <li>
                    <img
                        width={18}
                        height={18}
                        src="./img/user.svg"
                        alt="user"
                    />
                </li>
            </ul>
        </header>
    );
}
