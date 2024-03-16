import React from 'react'
import { FaPlay } from 'react-icons/fa';

export const Trailer = () => {
    return (
        <div className='trailer'>
            <div className='img-trailer'>
                <img src='https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/usLRh1bcbL0Q9X8zf6rL4OV1qrA.jpg' alt='Trailer video' />
                <FaPlay className='play-icon' />
            </div>
            <p className='name-trailer'>Kamen Rider (Tất cả series)</p>
            <p className='desc-trailer'>Geats (S33) - US Blu-ray Trailer</p>
        </div>
    )
}
