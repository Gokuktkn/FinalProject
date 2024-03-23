import React from 'react'
import { Movie } from './Movie'

export const Popular = () => {
  return (
    <div className='container popular'>
      <h1 className='title-body'>What's popular</h1>
      <div className='popular-list'>
        <Movie url={'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'} />
      </div>
    </div>
  )
}
