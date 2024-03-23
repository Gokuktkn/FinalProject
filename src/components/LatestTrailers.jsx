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
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo'
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
      <h1 className='title-body title-trailer'>Latest Trailers</h1>
      <div className='list-trailers'>
        {listLatest.map((item) => (<Trailer data={item} key={item.id} onMouseEnter={handleMouseEnter} />))}
      </div>
    </div>
  )
}