import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
    const [show, setShow] = useState({});
    const [name,setName] = useState('');
    const [seat,setSeat] = useState('');
    const params = useParams();

    useEffect(() => {
        const getShow = async () => {
            const res = await fetch('https://api.tvmaze.com/shows/' + params.id);
            const data = await res.json();
            console.log(data);
            setShow(data)
        }
        getShow();
    }, [params])

    const Booking = () =>{
        const ticket = {
            show:show.name,
            name:name,
            totalSeat:seat
        };
        localStorage.setItem("ticket",JSON.stringify(ticket));
        alert("Booking Successful")
    }

    return (
        <div className='container'>
            <div class="card mb-3">
                <img style={{ height: "400px", width: "300px" }} src={show.image?.medium} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{show.name}</h5>
                    <p class="card-text">{show.summary?.slice(3, -4).replace(/[<b> </b>]/g, ' ')}</p>
                    <p>NetWork : <span style={{ color: "gray" }}>{show.network?.name}</span> </p>
                    <p>time : {show.schedule?.time}</p>
                    <div style={{ display: "flex" }} > {show.genres?.map((genre) => {
                        return <p style={{ margin: "5px" }}>{genre}</p>
                    })} </div>

                    <p class="card-text"><small class="text-muted">premiered {show.premiered}</small></p>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ float: "right" }} className='btn btn-success' >Book Ticket</button>


                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Show : {show.name}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>time : {show.schedule?.time}</p>
                                    <select onChange={(e)=>setSeat(e.target.value)} class="form-select" aria-label="Default select example">
                                        <option selected>choose Seats</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4">Four</option>
                                    </select>

                                    <div style={{margin:"20px"}} className="input-name">
                                        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter name' />
                                    </div>


                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={Booking} data-bs-dismiss="modal" type="button" class="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Show