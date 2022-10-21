import style from "./card.module.scss";
import ContentLoader from "react-content-loader";
import { useState } from "react";
import AppContext from "../../context";
import React, { useContext } from "react";

const Card = ({
    name,
    img,
    price,
    id,
    addCart,
    deleteOrder,
    onFavorite,
    isFavorite = false,
    isLoading = false,
}) => {
    const { isItemAdded } = useContext(AppContext);
    const [isLiked, setIsLiked] = useState(isFavorite);

    const handleClickCart = () => {
        addCart({ id, name, img, price });
    };

    const handleClickLike = () => {
        onFavorite({ id, name, img, price });
        setIsLiked(!isLiked);
    };
    return (
        <div className={style.card}>
            {isLoading ? (
                <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect
                        x="1"
                        y="0"
                        rx="10"
                        ry="10"
                        width="155"
                        height="155"
                    />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect
                        x="124"
                        y="230"
                        rx="10"
                        ry="10"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
                <>
                    <div className={style.favorite}>
                        {onFavorite && (
                            <img
                                onClick={handleClickLike}
                                src={
                                    isLiked
                                        ? "./img/like.svg"
                                        : "./img/unlike.svg"
                                }
                                alt="unlike"
                            />
                        )}
                    </div>
                    <img width="100%" height={135} src={img} alt="1" />
                    <h5>{name}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>
                                {price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                                RUB
                            </b>
                        </div>
                        {addCart && (
                            <img
                                className={style.plus}
                                onClick={handleClickCart}
                                src={
                                    isItemAdded(id)
                                        ? "./img/checked.svg"
                                        : "./img/plus.svg"
                                }
                                alt="plus"
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
