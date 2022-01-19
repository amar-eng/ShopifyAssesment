import React, {useState, useEffect} from 'react'

const Nasaphoto = () => {
    const [photo, setPhoto] = useState(null) 
    // const [loading, setLoading] = useState(true)
    // const [start, setStart] = useState('2021-10-01')
    // const [end, setEnd] = useState('2021-11-01')
    useEffect(() => {
        fetchData(); 
        
        async function fetchData() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?start_date=2021-10-01&end_date=2021-11-01&api_key=BrQEOcLZaUxXB3B2XcpdByt9XN4b5UC3Y8fIsfiE`)
            const data = await res.json()
            setPhoto(data)
            console.log(data)

        }
        
    }, [])

    if(!photo) {
        return <div>Loading...</div>
    }
   
    // const handleKeyDown = (e) => {
    //     if(e.key === "Backspace" || e.key === "Delete") return;
    //     // if(e.key === "Enter") {
    //     //     setStart(e.target.value)

    //     // }
    //     if (e.target.value.length ===4) {
    //         // add hyphen
    //         e.target.value = e.target.value + "-"
    //     }
    //     if (e.target.value.length ===7) {
    //         // add hyphen
    //         e.target.value = e.target.value + "-"
    //     }
        
    // }
    
    // const handleKeyDown2 = (e) => {
    //     if(e.key === "Backspace" || e.key === "Delete") return;
    //     // if(e.key === "Enter") {
    //     //     setEnd(e.target.value)

    //     // }
    //     if (e.target.value.length ===4) {
    //         // add hyphen
    //         e.target.value = e.target.value + "-"
    //     }
    //     if (e.target.value.length ===7) {
    //         // add hyphen
    //         e.target.value = e.target.value + "-"
    //     }
        
      
    
    // }
    // const handleSubmit = (e)=>{
    //     console.log(e.target.value)
    // }
    
    return (
        <div>
            {/* <form onSubmit={
                (e) => {
                    e.preventDefault()
                    // setStart(e.target.value)
                    // setEnd(e.target.value)
                }
            }> */}
                {/* <input type="date" placeholder="YYYY-MM-DD" onClick={handleSubmit} /> */}
                {/* <input type="text" placeholder="YYYY-MM-DD" onKeyDown={handleKeyDown2} /> */}
                {/* <input type="submit" value="Submit"/> */}
            {/* </form> */}
         {/* <input onKeyDown={handleKeyDown} maxLength={10} />
        <input onKeyDown={handleKeyDown2} maxLength={10} /> */}
        {/* <input onSubmit={(e) => {
            // e.preventDefault()
            setStart(e.target.value)
            setEnd(e.target.value)  }} type='submit'/> */}
        
          {/* <input type ='submit' value='Submit' onSubmit={handleSubmit}/> */}
            {
                photo.map(photo => (
                    <img src={photo.url} alt= {photo.title}/>
                ))

            }

        </div>
    )
}

export default Nasaphoto
