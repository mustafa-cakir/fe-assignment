import React from 'react';
import './Style.scss';
import iconPaymentMethods from '../../assets/images/icons/payment-methods.png';
import iconPlayStore from '../../assets/images/icons/playstore.png';
import iconAppStore from '../../assets/images/icons/appstore.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-lg-6">
                            <div className="row">
                                <div className="col col-12 col-lg-4">
                                    <div className="title">LA3EB</div>
                                    <ul>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a href="#">Newsroom</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col col-12 col-lg-4">
                                    <div className="title">HELP</div>
                                    <ul>
                                        <li>
                                            <a href="#">Support Hub</a>
                                        </li>
                                        <li>
                                            <a href="#">How to activate Games</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy & Cookies</a>
                                        </li>
                                        <li>
                                            <a href="#">Returns & Refunds</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col col-12 col-lg-4">
                                    <div className="title">BUSINESS</div>
                                    <ul>
                                        <li>
                                            <a href="#">Business Center</a>
                                        </li>
                                        <li>
                                            <a href="#">Selling on La3eb</a>
                                        </li>
                                        <li>
                                            <a href="#">Developer & Publisher</a>
                                        </li>
                                        <li>
                                            <a href="#">Marketing Partnership</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-lg-6">
                            <div className="row">
                                <div className="col offset-lg-2">
                                    <div className="title">Install the app</div>
                                    <div className="text-small text-gray">
                                        Get great deals on games wherever you go!
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-3">
                                    <img src={iconPlayStore} className="icon-play-store" alt="" />
                                    <div className="text-small">
                                        <div>Get it on</div>
                                        <div>Google Play©</div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-3">
                                    <img src={iconAppStore} className="icon-app-store" alt="" />
                                    <div className="text-small">
                                        <div>Download on the</div>
                                        <div>App Store®</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-12 col-lg-6">
                            <div>Copyright © 2020. All Rights Reserved.</div>
                            Use of this Web site constitutes acceptance of the Terms and Conditions and Privacy policy.
                            All copyrights, trade marks, service marks belong to the corresponding owners.
                        </div>
                        <div className="col col-12 col-lg-6 text-lg-right mt-3 mt-lg-0">
                            <img src={iconPaymentMethods} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
