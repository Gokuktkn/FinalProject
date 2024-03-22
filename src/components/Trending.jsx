import React from 'react'
import '../css/Home.css'
import { Movie } from './Movie'

export const Trending = () => {
  return (
    <div className='container trending'>
      <p className='title-body'>Trending</p>
      <div className='trending-list'>
        <Movie url='https://api.themoviedb.org/3/trending/movie/day?language=en-US' />
      </div>
    </div>
  )
}
