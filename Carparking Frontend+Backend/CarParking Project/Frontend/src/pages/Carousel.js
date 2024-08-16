// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import SearchResult from './SearchResult';
// // import { apiUrls, baseUrl } from '../lib/constants';
// // import Swal from 'sweetalert2';
// // export default function Carouselslide() {
// //   const [halls,sethalls]=useState([])
// //   const [date,setdate]=useState('')
// //   const [movieName,setmovieName]=useState('')
// //   const [slot,setslot]=useState(0)
// //   const [hallId,sethallId]=useState(0)
// //   const [data,setData]=useState([])
// //   const handleSearch=e=>{
// //       e.preventDefault()
// //       if(hallId || date || movieName || slot)
// //       {
// //         axios.get(baseUrl+apiUrls.SEARCH_SHOWS+'?hallId='+hallId+"&date="+date+"&movieName="+movieName+"&slot="+slot).then((resp) => {
// //         setData(resp.data)   
// //       })
// //     }
// //     else{
// //       Swal.fire('Error','Please select any one parameter')
// //     }
// //   }
// //   useEffect(()=>{
// //     axios.get(baseUrl+apiUrls.HALLS_URL)
// //     .then(resp=>{
// //       sethalls(resp.data)
// //     }).catch(err=>{
// //       console.log(err)
// //     })
// //     axios.get(baseUrl+apiUrls.TODAYS_SHOWS).then((resp) => {
// //       setData(resp.data)
// //     })
// //   },[])
// //   return (
// //     <>
// //     <div className='mt-5'>
// //       <div className="d-block w-100"
// //       style={{height:"500px",backgroundImage:"url('https://lovehastings.com/wp-content/uploads/2018/12/Car-park.jpg')",backgroundSize:"100% 100%"}}>

// //          {/* style={{height:"500px",backgroundImage:"url('header.jpg')",backgroundSize:"100% 100%"}}> */}
// //            <form className="d-block mx-auto" style={{width:"80%",position:"absolute",top:"44%",left:"50%",transform:"translate(-50%,-50%)"}}>
// //              <div className='row'>
// //                 <div className='col-sm-3'>
// //                 <select className="form-control me-2" value={slot} onChange={e=>setslot(e.target.value)}>
// //                   <option value=''>Select Time Slot</option>
// //                   <option value='1'>00:00AM to 11:59PM</option>
// //                   </select>
// //                 </div>
// //                <div className='col-sm-2'>
// //                 <select className="form-control me-2" value={hallId} onChange={e=>sethallId(e.target.value)}>
// //                     <option value="">Select Park Address</option>
// //                     {halls.map(x=>(
// //                     <option value={x.hallId}>{x.hallDesc}</option>
// //                     ))}
// //                 </select>
// //                 </div>
// //                 <div className='col-sm-3'>
// //                 <input type='search' placeholder='Park name here' className="form-control me-2" value={movieName} onChange={e=>setmovieName(e.target.value)}/>
// //                 </div>
// //                 <div className='col-sm-3'>
// //                 <input type="date" className='form-control me-2' value={date} onChange={e=>setdate(e.target.value)} />
// //                 </div>                
// //                 <div className='col-sm-1'>
// //                 <button onClick={handleSearch} className="btn btn-warning bg-gradient text-white" type="submit"><i className="fa fa-search"></i></button>
// //                 </div>
// //                 </div>
// //             </form>
// //          </div>
// //     </div>
// //     <SearchResult data={data} />
// //     </>
// //   );
// // }
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import SearchResult from './SearchResult';
// import { apiUrls, baseUrl } from '../lib/constants';
// import Swal from 'sweetalert2';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import { Carousel } from 'react-bootstrap'; // Import Bootstrap Carousel

// export default function Carouselslide() {
//   const [halls, sethalls] = useState([]);
//   const [date, setdate] = useState('');
//   const [movieName, setmovieName] = useState('');
//   const [slot, setslot] = useState(0);
//   const [hallId, sethallId] = useState(0);
//   const [data, setData] = useState([]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (hallId || date || movieName || slot) {
//       axios.get(baseUrl + apiUrls.SEARCH_SHOWS + `?hallId=${hallId}&date=${date}&movieName=${movieName}&slot=${slot}`)
//         .then((resp) => {
//           setData(resp.data);
//         });
//     } else {
//       Swal.fire('Error', 'Please select any one parameter');
//     }
//   };

//   useEffect(() => {
//     axios.get(baseUrl + apiUrls.HALLS_URL)
//       .then(resp => {
//         sethalls(resp.data);
//       }).catch(err => {
//         console.log(err);
//       });

//     axios.get(baseUrl + apiUrls.TODAYS_SHOWS).then((resp) => {
//       setData(resp.data);
//     });
//   }, []);

//   return (
//     <>
//       <div className="mt-5">
//         {/* Carousel Section */}
//         <Carousel>
//           <Carousel.Item>
//             <img
//               className="d-block w-100 "
//               src="https://i0.wp.com/picjumbo.com/wp-content/uploads/different-used-cars-for-sale.jpg?w=600&quality=80"
//               alt="First slide"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://i0.wp.com/picjumbo.com/wp-content/uploads/cars-on-top-of-grosglockner-hochalpenstrase.jpg?w=600&quality=80g"
//               alt="Second slide"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://cdn.pixabay.com/photo/2016/03/22/00/45/multi-storey-car-park-1271919_640.jpg"
//               alt="Third slide"
//             />
//           </Carousel.Item>
//         </Carousel>

//         <div className="position-relative">
//           <form className="d-block mx-auto" style={{ width: "80%", position: "absolute", top: "44%", left: "50%", transform: "translate(-50%, -50%)" }}>
//             <div className='row'>
//               <div className='col-sm-3'>
//                 <select className="form-control me-2" value={slot} onChange={e => setslot(e.target.value)}>
//                   <option value=''>Select Time Slot</option>
//                   <option value='1'>00:00AM to 11:59PM</option>
//                 </select>
//               </div>
//               <div className='col-sm-2'>
//                 <select className="form-control me-2" value={hallId} onChange={e => sethallId(e.target.value)}>
//                   <option value="">Select Park Address</option>
//                   {halls.map(x => (
//                     <option key={x.hallId} value={x.hallId}>{x.hallDesc}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className='col-sm-3'>
//                 <input type='search' placeholder='Park name here' className="form-control me-2" value={movieName} onChange={e => setmovieName(e.target.value)} />
//               </div>
//               <div className='col-sm-3'>
//                 <input type="date" className='form-control me-2' value={date} onChange={e => setdate(e.target.value)} />
//               </div>
//               <div className='col-sm-1'>
//                 <button onClick={handleSearch} className="btn btn-warning bg-gradient text-white" type="submit">
//                   <i className="fa fa-search"></i>
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       <SearchResult data={data} />
//     </>
//   );
// }

import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult';
import { apiUrls, baseUrl } from '../lib/constants';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { Carousel } from 'react-bootstrap'; // Import Bootstrap Carousel

export default function Carouselslide() {
  const [halls, sethalls] = useState([]);
  const [date, setdate] = useState('');
  const [movieName, setmovieName] = useState('');
  const [slot, setslot] = useState(0);
  const [hallId, sethallId] = useState(0);
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (hallId || date || movieName || slot) {
      axios.get(baseUrl + apiUrls.SEARCH_SHOWS + `?hallId=${hallId}&date=${date}&movieName=${movieName}&slot=${slot}`)
        .then((resp) => {
          setData(resp.data);
        });
    } else {
      Swal.fire('Error', 'Please select any one parameter');
    }
  };

  useEffect(() => {
    axios.get(baseUrl + apiUrls.HALLS_URL)
      .then(resp => {
        sethalls(resp.data);
      }).catch(err => {
        console.log(err);
      });

    axios.get(baseUrl + apiUrls.TODAYS_SHOWS).then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <>
    
      <div className="mt-3  p-5 text-center">
        {/* Carousel Section */}
                
        <Carousel controls={false} indicators={false } interval={3000}>
          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/different-used-cars-for-sale.jpg?w=600&quality=80"
                alt="First slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/cars-on-top-of-grosglockner-hochalpenstrase.jpg?w=600&quality=80g"
                alt="Second slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2016/03/22/00/45/multi-storey-car-park-1271919_640.jpg"
                alt="Third slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1659647470940-f7806025008c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNhciUyMHBhcmt8ZW58MHx8MHx8fDA%3D"
                alt="First slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1654515989563-0a3bf0f6b616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMHBhcmtpbmd8ZW58MHx8MHx8fDA%3D"
                alt="First slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1679059361020-62d90fea6cbb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="First slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1506883968894-6e7738ccfc05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmtpbmd8ZW58MHx8MHx8fDA%3D"
                alt="First slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1445548671936-e1ff8a6a6b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhcmtpbmd8ZW58MHx8MHx8fDA%3D"
                alt="First slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhcmtpbmd8ZW58MHx8MHx8fDA%3D"
                alt="First slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1679059361020-62d90fea6cbb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="First slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={carouselImageStyle}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBhcmtpbmd8ZW58MHx8MHx8fDA%3D"
                alt="First slide"
                style={{imageStyle ,height:"500px"}}
              />
            </div>
          </Carousel.Item>
          
        
        <div className="position-relative mt-5 start-50 translate-middle">
          <form className="d-block mx-auto" style={formStyle}>
            <div className='row'>
              <div className='col-sm-3'>
                <select className="form-control me-2" value={slot} onChange={e => setslot(e.target.value)}>
                  <option value=''>Select Time Slot</option>
                  <option value='1'>00:00AM to 11:59PM</option>
                </select>
              </div>
              <div className='col-sm-2'>
                <select className="form-control me-2" value={hallId} onChange={e => sethallId(e.target.value)}>
                  <option value="">Select Park Address</option>
                  {halls.map(x => (
                    <option key={x.hallId} value={x.hallId}>{x.hallDesc}</option>
                  ))}
                </select>
              </div>
              <div className='col-sm-3'>
                <input type='search' placeholder='Park name here' className="form-control me-2" value={movieName} onChange={e => setmovieName(e.target.value)} />
              </div>
              <div className='col-sm-3'>
                <input type="date" className='form-control me-2' value={date} onChange={e => setdate(e.target.value)} />
              </div>
              <div className='col-sm-1'>
                <button onClick={handleSearch} className="btn btn-warning bg-gradient text-white" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
</Carousel>
      </div>
      <SearchResult data={data} />
    </>
  );
}

// Inline Styles for Full Screen Carousel
const carouselImageStyle = {
  position: 'relative',
  width: '100%',
  height: '500px', /* Full viewport height */
};

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

// Inline Styles for the Form
const formStyle = {
  width: '100%',
  position: 'absolute',
  top: '44%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};
