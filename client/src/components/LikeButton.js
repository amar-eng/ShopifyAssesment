import React, {useState, useEffect} from 'react'
import '../styles/like.scss'
import {AiOutlineHeart,AiFillHeart}from 'react-icons/ai'


const LikeButton = () => {
    const [likes, setLikes] = useState(false)

    const handleClick = () => {
        setLikes(!likes)
    }
    useEffect(() => {
        setLikes(JSON.parse(window.localStorage.getItem('likes')));
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem('likes', likes);
      }, [likes]);
    return (
        <div className='heart-btn'onClick={handleClick}>
            <span className='heart-btn__icon' >
                {likes ? <AiFillHeart style={{color:'red'}}/> : <AiOutlineHeart style={{color:'red'}}/>}
            </span>
        </div>
    )
}

export default LikeButton
