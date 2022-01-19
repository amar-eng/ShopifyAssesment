import React,{useState,useEffect} from 'react'
import NasaCard from '../components/NasaCard'
// import Nasaphoto from '../components/Nasaphoto'
import Navbar from '../components/Navbar'
// import '../styles/home.scss'
const Home = () => {

    const [info, setInfo] = useState(null) 
    useEffect(() => {
        fetchData(); 
        
        async function fetchData() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?start_date=2021-10-01&end_date=2021-11-01&api_key=BrQEOcLZaUxXB3B2XcpdByt9XN4b5UC3Y8fIsfiE`)
            const data = await res.json()
            setInfo(data)
            console.log(data)

        }
        
    }, [])

    if(!info) {
        return <div>Loading...</div>
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
            </section>
    {
        info.map(item => {
            return <NasaCard item={item}/>
        }
        )

    }
    </>
    )
}

export default Home
