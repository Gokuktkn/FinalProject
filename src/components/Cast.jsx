import React from 'react'

export const Cast = ({data}) => {
    const imgSrc = data.profile_path ? `https://media.themoviedb.org/t/p/w138_and_h175_face${data.profile_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
    return (
        <div className='cast'>
            <img src={imgSrc} alt='Cast img' className='img-cast' />
            <div className='info-cast'>
                <p className='name-cast'>{data.name}</p>
                <p className='character-cast'>{data.character}</p>
            </div>
        </div>
    )
}
