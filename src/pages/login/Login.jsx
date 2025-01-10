import React, { useState } from 'react'
import LoginStyles from './Login.module.css'
import logo from "../../assets/flairminds-logo.png"
import axios from 'axios'
const Login = () => {
  const [loginDetails,setLoginDetails]=useState({})
  const [incompleteDetails,setIncompleteDetails]=useState(false)
  const handleInputChange=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setLoginDetails({...loginDetails,[name]:value})
  }

  const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=loginDetails;
    if(!email||!password){
      setIncompleteDetails(true)
      return
    }
    try {
      const response=await axios.post("http://localhost:4000/auth/login",loginDetails,{headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:true})
      // console.log(response)
      window.location.href="/dashboard"
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div className={`${LoginStyles.login_page}`}>
      <div className={`${LoginStyles.login_form_container}`}>
          <img src={logo} alt="logo" width={200}/>
        <form action="" className={`${LoginStyles.login_form}`}>
            <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>handleInputChange(e)} type="email" name='email' id='email' placeholder='Enter Email' />
            </div>
            <div>
              <label htmlFor="password" >Password</label>
              <input onChange={(e)=>handleInputChange(e)} type="password" name="password" id="password" placeholder='Enter Password' />
            </div>
            <button onClick={(e)=>handleLogin(e)}>Login</button>
            <p>Don't have an account? <a href="/signup">signup</a></p>
        </form>
        </div>
    </div>
  )
}

export default Login