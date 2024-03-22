import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Trailer } from './Trailer';

export const LatestTrailers = () => {
  const [listLatest, setListLatest] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("")

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
      setBackgroundImage(listLatest?.backdrop_path);
    }
    fetchData();
  }, []);

  const handleMouseEnter = (backgroundSrc) => {
    setBackgroundImage(backgroundSrc);
  }

  return (
    <div className='container latest-trailer' style={{backgroundImage: `linear-gradient(0, #021e34c7, #021e34c7), url('https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces${backgroundImage}')`}}>
      <p className='title-body title-trailer'>Latest Trailers</p>
      <div className='list-trailers'>
        {listLatest.map((item) => (<Trailer data={item} key={item.id} onMouseEnter={handleMouseEnter} />))}
      </div>
    </div>
  )
}