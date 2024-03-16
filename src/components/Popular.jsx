import React from 'react'
import { Movie } from './Movie'

export const Popular = () => {
  return (
    <div className='container popular'>
      <div className='title-body'>What's popular</div>
      <div className='popular-list'>
        <Movie url={'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'}/>
      </div>
    </div>
  )
}
