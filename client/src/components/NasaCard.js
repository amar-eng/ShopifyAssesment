import React from 'react'

const NasaCard = ({item}) => {
    return (
        <div className='card'>
            <h1 className='card__title'>
                {item.title}
            </h1>
            <img className='card__img' src={item.url} alt={item.title}/>
        </div>
    )
}

export default NasaCard
