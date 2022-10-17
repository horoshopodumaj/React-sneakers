import style from "./card.module.scss";
import { useState } from "react";

const Card = (props) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleClickCart = (name, img, price, id) => {
        props.addCart({ name, img, price, id });
        setIsAdded(!isAdded);
    };

    const handleClickLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img
                    onClick={handleClickLike}
                    src={isLiked ? "./img/like.svg" : "./img/unlike.svg"}
                    alt="unlike"
                />
            </div>
            <img width={133} height={112} src={props.img} alt="1" />
            <h5>{props.name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} RUB</b>
                </div>
                <img
                    className={style.plus}
                    onClick={() =>
                        handleClickCart(
                            props.name,
                            props.img,
                            props.price,
                            props.id
                        )
                    }
                    src={isAdded ? "./img/checked.svg" : "./img/plus.svg"}
                    alt="plus"
                />
            </div>
        </div>
    );
};

export default Card;
