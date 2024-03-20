import React, { useState } from 'react'
import "../css/Search.css"
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import { IoSearch } from "react-icons/io5";
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
    const [inputSearch, setInputSearch] = useState('');
    const navigate = useNavigate();
    const [listMovies, setListMovies] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2RiYzEzNmIyZDVhYTJkNTM4MWFkMDBiNjZjMmM4NSIsInN1YiI6IjY1ZDU1YjRjZGIxNTRmMDE2NGEwNDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSLtWCpGKcGASs4bbXgo92iHp4cgrF68Nmxd499DCeE'
        }
    };
    const fetchData = async () => {
        const data = await axios.get(`https://www.themoviedb.org/search/movie`, options)
        setListMovies(data)
    }
    fetchData();
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("alo")
        if (inputSearch.trim()) {
            navigate(`search?key=${inputSearch}`)
        }
    }
    console.log(listMovies)
    return (
        <div className='search-page'>
            <Header />
            <div className="container">
                <div className="search-input">
                    <input type="text" />
                    <IoSearch className='search-icon' onClick={handleSearch} />
                </div>
                <div className="search-content">
                    <div className="search-filter">
                        <p className='filter-title'>Search Filter</p>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-movies-tab" data-toggle="pill" href="#v-pills-movies" role="tab" aria-controls="v-pills-movies" aria-selected="true">Movies</a>
                            <a className="nav-link" id="v-pills-tv-tab" data-toggle="pill" href="#v-pills-tv" role="tab" aria-controls="v-pills-tv" aria-selected="false">TV Shows</a>
                        </div>
                    </div>
                    <div className="search-results tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-movies" role="tabpanel" aria-labelledby="v-pills-movies-tab">Alo</div>
                        <div className="tab-pane fade" id="v-pills-tv" role="tabpanel" aria-labelledby="v-pills-tv-tab">...</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search
