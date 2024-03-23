import React, { useState } from 'react';
import '../css/Home.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Banner = () => {
    const [inputSearch, setInputSearch] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        if (inputSearch.trim()) {
            navigate(`search?key=${inputSearch}`)
        }
    }
    return (
        <div className='container banner'>
            <div className='introduction'>
                <p className='title-banner'>Welcome.</p>
                <p className='desc-banner'>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <form className='search-banner'>
                <input type='text' className='input-search' placeholder='Search for a movie, tv show, person......' value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
                <button className='search-button' onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}
