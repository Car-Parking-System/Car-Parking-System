import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult';
import { apiUrls, baseUrl } from '../lib/constants';
import Swal from 'sweetalert2';
export default function Carouselslide() {
  const [halls,sethalls]=useState([])
  const [date,setdate]=useState('')
  const [movieName,setmovieName]=useState('')
  const [slot,setslot]=useState(0)
  const [hallId,sethallId]=useState(0)
  const [data,setData]=useState([])
  const handleSearch=e=>{
      e.preventDefault()
      if(hallId || date || movieName || slot)
      {
        axios.get(baseUrl+apiUrls.SEARCH_SHOWS+'?hallId='+hallId+"&date="+date+"&movieName="+movieName+"&slot="+slot).then((resp) => {
        setData(resp.data)   
      })
    }
    else{
      Swal.fire('Error','Please select any one parameter')
    }
  }
  useEffect(()=>{
    axios.get(baseUrl+apiUrls.HALLS_URL)
    .then(resp=>{
      sethalls(resp.data)
    }).catch(err=>{
      console.log(err)
    })
    axios.get(baseUrl+apiUrls.TODAYS_SHOWS).then((resp) => {
      setData(resp.data)
    })
  },[])
  return (
    <>
    <div className='mt-5'>
      <div className="d-block w-100" 
       style={{height:"500px",backgroundImage:"url('https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg')",backgroundSize:"100% 100%"}}
      >
 {/* carousel slide" id="carouselExampleIndicators" */}


  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div src="https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <div src="https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <div src="https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}


         {/* style={{height:"500px",backgroundImage:"url('header.jpg')",backgroundSize:"100% 100%"}}> */}
           <form className="d-block mx-auto" style={{width:"80%",position:"absolute",top:"44%",left:"50%",transform:"translate(-50%,-50%)"}}>
             <div className='row'>
                <div className='col-sm-3'>
                <select className="form-control me-2" value={slot} onChange={e=>setslot(e.target.value)}>
                  <option value=''>Select Time Slot</option>
                  <option value='1'>00:00AM to 11:59PM</option>
                  </select>
                </div>
               <div className='col-sm-2'>
                <select className="form-control me-2" value={hallId} onChange={e=>sethallId(e.target.value)}>
                    <option value="">Select Park Address</option>
                    {halls.map(x=>(
                    <option value={x.hallId}>{x.hallDesc}</option>
                    ))}
                </select>
                </div>
                <div className='col-sm-3'>
                <input type='search' placeholder='Park name here' className="form-control me-2" value={movieName} onChange={e=>setmovieName(e.target.value)}/>
                </div>
                <div className='col-sm-3'>
                <input type="date" className='form-control me-2' value={date} onChange={e=>setdate(e.target.value)} />
                </div>                
                <div className='col-sm-1'>
                <button onClick={handleSearch} className="btn btn-warning bg-gradient text-white" type="submit"><i className="fa fa-search"></i></button>
                </div>
                </div>
            </form>
         </div>
    </div>
    <SearchResult data={data} />
    </>

  //   <div className='mt-5'>
  //   <div className="d-block w-100" style={{
  //     height: "500px",
  //     backgroundImage: "url('https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg')",
  //     backgroundSize: "100% 100%"
  //   }}>
  //     <form className="d-block mx-auto" style={{
  //       width: "80%",
  //       position: "absolute",
  //       top: "44%",
  //       left: "50%",
  //       transform: "translate(-50%,-50%)"
  //     }}>
  //       <div className='row'>
  //         {/* Carousel within the form */}
  //         <div className="col-12 mb-3">
  //           <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  //             <div className="carousel-indicators">
  //               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  //               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  //               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  //             </div>
  //             <div className="carousel-inner">
  //               <div className="carousel-item active">
  //                 <img src="https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg" className="d-block w-100" alt="Slide 1" style={{ height: "300px", objectFit: "cover" }} />
  //               </div>
  //               <div className="carousel-item">
  //                 <img src="https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg" className="d-block w-100" alt="Slide 2" style={{ height: "300px", objectFit: "cover" }} />
  //               </div>
  //               <div className="carousel-item">
  //                 <img src="https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg" className="d-block w-100" alt="Slide 3" style={{ height: "300px", objectFit: "cover" }} />
  //               </div>
  //             </div>
  //             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  //               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //               <span className="visually-hidden">Previous</span>
  //             </button>
  //             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  //               <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //               <span className="visually-hidden">Next</span>
  //             </button>
  //           </div>
  //         </div>

  // //         {/* Rest of the form fields */}
  // //         <div className='col-sm-3'>
  // //           <select className="form-control me-2" value={slot} onChange={e => setslot(e.target.value)}>
  // //             <option value=''>Select Time Slot</option>
  // //             <option value='1'>00:00AM to 11:59PM</option>
  // //           </select>
  // //         </div>
  // //         <div className='col-sm-2'>
  // //           <select className="form-control me-2" value={hallId} onChange={e => sethallId(e.target.value)}>
  // //             <option value="">Select Park Address</option>
  // //             {halls.map(x => (
  // //               <option key={x.hallId} value={x.hallId}>{x.hallDesc}</option>
  // //             ))}
  // //           </select>
  // //         </div>
  // //         <div className='col-sm-3'>
  // //           <input type='search' placeholder='Park name here' className="form-control me-2" value={movieName} onChange={e => setmovieName(e.target.value)} />
  // //         </div>
  // //         <div className='col-sm-3'>
  // //           <input type="date" className='form-control me-2' value={date} onChange={e => setdate(e.target.value)} />
  // //         </div>
  // //         <div className='col-sm-1'>
  // //           <button onClick={handleSearch} className="btn btn-warning bg-gradient text-white" type="submit"><i className="fa fa-search"></i></button>
  // //         </div>
  // //       </div>
  // //     </form>
  // //   </div>
  // // </div>
  );
}
