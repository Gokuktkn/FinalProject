import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlay } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";

export const Trailer = ({ data, ...props }) => {
    const [listTrailer, setListTrailer] = useState([]);
    let [trailerActive, setTrailerActive] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo'
                }
            };
            const dataTrailer = await axios.get(`https://api.themoviedb.org/3/movie/${data.id}/videos?language=en-US`, options);
            setListTrailer([...dataTrailer?.data?.results]);
        }
        fetchData();
    }, []);

    const handleTrailer = () => {
        setTrailerActive(!trailerActive);
    }

    let trailerPosition = listTrailer.length > 0 ? listTrailer[listTrailer.length - 1] : null;

    const handleMouseEnter = () => {
        props.onMouseEnter(data.backdrop_path);
    }

    return (
        <div className='trailer' onMouseEnter={() => handleMouseEnter()}>
            <div className='img-trailer'>
                <img src={`https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${data.backdrop_path}`} alt='Trailer video' />
                <button className='btn-play-trailer-home' onClick={handleTrailer}><FaPlay className='play-icon' /></button>
            </div>
            <p className='name-trailer'>{data.original_title}</p>
            {trailerActive && (
                <div className="show-video-home">
                    <div className="exit-trailer">
                        <button onClick={handleTrailer} className='btn-exit'><IoClose className='exit-icon' /></button>
                    </div>
                    <iframe
                        src={`https://www.youtube.com/embed/${trailerPosition.key}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className='video-trailer-home'
                    ></iframe>
                </div>
            )}
        </div>
    )
}
