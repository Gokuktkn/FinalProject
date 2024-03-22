import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Trailer } from './Trailer';

export const LatestTrailers = () => {
  const [listLatest, setListLatest] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2RiYzEzNmIyZDVhYTJkNTM4MWFkMDBiNjZjMmM4NSIsInN1YiI6IjY1ZDU1YjRjZGIxNTRmMDE2NGEwNDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSLtWCpGKcGASs4bbXgo92iHp4cgrF68Nmxd499DCeE'
        }
      };
      const dataTrailer = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options);
      setListLatest([...dataTrailer?.data?.results]);
    }
    fetchData();
  }, []);
  return (
    <div className='container latest-trailer'>
      <p className='title-body'>Latest Trailers</p>
      <div className='list-trailers'>
        {listLatest.map((item) => (<Trailer data={item} key={item.id} />))}
      </div>
    </div>
  )
}
