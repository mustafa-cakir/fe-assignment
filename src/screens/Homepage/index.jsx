import React from 'react';
import './Style.scss';
import HomeSlider from '../../components/Homepage/HomeSlider';
import TitleBreaker from '../../components/Homepage/TitleBreaker';
import LatestPosts from '../../components/Homepage/LatestPosts';
import Channels from '../../components/Homepage/Channels';
import WhoToFollow from '../../components/Homepage/WhoToFollow';
import PopularGames from '../../components/Homepage/PopularGames';

const Homepage = () => {
    return (
        <div className="page-homepage">
            <HomeSlider />
            <div className="container">
                <TitleBreaker
                    title="Games Hub"
                    titleColor="yellow"
                    ctaText="Discover All"
                    subtitle="The best offers, new games, AAA titles and high-quality video games."
                />
                <div className="section-container">
                    <div className="row ">
                        <div className="col col-12 col-lg-6">
                            <div className="white-title">Latest posts</div>
                            <LatestPosts />
                        </div>
                        <div className="col col-12 col-lg-3">
                            <div className="white-title">Channels</div>
                            <Channels />
                        </div>
                        <div className="col col-12 col-lg-3">
                            <div className="white-title">Who to follow?</div>
                            <WhoToFollow />
                        </div>
                    </div>
                </div>
                <TitleBreaker
                    title="Upcoming Games"
                    ctaText="Discover All"
                    subtitle="Pre-order an upcoming game to start playing on Day 1."
                />
                <PopularGames />
            </div>
        </div>
    );
};

export default Homepage;
