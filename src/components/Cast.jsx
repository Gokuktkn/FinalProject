import React from 'react'

export const Cast = ({data}) => {
    return (
        <div className='cast'>
            <img src={`https://media.themoviedb.org/t/p/w138_and_h175_face${data.profile_path}`} alt='Cast img' className='img-cast' />
            <div className='info-cast'>
                <p className='name-cast'>{data.name}</p>
                <p className='character-cast'>{data.character}</p>
            </div>
        </div>
    )
}
