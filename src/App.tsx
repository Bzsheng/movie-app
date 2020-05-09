import React from 'react';
import './App.css';
import { useState } from 'react';
import qr from './qr.png'
import fetch from 'unfetch'
import useSWR from 'swr';

const App: React.FC = () => {

  // const fetcher = (url: string) => 
  //   fetch(url)
  //     .then(r => r.json())
  // const { data } = useSWR('api/movie', fetcher)

  function Getmovie () {
    console.log('data')
  }

  const initState = {
      name: '肖申克的救赎',
      img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp',
      info: '希望让人自由'
    }
  const [movie, setMovie] = useState(initState)

  return (
    <div>
      <div className = 'header'></div>
      <div className = 'movie_main'>
        <img height = {300} width = {200} alt = {movie.name} src = {movie.img} />
        <p>{ '《' + movie.name + '》' }</p>
        <p>{ movie.info }</p>
        <button onClick = { Getmovie }>
          换一部
        </button>
        <p>截屏分享</p>
        <img alt = '截屏分享' height = {40} width = {40} src = {qr} />
      </div>
    </div>
  )
}

export default App