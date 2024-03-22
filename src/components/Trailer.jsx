import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlay } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";

export const Trailer = (data) => {
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
            const dataTrailer = await axios.get(`https://api.themoviedb.org/3/movie/${data.data.id}/videos?language=en-US`, options);
            setListTrailer([...dataTrailer?.data?.results]);
        }
        fetchData();
    }, []);
    const handleTrailer = () => {
        setTrailerActive(!trailerActive);
    }
    let trailerPosition = listTrailer.length > 0 ? listTrailer[listTrailer.length - 1] : null;
    return (
        <div className='trailer'>
            <div className='img-trailer'>
                <img src={`https://media.themoviedb.org/t/p/w355_and_h200_multi_faces${data.data.backdrop_path}`} alt='Trailer video' />
                <button className='btn-play-trailer-home' onClick={handleTrailer}><FaPlay className='play-icon' /></button>
            </div>
            <p className='name-trailer'>{data.data.original_title}</p>
            {trailerActive && (
                <div className="show-video-home">
                    <div className="exit-trailer">
                        <button onClick={handleTrailer} className='btn-exit'><IoClose className='exit-icon'/></button>
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
