export default function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="./img/unlike.svg" alt="unlike" />
            </div>
            <img width={133} height={112} src={props.img} alt="1" />
            <h5>{props.name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} RUB</b>
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
    );
}
