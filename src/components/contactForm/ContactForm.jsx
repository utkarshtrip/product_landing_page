import React, { useState } from 'react'
import "./ContactForm.css"
import axios from 'axios'
import { useSelector } from 'react-redux'

const ContactForm = () => {
  const {open,demo,redirectUrl}=useSelector(state=>state.userDetailsModal)
  const [userDetails,setUserDetails]=useState({demo:demo})
  const [submitResponse,setSubmitResponse]=useState()
  const handleInputChange=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setUserDetails({...userDetails,[name]:value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      // const response=await axios.post(`http://localhost:4000/contact`,userDetails,{headers:{Accept:'application/json'}})
      // console.log(response.data)
      // setSubmitResponse(response.data)
      window.location.href=redirectUrl
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='contact_form_container'>
      <p className='contact_form_heading'>let us know about you</p>
        <form action="" className='contact_form' >
          {open&&<><input type="hidden" name="demo" id='demo' value={demo} />
           {/* <input type="text" name='redirectUrl' id='redirectUrl' value={} /> */}
           </> }
          
            <input required={true} type="text" name='name' id='name' className=''  placeholder='Name' onChange={(e)=>handleInputChange(e)}/>
            <input required={true} type="text" name='phone' id='phone' className=''  placeholder='Contact Number' onChange={(e)=>handleInputChange(e)}/>
            <input required={true} type="email" name='email' id='email' className=''  placeholder='Email' onChange={(e)=>handleInputChange(e)}/>
            <input required={true} type="text" name='industry' id='industry' className=''  placeholder='Industry' onChange={(e)=>handleInputChange(e)}/>
            <input required={true} type="text" name='organization' id='organization' className='' placeholder='Organization' onChange={(e)=>handleInputChange(e)}/>
            <button type="submit" className='form_submit_button' onClick={(e)=>{handleSubmit(e)}} >Sumbit</button>
        </form>
        {submitResponse&&<h3 className='submit_message'>{submitResponse.message}</h3>}
    </div>
  )
}

export default ContactForm
