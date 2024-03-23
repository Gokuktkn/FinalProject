import React, { useEffect, useState } from 'react'
import '../css/Detail.css'
import axios from 'axios';
import { Cast } from '../components/Cast';
import { FcLike } from "react-icons/fc";
import { MdBookmarkAdd } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IconButton, Tooltip } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";

export const Detail = () => {
  const params = useParams().id;
  const paramsType = useParams().type;
  const navigate = useNavigate();
  const login = localStorage.getItem("data");
  const movieData = {
    DETAIL_URL: `https://api.themoviedb.org/3/${paramsType}/${params}?language=en-US`,
    CAST_URL: `https://api.themoviedb.org/3/${paramsType}/${params}/credits?language=en-US`,
    TRAILER_URL: `https://api.themoviedb.org/3/${paramsType}/${params}/videos?language=en-US`
  }
  const [listDetail, setListDetail] = useState({});
  const [listCast, setListCast] = useState([]);
  const [listTrailer, setListTrailer] = useState([]);
  let [trailerActive, setTrailerActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo'
        }
      };
      const dataDetail = await axios.get(movieData.DETAIL_URL, options);
      const dataCast = await axios.get(movieData.CAST_URL, options);
      const dataTrailer = await axios.get(movieData.TRAILER_URL, options);
      setListDetail({ ...dataDetail?.data });
      setListCast([...dataCast?.data?.cast]);
      setListTrailer([...dataTrailer?.data?.results]);
      setLoading(false);
    }
    fetchData();
  }, []);

  let trailerPosition = listTrailer.length > 0 ? listTrailer[listTrailer.length - 1] : null;

  const handleTrailer = () => {
    setTrailerActive(!trailerActive);
  };

  const addToWatchlist = async () => {
    if (!login) {
      navigate("/login");
    } else {
      try {
        const dataBody = {
          media_type: "movie",
          media_id: listDetail.id,
          watchlist: true,
        };
        const headers = {
          accept: "application/json",
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo",
        };
        const url = `https://api.themoviedb.org/3/account/21038321/watchlist`;
        const response = await axios.post(url, dataBody, { headers });
        if (response) {
          toast.success("Added to 🍿 WATCHLIST");
        } else {
          toast.error("Error adding to ❤️ FAVORITE");
        }
      } catch (error) {
        console.error(
          "An error occurred while adding movie to watchlist:",
          error
        );
        toast.error("Error adding to 🍿 WATCHLIST");
      }
    }
  };

  const addToFavlist = async () => {
    if (!login) {
      navigate("/login");
    } else {
      try {
        const dataBody = {
          media_type: "movie",
          media_id: listDetail.id,
          favorite: true,
        };
        const headers = {
          accept: "application/json",
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo",
        };
        const url = `https://api.themoviedb.org/3/account/21038321/favorite`;
        const response = await axios.post(url, dataBody, { headers });
        if (response) {
          toast.success("Added to ❤️ FAVORITE");
        } else {
          toast.error("Error adding to ❤️ FAVORITE");
        }
      } catch (error) {
        console.error("An error occurred while adding movie to favorite:", error);
        toast.error("Error adding to ❤️ FAVORITE");
      }
    }
  };

  return (
    <div className='detail'>
      <Header />
      {loading ? (
        <div className="loading-spinner">
          <BeatLoader color="#36d7b7" size={30} />
        </div>
      ) : (<div className="detail-content">
        <div className="container-fluid info-container" style={{ backgroundImage: `linear-gradient(0, #00000099, #000000c7), url('https://media.themoviedb.org/t/p/w300_and_h450_bestv2${listDetail.backdrop_path}')` }}>
          <div className='container info'>
            <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${listDetail.poster_path}`} alt='Movie img' className='movie-img' />
            <div className='desc'>
              <p className='name-info'>{listDetail.original_title ?? listDetail.original_name}</p>
              <div className='function'>
                {login ? (
                  <Tooltip title="Add to Watchlist">
                    <IconButton color="primary" onClick={addToWatchlist}>
                      <MdBookmarkAdd color="darkOrange" />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="You need to log in first" classes={{ tooltip: 'custom-tooltip' }}>
                    <IconButton color="primary" disable>
                      <MdBookmarkAdd color="darkOrange" />
                    </IconButton>
                  </Tooltip>
                )}
                {login ? (
                  <Tooltip title="Add to Favorite list">
                    <IconButton color="primary" onClick={addToFavlist}>
                      <FcLike />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="You need to log in first">
                    <IconButton disable>
                      <FcLike />
                    </IconButton>
                  </Tooltip>
                )}
                <div className='movie-trailer'>
                  <button className='btn-play-trailer' onClick={handleTrailer}><FaPlay /> Play trailer</button>
                  {trailerActive && (
                    <div className="show-video">
                      <div className="exit">
                        <button onClick={handleTrailer} className='btn-exit'><IoClose className='exit-icon' /></button>
                      </div>
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
              <div className='overview-detail'>
                <h3>Overview</h3>
                <p className='content-overview'>{listDetail.overview}</p>
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
      </div>)}
    </div>
  )
}
