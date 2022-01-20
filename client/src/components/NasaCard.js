import React from 'react'
import '../styles/card.scss'
import Like from '../components/LikeButton'
const NasaCard = ({item}) => {
  

    return (
        <>
        <div className="cards">
         <div className='card'>
             <p className='card__title'>{item.title}</p>
             <img className='card__img' src={item.url} alt={item.title}/>
             <div className='card__content'>
             <p className='card__date'>Date of Capture: {item.date}</p>
             <Like/>
             </div>
               
         </div>
        </div>
        </>
       
      
    )
}

export default NasaCard
