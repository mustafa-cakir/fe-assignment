import React, { useEffect, useState } from 'react';
import './Style.scss';
import imageChannels1 from '../../../assets/images/channels/channels1.png';
import imageChannels2 from '../../../assets/images/channels/channels2.png';
import imageChannels3 from '../../../assets/images/channels/channels3.png';
import imageChannels4 from '../../../assets/images/channels/channels4.png';
import imageChannels5 from '../../../assets/images/channels/channels5.png';
import imageChannels6 from '../../../assets/images/channels/channels6.png';
import imageChannels7 from '../../../assets/images/channels/channels7.png';
import imageChannels8 from '../../../assets/images/channels/channels8.png';
import imageUp from '../../../assets/images/channels/up.png';
import Shimmer from '../../common/Shimmer';

const Channels = () => {
    const [channelsData, setChannelsData] = useState(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setChannelsData([
                {
                    id: 1,
                    name: '#social Hub',
                    image: imageChannels2,
                    followers: '195K Users',
                    isUp: true,
                },
                {
                    id: 2,
                    name: '#Fornite',
                    image: imageChannels1,
                    followers: '240K Users',
                    isUp: false,
                },
                {
                    id: 3,
                    name: '#World of War Craft',
                    image: imageChannels2,
                    followers: '195K Users',
                    isUp: false,
                },
                {
                    id: 4,
                    name: '#PUBG Mobile',
                    image: imageChannels3,
                    followers: '220K Users',
                    isUp: false,
                },
                {
                    id: 5,
                    name: '#HearthStone',
                    image: imageChannels6,
                    followers: '220K Users',
                    isUp: false,
                },
                {
                    id: 6,
                    name: '#CS: GO',
                    image: imageChannels4,
                    followers: '194K Users',
                    isUp: false,
                },
                {
                    id: 7,
                    name: '#Call of Duty',
                    image: imageChannels7,
                    followers: '175K Users',
                    isUp: false,
                },
                {
                    id: 8,
                    name: '#Overwatch',
                    image: imageChannels5,
                    followers: '200K Users',
                    isUp: false,
                },
                {
                    id: 9,
                    name: '#Diablo III',
                    image: imageChannels8,
                    followers: '175K Users',
                    isUp: false,
                },
            ]);
            setTimeout(() => {
                setAnimationCompleted(true);
            }, 100);
        }, 2000);
    }, []);

    return (
        <div className="channels">
            <div className="line-breaker" />
            {channelsData ? (
                <>
                    <div className={`animation-list-load ${animationCompleted ? 'completed' : ''}`}>
                        {channelsData.map(channel => (
                            <div key={channel.id} className="box">
                                <img src={channel.image} alt={channel.name} className="avatar" />
                                <div>
                                    <div className="name">
                                        {channel.name} {channel.isUp && <img src={imageUp} alt="up" className="up" />}
                                    </div>
                                    <div className="followeres">{channel.followers}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="#findmore" className="btn large mt-5">
                        Find more
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

export default Channels;
