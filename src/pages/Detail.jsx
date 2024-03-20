import React, { useEffect, useState } from 'react'
import '../css/Detail.css'
import { FaBookmark } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import { FaPlay } from "react-icons/fa";
import { Cast } from '../components/Cast';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

export const Detail = () => {
  const params = useParams().id;

  const DETAIL_URL = `https://api.themoviedb.org/3/movie/${params}?language=en-US`;
  const CAST_URL = `https://api.themoviedb.org/3/movie/${params}/credits?language=en-US`;
  const TRAILER_URL = `https://api.themoviedb.org/3/movie/${params}/videos?language=en-US`;
  const [listDetail, setListDetail] = useState({});
  const [listCast, setListCast] = useState([]);
  const [listTrailer, setListTrailer] = useState([]);
  let [trailerActive, setTrailerActive] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2RiYzEzNmIyZDVhYTJkNTM4MWFkMDBiNjZjMmM4NSIsInN1YiI6IjY1ZDU1YjRjZGIxNTRmMDE2NGEwNDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSLtWCpGKcGASs4bbXgo92iHp4cgrF68Nmxd499DCeE'
        }
      };
      const dataDetail = await axios.get(DETAIL_URL, options)
      const dataCast = await axios.get(CAST_URL, options)
      const dataTrailer = await axios.get(TRAILER_URL, options)
      const data = dataDetail;
      setListDetail({ ...dataDetail?.data });
      setListCast([...dataCast?.data?.cast]);
      setListTrailer([...dataTrailer?.data?.results]);
    }
    fetchData();
  }, []);

  const movieTitle = listDetail.title ? listDetail.title.toLowerCase().replace(/[^a-zA-Z ]/g, '').replace(/\s+/g, '-') : ""; //replace(/[^a-zA-Z ]/g, '') -> Loại bỏ ký tự không phải chữ và dấu cách, replace(/\s+/g, '-') -> Thay thế dấu cách bằng dấu -

  let trailerPosition = listTrailer.length > 0 ? listTrailer[listTrailer.length - 1] : null;

  const handleTrailer = () => {
    setTrailerActive(!trailerActive);
  }
  return (
    <div className='detail'>
      <Header />
      <div className="container-fluid info-container" style={{ backgroundImage: `linear-gradient(0, #00000099, #000000c7), url('https://media.themoviedb.org/t/p/w300_and_h450_bestv2${listDetail.backdrop_path}')` }}>
        <div className='container info'>
          <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${listDetail.poster_path}`} alt='Movie img' className='movie-img' />
          <div className='desc'>
            <p className='name-info'>{listDetail.original_title}</p>
            <div className='function'>
              <button className='btn-list'><FaBookmark /></button>
              <button className='btn-list'><FaList /></button>
              <div className='movie-trailer'>
                <button className='btn-play-trailer' onClick={handleTrailer}><FaPlay /> Play trailer</button>
                {trailerActive && (
                  <div className="show-video">
                    <button onClick={handleTrailer} className='btn-exit'>X</button>
                    <iframe
                      src={`https://www.youtube.com/embed/${trailerPosition.key}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      className='video-trailer'
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
            <div className='overview'>
              <h3>Overview</h3>
              <p className='content-overview'>{listDetail.overview}</p>
            </div>
            <div className='producer'>
              <div className='producer-info'>
                <p className='name-producer'>Denis Villeneuve</p>
                <p className='role'>Director, Screenplay</p>
              </div>
              <div className='producer-info'>
                <p className='name-producer'>Frank Herbert</p>
                <p className='role'>Novel</p>
              </div>
              <div className='producer-info'>
                <p className='name-producer'>Jon Spaihts</p>
                <p className='role'>Screenplay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className='container title-billed-cast'>Top Billed Cast</h3>
      <div className='container more'>
        <div className='top-billed-cast'>
          {listCast.map(cast => {
            return <Cast data={cast} key={cast.id} />
          })}
        </div>
        <div className='achievements'>
          <div className='content-achievement'>
            <p className='title-achievement'>Original Title</p>
            <p className='result-achievement'>{listDetail.original_title}</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Status</p>
            <p className='result-achievement'>{listDetail.status}</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Original Language</p>
            <p className='result-achievement'>{listDetail.original_language}</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Budget</p>
            <p className='result-achievement'>${listDetail.budget}</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Revenue</p>
            <p className='result-achievement'>${listDetail.revenue}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
