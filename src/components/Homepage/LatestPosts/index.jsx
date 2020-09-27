import React, { useEffect, useState } from 'react';
import './Style.scss';
import imageAvatar1 from '../../../assets/images/avatars/avatar1.png';
import imageAvatar2 from '../../../assets/images/avatars/avatar2.png';
import imageAvatar3 from '../../../assets/images/avatars/avatar3.png';
import iconRepost from '../../../assets/images/icons/repost.png';
import iconShare from '../../../assets/images/icons/share.png';
import iconApplause from '../../../assets/images/icons/applause.png';
import iconApplauseActive from '../../../assets/images/icons/applause-active.png';
import iconComment from '../../../assets/images/icons/comment.png';
import Shimmer from '../../common/Shimmer';

const LatestPosts = () => {
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsDataLoaded(true);
        }, 1900);
    }, []);

    return (
        <div className="latest-posts">
            {isDataLoaded ? (
                <>
                    <div className="box">
                        <div className="box-header">
                            <div className="avatar">
                                <img src={imageAvatar1} alt="avatar1" />
                            </div>
                            <div className="flex-grow-1">
                                <div className="name">MrPaladin</div>
                                <a href="#link" className="link">
                                    @mrpaladin
                                </a>
                                <span className="followers">15 Followers</span>
                            </div>
                            <div className="time-ago">3hrs ago</div>
                        </div>
                        <div className="box-content">
                            Sniper isnt overpowered. Sniper has some of the lowest damage outputs in the game. 50 damage
                            per shot is terrible, especially with the fire rate. Compared to heavy, who has 400+ DPS!..{' '}
                            <a href="#readmore" className="read-more" title="Read More">
                                Read More
                            </a>
                        </div>
                        <div className="box-bottom">
                            <button type="button">
                                <img src={iconRepost} alt="repost" />
                            </button>
                            <button type="button">
                                <img src={iconShare} alt="share" />
                            </button>
                            <button type="button">
                                <img src={iconApplauseActive} alt="applause" />
                            </button>
                            <div className="applause-count">296</div>
                            <div className="flex-grow-1 d-flex justify-content-end align-items-center">
                                <div className="comment-count">15 Comments</div>
                                <button type="button" className="mr-0 ml-2">
                                    <img src={iconComment} alt="comment" className="icon-comment" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <div className="avatar">
                                <img src={imageAvatar2} alt="avatar2" />
                            </div>
                            <div className="flex-grow-1">
                                <div className="name d-flex align-items-center">
                                    LeroyJenkins <div className="badge-pro">PRO</div>
                                </div>
                                <a href="#link" className="link">
                                    @leroyjenkins
                                </a>
                                <span className="followers">3253 Followers</span>
                            </div>
                            <div className="time-ago">3hrs ago</div>
                        </div>
                        <div className="box-content">
                            It'll still be long enough that it cannot be spammed. But will increase usefulness of the
                            watch by not. It'll still be long enough that it cannot be spammed. But will increase
                            usefulness of the watch by not..{' '}
                            <a href="#readmore" className="read-more" title="Read More">
                                Read More
                            </a>
                        </div>
                        <div className="box-bottom">
                            <button type="button">
                                <img src={iconRepost} alt="repost" />
                            </button>
                            <button type="button">
                                <img src={iconShare} alt="share" />
                            </button>
                            <button type="button">
                                <img src={iconApplause} alt="applause" />
                            </button>
                            <div className="flex-grow-1 d-flex justify-content-end align-items-center">
                                <a href="#addcomment" className="comment-link">
                                    Add your comment
                                </a>
                                <button type="button" className="mr-0 ml-2">
                                    <img src={iconComment} alt="comment" className="icon-comment" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <div className="avatar">
                                <img src={imageAvatar3} alt="avatar2" />
                            </div>
                            <div className="flex-grow-1">
                                <div className="name d-flex align-items-center">
                                    ONYXSnake1223 <div className="badge-pro">PRO</div>
                                </div>
                                <a href="#link" className="link">
                                    @ONYXSnake1223
                                </a>
                                <span className="followers">125 Followers</span>
                            </div>
                            <div className="time-ago">15mins ago</div>
                        </div>
                        <div className="box-content">
                            If you've not yet played CS:GO, do yourself a favor and play first. Excellent game, and this
                            one ties in heavily with the story from the last. If you've not yet played CS:GO, do
                            yourself a favor and play first..{' '}
                            <a href="#readmore" className="read-more" title="Read More">
                                Read More
                            </a>
                        </div>
                        <div className="box-bottom">
                            <button type="button">
                                <img src={iconRepost} alt="repost" />
                            </button>
                            <button type="button">
                                <img src={iconShare} alt="share" />
                            </button>
                            <button type="button">
                                <img src={iconApplause} alt="applause" />
                            </button>
                            <div className="applause-count">1.2k</div>
                            <div className="flex-grow-1 d-flex justify-content-end align-items-center">
                                <div className="comment-count">165 Comments</div>
                                <button type="button" className="mr-0 ml-2">
                                    <img src={iconComment} alt="comment" className="icon-comment" />
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Shimmer loop={3}>
                    {/*<div className="box">*/}
                    <div className="row align-items-center" style={{ marginTop: 35 }}>
                        <div className="col pr-0" style={{ maxWidth: 58 }}>
                            <div className="shimmer-circle" style={{ height: 48, width: 48 }} />
                        </div>
                        <div className="col">
                            <div className="shimmer-line" style={{ width: '75%', height: 10 }} />
                            <div className="shimmer-line" style={{ width: '50%', height: 10 }} />
                        </div>
                    </div>
                    <div className="shimmer-line" style={{ width: '75%', height: 10, marginTop: 25 }} />
                    <div className="shimmer-line" style={{ width: '75%', height: 10 }} />
                    <div className="shimmer-line" style={{ width: '40%', height: 10 }} />
                    <div className="shimmer-line" style={{ width: '30%', height: 10 }} />
                    {/*</div>*/}
                </Shimmer>
            )}
        </div>
    );
};

export default LatestPosts;
