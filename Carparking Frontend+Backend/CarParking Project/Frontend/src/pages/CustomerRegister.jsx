// import React, { useState } from 'react'
// import axios from 'axios'
// import '../components/3.css'
// import { useNavigate } from 'react-router-dom'
// import swal from 'sweetalert2'
// import { apiUrls, baseUrl } from '../lib/constants'

// export default function CustomerRegister() {
//   return (
//     <div>
//       <CustomerTable />
//     </div>
//   )
// }

// function CustomerTable() {
//   const navigate = useNavigate()
//   const [fname, setfname] = useState('')
//   const [lname, setlname] = useState('')
//   const [email, setemail] = useState('')
//   const [phone, setphones] = useState('')
//   const [password, setpassword] = useState('')
//   const [carNumber,setcarnumber]=useState('')

//   const handleForm = (e) => {
//     e.preventDefault()
//     if (!validateEmail(email)) {
//       swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'please enter valid email address!',
//       })
//     }
//     else if (!validateFirstName(fname)) {
//       swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'please enter valid First name',
//       })
//     }
//     else if (!validateLastName(lname)) {
//       swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'please enter valid last name',
//       })
//     }
//      else if (!validateMobile(phone)) {
//       swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'please enter valid 10 digit Contact Number',
//       })
//     } else if (password === '') {
//       swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'please enter password',
//       })
//     } else if (password.length < 6 || password.length > 15) {
//       swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Password length is min 6 and max length is 15',
//       })
//     } 
//     else if (!validatecarnumber(carNumber) ) {
//       swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'carNumber must be 10 digits',
//       })
//     } 
//     else {
//       submit()
//     }
//   }
//   const submit = async () => {
//     await axios
//       .post(baseUrl+apiUrls.REGISTER_URL, {
//         userName: fname + ' ' + lname,
//         email: email,
//         password: password,
//         mobile: phone,
//         carNumber:carNumber,
//       })
//       .then((resp) => {
//         swal.fire({
//           position: 'center',
//           icon: 'success',
//           title: 'Registered Successfully',
//           showConfirmButton: false,
//           timer: 1500,
//         })
//         navigate('/login')
//       })
//       .catch((error) => {
//         swal.fire({
//           position: 'center',
//           icon: 'error',
//           title: error.response.data,
//           showConfirmButton: false,
//           timer: 1500,
//         })
//       })
//   }
  
//   const validateFirstName = (fname) => {
//     // Regex for first name validation
//     const regex = /^[a-zA-Z]+$/;
//     return regex.test(fname);
//   };

//   const validateLastName = (lname) => {
//     // Regex for last name validation
//     const regex = /^[a-zA-Z]+$/;
//     return regex.test(lname);
//   };

//   const validateEmail = (email) => {
//     // Regex for email validation
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };
//   const validateMobile = (mobile) => {
//     // Regex for 10-digit mobile number validation
//     const regex = /^\d{10}$/;
//     return regex.test(mobile);
//   };

//   const validatecarnumber = (carNumber) => {
    
//     const regex = /^\d{10}$/;
//     return regex.test(carNumber);
//   };
  
//   return (
//     <div className='container' style={{ width: '70%', marginTop: '100px' }}>
//       <div className='title text-center'>User Registration Form</div>
//       <form>
//         <div className='user-details'>
//           <div className='input-box'>
//             <span className='details'>First Name</span>
//             <input
//               type='text'
//               placeholder='Enter first name'
//               value={fname}
//               onChange={(e) => setfname(e.target.value)}
//               required
//             />
//           </div>
//           <div className='input-box'>
//             <span className='details'>Last Name</span>
//             <input
//               type='text'
//               placeholder='Enter last name'
//               value={lname}
//               onChange={(e) => setlname(e.target.value)}
//               required
//             />
//           </div>
//           <div className='input-box'>
//             <span className='details'>Mobile Number</span>
//             <input
//               type='text'
//               maxLength={10}
//               minLength={10}
//               placeholder='Enter your number'
//               id='mobileNo'
//               value={phone}
//               onChange={(e) => setphones(e.target.value)}
//               required
//             />
//           </div>

//           <div className='input-box'>
//             <span className='details'>Email</span>
//             <input
//               type='email'
//               placeholder='Enter your email'
//               id='emailid'
//               value={email}
//               onChange={(e) => setemail(e.target.value)}
//               required
//             />
//           </div>
//           <div className='input-box'>
//             <span className='details'>Password</span>
//             <input
//               type='password'
//               placeholder='Enter your password'
//               id='password'
//               value={password}
//               onChange={(e) => setpassword(e.target.value)}
//               required
//             />
//           </div>
          
//           <div className='input-box'>
//             <span className='details'>CarNumber</span>
//             <input
//               type='text'
//               maxLength={10}
//               minLength={10}
//               placeholder='Enter your carNumber'
//               id='carNumber'
//               value={carNumber}
//               onChange={(e) => setcarnumber(e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div className='button' style={{ margin: 'auto' }}>
//           <input
//             type='submit'
//             className='bg-info bg-gradient'
//             value='Submit'
//             onClick={handleForm}
//           />
//         </div>
//       </form>
//     </div>
//   )
// }
import React, { useState } from 'react'
import axios from 'axios'
import '../components/3.css'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert2'
import { apiUrls, baseUrl } from '../lib/constants'

export default function CustomerRegister() {
  return (
    <div>
      <CustomerTable />
    </div>
  )
}

function CustomerTable() {
  const navigate = useNavigate()
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphones] = useState('')
  const [password, setpassword] = useState('')
  const [carNumber, setcarnumber] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address!',
      })
    } else if (!validateFirstName(fname)) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid first name',
      })
    } else if (!validateLastName(lname)) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid last name',
      })
    } else if (!validateMobile(phone)) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid 10-digit contact number',
      })
    } else if (password === '') {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a password',
      })
    } else if (password.length < 6 || password.length > 15) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password length must be between 6 and 15 characters',
      })
    } else if (!validatecarnumber(carNumber)) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Car number must be 10 digits',
      })
    } else {
      submit()
    }
  }

  const submit = async () => {
    try {
      const response = await axios.post(baseUrl + apiUrls.REGISTER_URL, {
        userName: fname + ' ' + lname,
        email: email,
        password: password,
        mobile: phone,
        carNumber: carNumber,
      })

      swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registered Successfully',
        showConfirmButton: false,
        timer: 1500,
      })
      navigate('/login')
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred during registration'
      swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Registration Failed',
        text: errorMessage,
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  const validateFirstName = (fname) => /^[a-zA-Z]+$/.test(fname)
  const validateLastName = (lname) => /^[a-zA-Z]+$/.test(lname)
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const validateMobile = (mobile) => /^\d{10}$/.test(mobile)
  const validatecarnumber = (carNumber) => /^[A-Z]{2}[0-9]{2}[A-Z]{0,2}[0-9]{4}$/.test(carNumber);


  return (
    <div className='container' style={{ width: '70%', marginTop: '100px' }}>
      <div className='title text-center'>User Registration Form</div>
      <form>
        <div className='user-details'>
          <div className='input-box'>
            <span className='details'>First Name</span>
            <input
              type='text'
              placeholder='Enter first name'
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              required
            />
          </div>
          <div className='input-box'>
            <span className='details'>Last Name</span>
            <input
              type='text'
              placeholder='Enter last name'
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              required
            />
          </div>
          <div className='input-box'>
            <span className='details'>Mobile Number</span>
            <input
              type='text'
              maxLength={10}
              minLength={10}
              placeholder='Enter your number'
              id='mobileNo'
              value={phone}
              onChange={(e) => setphones(e.target.value)}
              required
            />
          </div>

          <div className='input-box'>
            <span className='details'>Email</span>
            <input
              type='email'
              placeholder='Enter your email'
              id='emailid'
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className='input-box'>
            <span className='details'>Password</span>
            <input
              type='password'
              placeholder='Enter your password'
              id='password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className='input-box'>
            <span className='details'>Car Number</span>
            <input
              type='text'
              maxLength={10}
              minLength={10}
              placeholder='eg. MH11AB1234'
              id='carNumber'
              value={carNumber}
              onChange={(e) => setcarnumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='button' style={{ margin: 'auto' }}>
          <input
            type='submit'
            className='bg-info bg-gradient'
            value='Submit'
            onClick={handleForm}
          />
        </div>
      </form>
    </div>
  )
}
