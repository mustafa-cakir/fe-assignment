import React, { useEffect, useRef, useState } from 'react';
import imageGame1 from '../../../assets/images/games/game1.jpg';
import imageGame2 from '../../../assets/images/games/game2.jpg';
import imageGame3 from '../../../assets/images/games/game3.jpg';
import imageGame4 from '../../../assets/images/games/game4.jpg';
import imageGame5 from '../../../assets/images/games/game5.jpg';
import './Style.scss';
import Shimmer from '../../common/Shimmer';

const PopularGames = () => {
    const [gamesData, setGamesData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const refData = useRef([
        {
            id: 1,
            name: 'World of Warcraft: Shadowlands (Heroic Edition)',
            price: 25,
            oldPrice: 50,
            image: imageGame1,
        },
        {
            id: 2,
            name: 'Biomutant Steam Key ARABIC',
            price: 54.49,
            oldPrice: 70,
            image: imageGame2,
        },
        {
            id: 3,
            name: 'Watch Dogs: Legion Uplay Key',
            price: 37.99,
            oldPrice: 60,
            image: imageGame3,
        },
        {
            id: 4,
            name: 'Vampire: The Masquerade - Bloodlines 2 Steam Key',
            price: 4.36,
            oldPrice: 7.99,
            image: imageGame4,
        },
        {
            id: 5,
            name: 'Football Manager 2021 Steam Key',
            price: 41.79,
            oldPrice: 56.99,
            image: imageGame5,
        },
    ]);
    useEffect(() => {
        setTimeout(() => {
            setGamesData(refData.current);
            setIsLoading(false);
        }, 4000);
    }, []);

    const calcPercentageDiscountHandler = (oldPrice, newPrice) => {
        return Math.floor(((oldPrice - newPrice) / oldPrice) * 100);
    };

    const loadMoreHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            setGamesData(gamesData.concat(refData.current));
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="popular-games">
            <div className="box-row">
                {gamesData &&
                    gamesData.map(game => (
                        <div key={game.id} className="box-col">
                            <div className="box-inner d-flex flex-column">
                                <img src={game.image} alt={game.name} />
                                <div className="name flex-grow-1">{game.name}</div>
                                <div className="price">€{game.price}</div>
                                {game.oldPrice && game.oldPrice > game.price && (
                                    <div className="d-flex">
                                        <div className="crossed mr-2">€{game.oldPrice}</div>
                                        <div className="discount">
                                            {calcPercentageDiscountHandler(game.oldPrice, game.price)}%OFF
                                        </div>
                                    </div>
                                )}
                                <a href="#preorder" className="btn filled btn-preorder">
                                    Pre Order
                                </a>
                            </div>
                        </div>
                    ))}
                {isLoading && (
                    <>
                        {Array.from(Array(5).keys()).map(col => (
                            <div key={col} className="box-col">
                                <Shimmer>
                                    <div className="shimmer-line mb-3" style={{ width: '100%', height: 257 }} />

                                    <div className="shimmer-line" style={{ width: '75%', height: 10 }} />
                                    <div
                                        className="shimmer-line"
                                        style={{ width: '50%', height: 10, marginBottom: 12 }}
                                    />

                                    <div className="shimmer-line" style={{ width: '10%', height: 10 }} />
                                    <div className="shimmer-line mb-2" style={{ width: '20%', height: 10 }} />

                                    <div className="shimmer-line" style={{ width: '50%', height: 30 }} />
                                </Shimmer>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div className="load-more">
                <button type="button" onClick={loadMoreHandler} className="btn x-large">
                    LOAD MORE
                </button>
            </div>
        </div>
    );
};

export default PopularGames;
