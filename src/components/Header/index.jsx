import React, { useState } from 'react';
import './Style.scss';
import iconSearch from '../../assets/images/icons/search.png';
import iconProfile from '../../assets/images/icons/profile.png';
import iconBag from '../../assets/images/icons/bag.png';
import iconWallet from '../../assets/images/icons/wallet.png';
import iconNotification from '../../assets/images/icons/notification.png';
import iconHeart from '../../assets/images/icons/heart.png';

const Header = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabClickHandler = (event, id) => {
        event.preventDefault(); // tab click prevented, no action
        setActiveTab(id);
    };

    const searchOnSubmitHandler = event => {
        event.preventDefault(); // search formSubmit prevented, no action
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="logo">Logo Here</div>
                    <div className="header-top-right">
                        <div className="search">
                            <form onSubmit={searchOnSubmitHandler}>
                                <input type="text" placeholder="Search games, gears, accessories.." />
                                <button type="submit">
                                    <img src={iconSearch} alt="Ara" />
                                </button>
                            </form>
                        </div>
                        <div className="toolbar">
                            <button type="button">
                                <img src={iconProfile} alt="My Account" />
                            </button>
                            <button type="button" className="mr-6">
                                <img src={iconWallet} alt="Wallet" />
                            </button>
                            <button type="button">
                                <img src={iconNotification} alt="Notifications" />
                            </button>
                            <button type="button">
                                <img src={iconHeart} alt="My Likes" />
                            </button>
                            <button type="button">
                                <img src={iconBag} alt="My Cart" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-tabs">
                <div className="container">
                    <div className="header-tabs-inner">
                        <ul>
                            <li>
                                <a
                                    href="#home"
                                    onClick={event => tabClickHandler(event, 1)}
                                    className={activeTab === 1 ? 'active' : ''}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#social"
                                    onClick={event => tabClickHandler(event, 2)}
                                    className={activeTab === 2 ? 'active' : ''}
                                >
                                    Social
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#market"
                                    onClick={event => tabClickHandler(event, 3)}
                                    className={activeTab === 3 ? 'active' : ''}
                                >
                                    Market
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#tournament"
                                    onClick={event => tabClickHandler(event, 4)}
                                    className={activeTab === 4 ? 'active' : ''}
                                >
                                    tournament
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
