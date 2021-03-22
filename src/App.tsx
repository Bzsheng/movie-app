import React from 'react';
import './App.css';
import { useState } from 'react';
import WeChat from './WeChat.jpg'
import { Helmet } from 'react-helmet'
import data from './data.json'

const App: React.FC = () => {

  const n = Math.floor(Math.random() * 250)

  const initState = {
    title: '肖申克的救赎',
    url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp',
    info: '希望让人自由'
  }
  const [movie, setMovie] = useState(initState)

  return (
    <div className='movie_main'>
      <Helmet>
        <title>每天看一部高分电影</title>
        <meta name="description" content="每天看一部高分电影" />
        <meta name="keywords" content="电影,高分电影,豆瓣top250,豆瓣电影" />
      </Helmet>
      <img className='WeChat' alt='微信公众号-大前端合集' src={WeChat} />
      <img className='cover' alt={movie.title} src={movie.url} />
      <p>{'《' + movie.title + '》'}</p>
      <p>{movie.info || ''}</p>
      <button onClick={() => setMovie(data[n])}>
        换一部
      </button>
    </div>
  )
}

export default App