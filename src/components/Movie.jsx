import React, { useEffect, useState } from 'react'
import "../css/Home.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Movie = ({ url }) => {
  const [listMovie, setListMovie] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2RiYzEzNmIyZDVhYTJkNTM4MWFkMDBiNjZjMmM4NSIsInN1YiI6IjY1ZDU1YjRjZGIxNTRmMDE2NGEwNDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSLtWCpGKcGASs4bbXgo92iHp4cgrF68Nmxd499DCeE'
    }
  };
  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await axios.get(url, options)
      setListMovie([...data.data.results]);
      return data;
    }
    fetchMovieData();
  }, [])
  return (
    <div className='movie-list'>
      {
        listMovie.length > 0 && listMovie.map(item => {
          return <Link to={`/${item.id}`} key={item.id}><div className='movie'><img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} alt='Movie img' className='img-movie' /><div className="title-movie"><p className='name-movie'>{item.title}</p><p className='time-movie'>{item.release_date}</p></div></div></Link>
        })
      }
    </div>
  )
}

