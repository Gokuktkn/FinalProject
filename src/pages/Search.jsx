import React, { useEffect, useState } from 'react';
import "../css/Search.css";
import axios from 'axios';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { IoSearch } from "react-icons/io5";
import { Link, useSearchParams } from 'react-router-dom';
import SearchCard from '../components/SearchCard';
import PaginationCard from '../components/PaginationCard';
import { BeatLoader } from "react-spinners";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let [inputVal, setInputVal] = useState(searchParams.get('key'));
    const [listMovieSearch, setListMovieSearch] = useState([]);
    const [listTVSearch, setListTVSearch] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFlMmNhMmI3MDFmMTFhMjhlMDNmZDA3ZGY0YTUxMiIsInN1YiI6IjY1ZGVmMWFjZDVkYmMyMDE2MzU3OTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9c2ieIxbJ--UcJhcxvgLGM7_YtCYp6l_MD6XKktXggo'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const movieData = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchParams.get('key')}&include_adult=false&language=en-US&page=${currentPage}`, options)
            const tvShowData = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${searchParams.get('key')}&include_adult=false&language=en-US&page=1`, options)
            setListMovieSearch(movieData.data.results);
            setListTVSearch(tvShowData.data.results);
            setCurrentPage(movieData.data.page);
            setTotalPage(movieData.data.total_pages);
            setLoading(false);
        }
        fetchData();
    }, [searchParams.get('key'), currentPage])
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams({ key: inputVal });
        console.log(inputVal)
    }
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    return (
        <div className='search-page'>
            <Header />
            {loading ? (
                <div className="loading-spinner">
                    <BeatLoader color="#36d7b7" size={30} />
                </div>
            ) : (<div className="container search-page-content">
                <form className="search-input" onSubmit={handleSearch}>
                    <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                    <button className='btn-search' onClick={handleSearch} ><IoSearch /></button>
                </form>
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
                                    return <Link to={`/movie/${item.id}`} key={item.id}><SearchCard data={item} /></Link>
                                })}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-tv" role="tabpanel" aria-labelledby="v-pills-tv-tab">
                            <div className="tvList list-content">
                                {listTVSearch.map(item => {
                                    return <Link to={`/tv/${item.id}`} key={item.id}><SearchCard data={item} /></Link>
                                })}
                            </div>
                        </div>
                        <div className="pagination-search">
                            <PaginationCard
                                currentPage={currentPage}
                                totalPages={totalPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
                < Footer />
            </div>)}
        </div>
    )
}

export default Search
