import React from 'react';
import './App.css';

const YOUTUBE_API_KEY = 'AIzaSyCqOj5mhcbCBjPQyJUVVXn6bFQld29RbIc'

const CHANNELS = [
    {name: 'Прямой', url: 'https://www.youtube.com/c/%D0%A2%D0%B5%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%9F%D1%80%D1%8F%D0%BC%D0%B8%D0%B9/videos'},
    {name: 'Торонто', url: 'https://www.youtube.com/c/uttoronto/videos'},
    {name: 'Ньюз Уан', url: 'https://www.youtube.com/channel/UC9oI0Du20oMOlzsLDTQGfug'},
    {name: 'Украина 24', url: 'https://www.youtube.com/channel/UCMp5Buw-6LpbbV9r9Sl_5yg'},
    {name: 'Наш', url: 'https://www.youtube.com/c/%D0%A2%D0%B5%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%9D%D0%90%D0%A8/videos'}
]

const App = () => {
    return <>
        <h1>Press "Spacebar" to switch next youtube channel</h1>
        <iframe src="https://www.youtube.com/embed/Li0t12Dcka0"/>
    </>;
}

export default App;
