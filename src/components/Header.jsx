import React from 'react'
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container-fluid header-container-fluid'>
            <div className='container header'>
                <div className='header-left'>
                    <div className='logo'>
                        <Link to={'/'}><img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='TMDB logo' /></Link>
                    </div>
                    <div className='tab'><Link to={'/movies'}>Movies</Link></div>
                    <div className='tab'><Link to={'/tvshows'}>TV Shows</Link></div>
                    <div className='tab'><Link to={'/mylist'}>My List</Link></div>
                </div>
                <div className='header-right'>
                    <div className='language'></div>
                    <div className='login'>Login</div>
                    <div className='register'>Join TMDB</div>
                    <div className='search'><IoSearch className='search-logo' /></div>
                </div>
            </div>
        </div>
    )
}


export default Header;