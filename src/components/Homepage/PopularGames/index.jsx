import React, { useEffect, useState } from 'react';
import imageGame1 from '../../../assets/images/games/game1.jpg';
import imageGame2 from '../../../assets/images/games/game2.jpg';
import imageGame3 from '../../../assets/images/games/game3.jpg';
import imageGame4 from '../../../assets/images/games/game4.jpg';
import imageGame5 from '../../../assets/images/games/game5.jpg';

const PopularGames = () => {
    const [gamesData, setGamesData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setGamesData([
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
        }, 300);
    }, []);

    const calcPercentageDiscountHandler = (oldPrice, newPrice) => {
        return Math.floor(((oldPrice - newPrice) / oldPrice) * 100);
    };

    return (
        <div className="popular-games">
            <div className="row">
                {gamesData ? (
                    gamesData.map(game => (
                        <div key={game.id} className="col">
                            <div className="box-inner">
                                <img src={game.image} alt={game.name} />
                                <div className="name">{game.name}</div>
                                <div className="price">€{game.price}</div>
                                {game.oldPrice && game.oldPrice > game.price && (
                                    <div className="d-flex">
                                        <div className="crossed mr-2">{game.oldPrice}</div>
                                        <div className="discount">
                                            {calcPercentageDiscountHandler(game.oldPrice, game.price)}%OFF
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>loading</div>
                )}
            </div>
        </div>
    );
};

export default PopularGames;
