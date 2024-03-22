import React from 'react'
import '../css/Home.css'
import { Banner } from '../components/Banner'
import { Trending } from '../components/Trending'
import { LatestTrailers } from '../components/LatestTrailers'
import { Popular } from '../components/Popular'
import Header from '../components/Header'
import { Footer } from '../components/Footer'


export const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Trending />
            <LatestTrailers />
            <Popular />
            <Footer />
        </div>
    )
}
