import React,{useState,useEffect} from 'react'
import Card from '../Components/Card';

const Home = () => {
 const [shows ,setShows] = useState([])
 useEffect(()=>{
    const getData = async () =>{
        const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await res.json();
        // console.log(data)
        setShows(data);
    }
    getData();
 },[])
  return (
    <>
 <div style={{marginTop:"35px",display:"flex",flexWrap:"wrap"}} className="container">
    {
        shows.map((show)=>{
         return    <Card show={show.show} />
        })
    }
 </div>
  

    
    </>
  )
}

export default Home