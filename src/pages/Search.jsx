import React, { useEffect, useState } from 'react';
import "../css/Search.css";
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { IoSearch } from "react-icons/io5";
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import SearchCard from '../components/SearchCard';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let [inputVal, setInputVal] = useState("");
    const [listMovieSearch, setListMovieSearch] = useState([]);
    const [listTVSearch, setListTVSearch] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2RiYzEzNmIyZDVhYTJkNTM4MWFkMDBiNjZjMmM4NSIsInN1YiI6IjY1ZDU1YjRjZGIxNTRmMDE2NGEwNDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSLtWCpGKcGASs4bbXgo92iHp4cgrF68Nmxd499DCeE'
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const movieData = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchParams.get('key')}&include_adult=false&language=en-US&page=1`, options)
            const tvShowData = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${searchParams.get('key')}&include_adult=false&language=en-US&page=1`, options)
            setListMovieSearch(movieData.data.results);
            setListTVSearch(tvShowData.data.results);
        }
        fetchData();
    }, [searchParams.get('key')])
    const handleSearch = () => {
        setSearchParams({key: inputVal});
    }
    return (
        <div className='search-page'>
            <Header />
            <div className="container search-page-content">
                <div className="search-input">
                    <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                    <IoSearch className='search-icon' onClick={handleSearch} />
                </div>
                <div className="search-content">
                    <div className="search-tab">
                        <div className="search-filter">
                            <p className='filter-title'>Search Filter</p>
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active" id="v-pills-movies-tab" data-toggle="pill" href="#v-pills-movies" role="tab" aria-controls="v-pills-movies" aria-selected="true">Movies</a>
                                <a className="nav-link" id="v-pills-tv-tab" data-toggle="pill" href="#v-pills-tv" role="tab" aria-controls="v-pills-tv" aria-selected="false">TV Shows</a>
                            </div>
                        </div>
                    </div>
                    <div className="search-results tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-movies" role="tabpanel" aria-labelledby="v-pills-movies-tab">
                            <div className="movieList list-content">
                                {listMovieSearch.map(item => {
                                    return <Link to={`/${item.id}`} key={item.id}><SearchCard data={item} /></Link>
                                })}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-tv" role="tabpanel" aria-labelledby="v-pills-tv-tab">
                            <div className="tvList list-content">
                                {listTVSearch.map(item => {
                                    return <Link to={`/${item.id}`} key={item.id}><SearchCard data={item} /></Link>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search
