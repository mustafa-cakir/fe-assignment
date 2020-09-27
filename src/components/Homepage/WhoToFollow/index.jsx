import React, { useEffect, useState } from 'react';
import './Style.scss';
import imageFollow1 from '../../../assets/images/whotofollow/follow1.png';
import imageFollow2 from '../../../assets/images/whotofollow/follow2.png';
import imageFollow3 from '../../../assets/images/whotofollow/follow3.png';
import imageFollow4 from '../../../assets/images/whotofollow/follow4.png';
import imageFollow5 from '../../../assets/images/whotofollow/follow5.png';
import imageFollow6 from '../../../assets/images/whotofollow/follow6.png';
import imageFollow7 from '../../../assets/images/whotofollow/follow7.png';
import imageFollow8 from '../../../assets/images/whotofollow/follow8.png';
import imageFollow9 from '../../../assets/images/whotofollow/follow9.png';
import imageSubscribe from '../../../assets/images/whotofollow/subscribe.png';
import imageChannels2 from '../../../assets/images/channels/channels2.png';
import imageChannels1 from '../../../assets/images/channels/channels1.png';
import imageChannels3 from '../../../assets/images/channels/channels3.png';
import imageChannels6 from '../../../assets/images/channels/channels6.png';
import imageChannels4 from '../../../assets/images/channels/channels4.png';
import imageChannels7 from '../../../assets/images/channels/channels7.png';
import imageChannels5 from '../../../assets/images/channels/channels5.png';
import imageChannels8 from '../../../assets/images/channels/channels8.png';
import Shimmer from '../../common/Shimmer';

const WhoToFollow = () => {
    const [usersData, setUsersData] = useState(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUsersData([
                {
                    id: 1,
                    name: 'XMegatronX',
                    image: imageFollow1,
                    followers: '325.860 Followers',
                },
                {
                    id: 2,
                    name: 'Rikimarue',
                    image: imageFollow2,
                    followers: '285.020 Followers',
                },
                {
                    id: 3,
                    name: 'Wolfie',
                    image: imageFollow3,
                    followers: '433.642 Followers',
                },
                {
                    id: 4,
                    name: 'Thanon',
                    image: imageFollow4,
                    followers: '312.245 Followers',
                },
                {
                    id: 5,
                    name: 'Rikimarue',
                    image: imageFollow5,
                    followers: '285.020 Followers',
                },
                {
                    id: 6,
                    name: 'MrPaladin',
                    image: imageFollow6,
                    followers: '433.642 Followers',
                },
                {
                    id: 7,
                    name: 'Supreme',
                    image: imageFollow7,
                    followers: '312.245 Followers',
                },
                {
                    id: 8,
                    name: 'Murmur',
                    image: imageFollow8,
                    followers: '312.245 Followers',
                },
                ,
                {
                    id: 9,
                    name: 'Loremiosum',
                    image: imageFollow9,
                    followers: '312.245 Followers',
                },
            ]);

            setTimeout(() => {
                setAnimationCompleted(true);
            }, 100);
        }, 2100);
    }, []);

    return (
        <div className="who-to-follow">
            <div className="line-breaker" />
            {usersData ? (
                <>
                    <div className={`animation-list-load ${animationCompleted ? 'completed' : ''}`}>
                        {usersData.map(user => (
                            <div key={user.id} className="box">
                                <img src={user.image} alt={user.name} className="avatar" />
                                <div className="flex-grow-1">
                                    <div className="name">{user.name}</div>
                                    <div className="followeres">{user.followers}</div>
                                </div>
                                <button type="button" className="btn-subscribe">
                                    <img src={imageSubscribe} alt="Subscribe" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <a href="#findmore" className="btn large mt-5">
                        Discover All
                    </a>
                </>
            ) : (
                <Shimmer loop={7}>
                    <div className="row align-items-center" style={{ marginTop: 35 }}>
                        <div className="col pr-0" style={{ maxWidth: 58 }}>
                            <div className="shimmer-circle" style={{ height: 48, width: 48 }} />
                        </div>
                        <div className="col">
                            <div className="shimmer-line" style={{ width: '75%', height: 10 }} />
                            <div className="shimmer-line" style={{ width: '50%', height: 10 }} />
                        </div>
                    </div>
                </Shimmer>
            )}
        </div>
    );
};

export default WhoToFollow;
