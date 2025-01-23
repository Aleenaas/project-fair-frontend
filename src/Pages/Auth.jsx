import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, requestApi } from '../service/allApi'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { loginResponseContext } from '../context/ContextShare'


function Auth({ register }) {

  const {setLoginResponse} = useContext(loginResponseContext)

  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(userDetails);

  const handleRegister = async () => {
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info("Fill the form")
    }
    else {
      const result = await requestApi(userDetails)
      console.log(result);

      if (result.status == 200) {
        toast.success(`Registeration successfull`)

        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate("/login")

      } else if (result.status == 406) {
        toast.warning(`result.response.status`)
      }

      else {
        toast.error(`Something went wrong`)
      }

    }
  }

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info(`Fill the form completely`)
    } else {
      const result = await loginApi({ email, password })
      console.log(result);
      if (result.status == 200) {
        toast.success(`Login sucessfull`)
        setLoginResponse(true)
        sessionStorage.setItem("existingUsers", JSON.stringify(result.data.existingUsers))
        sessionStorage.setItem("token", result.data.token)

        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        setTimeout(() => {
          navigate("/")
        }, 2000)
      }
      else if (result.status == 406) {
        toast.warning(`result.response.status`)
      }
      else {
        toast.error(`something went wrong`)
      }
    }
  }

  return (
    <>
      <div>
        <div className="row my-5 container-fluid">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <p>← Back Home</p>
            <div className="row bg-success">
              <div className="col-md-6">
                <img src="https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-9.png" alt="" className='p-5' />
              </div>
              <div className="col-md-6 p-5 d-flex justify-content-center flex-column">
                <h4 className='text-white text-center'><FontAwesomeIcon icon={faStackOverflow} className='me-3' />Project Fair</h4>
                {!register ?
                  <p className='text-center mb-5'>Sign in to your account</p> :
                  <p className='text-center mb-5'>Sign up to your Account</p>}

                {register &&
                  <div className='mb-3'>
                    <input type="text" placeholder='UserName' className='p-2 form-control rounded-0' onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                  </div>}
                <div className='mb-3'>
                  <input type="text" placeholder='EmailID' className='p-2 form-control rounded-0' onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                </div>

                <div className='mb-3'>
                  <input type="password" placeholder='Password' className='p-2 form-control rounded-0' onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                </div>

                {!register ?
                  <div>
                    <button className='bg-warning btn mb-2 w-100 rounded-0' onClick={handleLogin}>Login</button>
                    <p>New User? Click here to <Link to={'/register'} className='text-warning'>Register</Link></p>
                  </div>
                  :
                  <div>
                    <button className='bg-warning btn mb-2 w-100 rounded-0' onClick={handleRegister}>Register</button>
                    <p>Already a User? Click here to <Link to={'/login'} className='text-warning'>Login</Link></p>
                  </div>}

              </div>
            </div>

          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <ToastContainer position='top-center' autoClose={2000} theme="colored" />

    </>
  )
}

export default Auth