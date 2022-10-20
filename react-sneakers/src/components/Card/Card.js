import style from "./card.module.scss";
import { useState } from "react";

const Card = ({
    name,
    img,
    price,
    id,
    addCart,
    deleteOrder,
    onFavorite,
    isFavorite = false,
}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isLiked, setIsLiked] = useState(isFavorite);

    const handleClickCart = () => {
        addCart({ id, name, img, price });
        setIsAdded(!isAdded);
        //isAdded && deleteOrder(id);
    };

    const handleClickLike = () => {
        onFavorite({ id, name, img, price });
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
            <img width={133} height={112} src={img} alt="1" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                        RUB
                    </b>
                </div>
                <img
                    className={style.plus}
                    onClick={() => handleClickCart()}
                    src={isAdded ? "./img/checked.svg" : "./img/plus.svg"}
                    alt="plus"
                />
            </div>
        </div>
    );
};

export default Card;
