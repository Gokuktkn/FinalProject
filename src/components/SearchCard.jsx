import React from 'react'

const SearchCard = (data) => {
    const imgMovieSrc = data.data.poster_path ? `https://image.tmdb.org/t/p/w94_and_h141_bestv2${data.data.poster_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
    return (
        <div className='search-card'>
            <img src={imgMovieSrc} alt="Panda" />
            <div className="info-search">
                <div className="title-info">
                    <div className="name-title">{data.data.original_title ?? data.data.original_name}</div>
                    <div className="time-title">{data.data.release_date ?? data.data.first_air_date}</div>
                </div>
                <p className="desc-info">{data.data.overview}</p>
            </div>
        </div>
    )
}

export default SearchCard
