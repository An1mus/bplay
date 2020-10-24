import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

// Origin is restricted

const CHANNELS = [
    {name: 'Прямой', url: 'https://www.youtube.com/c/%D0%A2%D0%B5%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%9F%D1%80%D1%8F%D0%BC%D0%B8%D0%B9/videos', id: 'ТелеканалПрямий'},
    {name: 'Торонто', url: 'https://www.youtube.com/c/uttoronto/videos', id: 'uttoronto'},
    {name: 'Ньюз Уан', url: 'https://www.youtube.com/channel/UC9oI0Du20oMOlzsLDTQGfug', id: 'UC9oI0Du20oMOlzsLDTQGfug'},
    {name: 'Украина 24', url: 'https://www.youtube.com/channel/UCMp5Buw-6LpbbV9r9Sl_5yg', id: 'UCMp5Buw-6LpbbV9r9Sl_5yg'},
    {name: 'Наш', url: 'https://www.youtube.com/c/%D0%A2%D0%B5%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%9D%D0%90%D0%A8/videos', id: 'ТелеканалНАШ'}
]

// прямой
// эспрессо
// 5ый канал
// 112
// ictv

const formateUrl = (channelId: string) => {
    return `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY_TEST}&channelId=${channelId}`;
}

const getChannelVideos = async (channelID: string) => {
    return await axios.get(formateUrl(channelID))
}

const playVideos = async (videos: any []) => {

}

const App = () => {
    const [currentChannel, setCurrentChannel] = useState(CHANNELS[1]);
    const [channelVideos, setChannelVideos] = useState([] as any[]);

    document.addEventListener("keypress", (e) => {
        const currentIndex = CHANNELS.indexOf(currentChannel);
        setCurrentChannel(CHANNELS[currentIndex === CHANNELS.length ? 0 : currentIndex + 1]);
    })

    useEffect(() => {
        getChannelVideos(currentChannel.id)
            .then((data) => {
                console.log(data);
            })
    }, []);

    useEffect(() => {
        playVideos(channelVideos);
    }, [channelVideos])

    return <>
        <h1>Press "Spacebar" to switch next youtube channel</h1>
        <h2>{currentChannel.name}</h2>
    </>;
}

export default App;
