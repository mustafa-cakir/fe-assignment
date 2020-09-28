import React from 'react';
import './Style.scss';
import iconNewsletter from '../../assets/images/icons/newsletter.png';

const Newsletter = () => {
    const formSubscribeHandler = event => {
        event.preventDefault(); // form submit action prevented, no action
    };
    return (
        <div className="newsletter">
            <div className="container">
                <form onSubmit={formSubscribeHandler}>
                    <div className="newsletter-inner">
                        <h2 className="title">Get your best games deals first</h2>

                        <div className="input-field">
                            <input type="text" placeholder="Enter your email" />
                            <img src={iconNewsletter} alt="" />
                        </div>
                        <button type="submit" className="btn filled huge">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
