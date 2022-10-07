import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({show}) => {
    console.log(show)
    const id = show._links.self.href.split("/")[4]
    // console.log(id)
  return (
    <>
    <div class="card" style={{width:"18rem",margin:"20px"}}>
  <img src={show.image.medium} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{show.name}</h5>
    <p class="card-text">Language : {show.language}</p>
    <p class="card-text">Premiered : {show.premiered}</p>
    <p class="card-text">{show.rating.average ? <> {show.rating.average} <svg style={{color:"orange"}} xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg> </>: <>no rating</>  } </p>
  <Link to={`/show/${id}`} ><button className='btn btn-primary' >Show More</button></Link>  
  </div>
</div>
    
    </>
  )
}

export default Card