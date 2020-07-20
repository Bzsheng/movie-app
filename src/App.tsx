import React from 'react';
import './App.css';
import { useState } from 'react';
import qr from './qr.png'
import fetch from 'unfetch'
import useSWR from 'swr';
import WeChat from './WeChat.jpg'
import { Helmet } from 'react-helmet'

const App: React.FC = () => {

  const fetcher = (url: string) =>
    fetch(url)
      .then(r => r.json())

  const { data } = useSWR('http://localhost:7001/movie', fetcher)

  function Getmovie() {
    const i = Math.ceil(Math.random() * 250) - 1
    setMovie(data[i])
  }

  const initState = {
    name: '肖申克的救赎',
    img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp',
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
      <img className='cover' alt={movie.name} src={movie.img} />
      <p>{'《' + movie.name + '》'}</p>
      <p>{movie.info || ''}</p>
      <button onClick={Getmovie}>
        换一部
      </button>
      <p>截屏分享</p>
      <img alt='截屏分享' height={40} width={40} src={qr} />
    </div>
  )
}

export default App