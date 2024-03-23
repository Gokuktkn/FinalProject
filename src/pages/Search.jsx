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
    let [pageType, setPageType] = useState("movie");
    const [listSearch, setListSearch] = useState([]);
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
            const data = await axios.get(`https://api.themoviedb.org/3/search/${pageType}?query=${searchParams.get('key')}&include_adult=false&language=en-US&page=${currentPage}`, options)
            setListSearch(data.data.results);
            setCurrentPage(data.data.page);
            setTotalPage(data.data.total_pages);
            setLoading(false);
        }
        fetchData();
    }, [searchParams.get('key'), currentPage, pageType])
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams({ key: inputVal });
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
                                <a className={pageType=="movie"?"nav-link active":"nav-link"} onClick={() => setPageType("movie")}>Movies</a>
                                <a className={pageType=="tv"?"nav-link active":"nav-link"} onClick={() => setPageType("tv")}>TV Shows</a>
                            </div>
                        </div>
                    </div>
                    <div className="search-results tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" >
                            <div className="movieList list-content">
                                {listSearch.map(item => {
                                    return <Link to={`/${pageType}/${item.id}`} key={item.id}><SearchCard data={item} /></Link>
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
