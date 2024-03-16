import React from 'react'
import { Banner } from '../components/Banner'
import { Trending } from '../components/Trending'
import { LatestTrailers } from '../components/LatestTrailers'
import { Popular } from '../components/Popular'
import '../css/Home.css'
import Header from '../components/Header'


export const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Trending />
            <LatestTrailers />
            <Popular />
        </div>
    )
}
