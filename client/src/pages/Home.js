import React,{useState,useEffect} from 'react'
import NasaCard from '../components/NasaCard'

import '../styles/home.scss'
const Home = () => {

    const [info, setInfo] = useState(null) 
    useEffect(() => {
        fetchData(); 
        
        async function fetchData() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?start_date=2022-01-11&api_key=BrQEOcLZaUxXB3B2XcpdByt9XN4b5UC3Y8fIsfiE`)
            const data = await res.json()
            setInfo(data)
            console.log(data)

        }
        
    }, [])

    if(!info) {
        
        return (
            <section className="wrapper">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="title">
                <span>NASA APOD</span>
         
             </div>
           <div className='loader'></div>
    
    </section>
        
     
        )
        
    }
  

    
    return (
        <>
        <section className="wrapper">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="title">
                <span>NASA APOD</span>
         
             </div>
        
    {
        info.map(item => {
            return <NasaCard item={item} key={item.title}/>
        }
        )

    }
    </section>
    </>
    )
}

export default Home
