import React, { useState } from 'react';
import './Style.scss';
import iconSearch from '../../assets/images/icons/search.png';
import iconProfile from '../../assets/images/icons/profile.png';
import iconBag from '../../assets/images/icons/bag.png';
import iconWallet from '../../assets/images/icons/wallet.png';
import iconNotification from '../../assets/images/icons/notification.png';
import iconHeart from '../../assets/images/icons/heart.png';
import iconTabHome from '../../assets/images/icons/tab-home.png';
import iconTabMarket from '../../assets/images/icons/tab-market.png';
import iconTabSocial from '../../assets/images/icons/tab-social.png';
import iconTabTournament from '../../assets/images/icons/tab-tournament.png';

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
                <div className="container-fluid container-lg position-relative">
                    <div className="logo">Logo Here</div>
                    <div className="header-top-right mobile d-md-none justify-content-end">Ham Menu [X]</div>
                    <div className="header-top-right d-none d-md-flex">
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
                            <button type="button" className="margin-space">
                                <img src={iconWallet} alt="Wallet" />
                            </button>
                            <button type="button">
                                <div className="dot" />
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
                <div className="container-fluid container-lg position-relative">
                    <div className="header-tabs-inner">
                        <ul>
                            <li>
                                <a
                                    href="#home"
                                    onClick={event => tabClickHandler(event, 1)}
                                    className={activeTab === 1 ? 'active' : ''}
                                >
                                    <img src={iconTabHome} alt="" />
                                    <span className="d-none d-lg-inline">Home</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#social"
                                    onClick={event => tabClickHandler(event, 2)}
                                    className={activeTab === 2 ? 'active' : ''}
                                >
                                    <img src={iconTabSocial} alt="" />
                                    <span className="d-none d-lg-inline">Social</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#market"
                                    onClick={event => tabClickHandler(event, 3)}
                                    className={activeTab === 3 ? 'active' : ''}
                                >
                                    <img src={iconTabMarket} alt="" />
                                    <span className="d-none d-lg-inline">Market</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#tournament"
                                    onClick={event => tabClickHandler(event, 4)}
                                    className={activeTab === 4 ? 'active' : ''}
                                >
                                    <img src={iconTabTournament} alt="" />
                                    <span className="d-none d-lg-inline">Tournament</span>
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
