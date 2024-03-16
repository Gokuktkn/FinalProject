import React from 'react'
import '../css/Home.css'

export const Banner = () => {
    
    return (
        <div className='container banner'>
            <div className='introduction'>
                <p className='title-banner'>Welcome.</p>
                <p className='desc-banner'>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className='search-banner'>
                <input type='text' className='input-search'placeholder='Search for a movie, tv show, person......'/>
                <button className='search-button'>Search</button>
            </div>
        </div>
    )
}
