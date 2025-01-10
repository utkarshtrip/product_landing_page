import React, { useEffect, useState } from 'react'
import CreateUserStyles from './CreateUser.module.css'
import logo from "../../assets/flairminds-logo.png"
import axios from 'axios'
import Roles from '../../components/roles/Roles'
import { RxCross2 } from "react-icons/rx";
const CreateUser = () => {
  const [userDetails,setUserDetails]=useState({})
  const [incompleteDetails,setIncompleteDetails]=useState(false)
  const [passwordConfirmationError,setPasswordConfirmationError]=useState(false)
  const [alreadyExists,setAlreadyExists]=useState(false)
  const [created,setCreated]=useState(false)
  const [roles,setRoles]=useState(null)
  const [roleInput,setRoleInput]=useState({})
  const [selectedRole,setSelectedRole]=useState(null)
  const [addingRole,setAddingRole]=useState(false)
  const [activeDropdown,setActiveDropDown]=useState(false)
  const [roleAlreadyExists,setRoleAlreadyExists]=useState()
  console.log(selectedRole)
  useEffect(()=>{
    getRoles()
  },[])
  const handleInputChange=(e)=>{
    e.preventDefault()
    setIncompleteDetails(false)
    setPasswordConfirmationError(false)
    setAlreadyExists(false)
    const {name,value}=e.target
    setUserDetails({...userDetails,[name]:value})
  }
  const handleRoleInput=(e)=>{
    e.preventDefault();
    const {name,value}= e.target
    setRoleInput({...roleInput,[name]:value})
  }
  const createUser=async(e)=>{
    e.preventDefault()
    const {name,email,password,cpassword}=userDetails
    console.log({name,email,password,cpassword})
    if(!name||!email||!password||!cpassword||!selectedRole){
      setIncompleteDetails(true)
      return
    }
    if(password!==cpassword){
      setPasswordConfirmationError(true)
      return
    }
    try {
      userDetails.roleId=selectedRole?.roleId;
      console.log(userDetails)
      const response=await axios.post("http://localhost:4000/admin/create-user",userDetails,{withCredentials:true, headers:{Accept:'application/json',"Content-Type":"application/json"}})
      console.log(response.data)
      setCreated(true)
      setTimeout(() => {
        window.location.href='/dashboard'
      }, 1000);
    } catch (error) {
      if(error.status===409){
        setAlreadyExists(true)
      }
    }
  }
  const getRoles= async()=>{
    try {
      const response=await axios.get('http://localhost:4000/admin/get-roles',{withCredentials:true,headers:{Accept:"application/json","Content-Type":"application/json"}})
      setRoles(response.data)
    } catch (error) {
      console.log(error) 
    }
  }
  const createRole=async(e)=>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:4000/admin/create-role",roleInput,{withCredentials:true,headers:{Accept:"application/json","Content-Type":"application/json"}})
      await getRoles()
      setAddingRole(false)
    } catch (error) {
      error.status===409&&setRoleAlreadyExists(true)
     console.log(error) 
    }
  }
  return (
    <div className={`${CreateUserStyles.signup_page}`} onClick={()=>{activeDropdown&&setActiveDropDown(false)}}>
      <div className={`${CreateUserStyles.signup_form_container}`}>
          <img src={logo} alt="logo" width={200}/>
          {created?<>
            <div className={`${CreateUserStyles.created}`}></div>
          </>:<>
            <form action="" className={`${CreateUserStyles.signup_form}`}>
          {incompleteDetails&&<p className={`${CreateUserStyles.error_message}`}>All fields are mandatory.</p>}
          {alreadyExists&&<p className={`${CreateUserStyles.error_message}`}>A user with this email already exists.</p>}
          <div>
            <label htmlFor="name">Name</label>
            <input  onChange={(e)=>{handleInputChange(e)}} type="text" name='name' id='name' placeholder='Enter Name' />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>{handleInputChange(e)}}  type="email" name='email' id='email' placeholder='Enter Email' />
            </div>
            <div>
              <div className={`${CreateUserStyles.roles_container}`}>
            <Roles roles={roles} select={setSelectedRole} selectedRole={selectedRole} activeDropdown={activeDropdown} setActiveDropDown={setActiveDropDown}/>
            <button onClick={(e)=>{e.preventDefault();setAddingRole(true)}}>Add new role</button>
            </div>
            <input onChange={(e)=>{handleInputChange(e)}}  type='hidden' name='roleId' id='roleId' placeholder='Enter Role' />
            </div>
            <div>
              <label htmlFor="password" >Password</label>
              <input onChange={(e)=>{handleInputChange(e)}}  type="password" name="password" id="password" placeholder='Enter Password' />
            </div>
            <div>
              <label htmlFor="cpassword" >Confirm Password</label>
              <input className={`${passwordConfirmationError&&CreateUserStyles.input_error}`} onChange={(e)=>{handleInputChange(e)}}  type="password" name="cpassword" id="cpassword" placeholder='Confirm Password' />
            </div>
            <button onClick={(e)=>{createUser(e)}}>Create User</button>
            {/* <p>Already have an account? <a href="/login">login</a></p> */}
        </form>
          </>}
        </div>
        {addingRole&&<div className={`${CreateUserStyles.add_role_modal}`}>
          <div className={`${CreateUserStyles.add_role_inner_container}`}>
            <div className={`${CreateUserStyles.role_details}`}>
            <label htmlFor="rolename">Role</label>
            <input onChange={(e)=>{handleRoleInput(e)}} type="text" name="rolename" id="rolename" />
            {roleAlreadyExists&&<p className={`${CreateUserStyles.error_message}`}>This role already exists.</p>} 
            </div>
            <button onClick={(e)=>{createRole(e)}}>Create Role</button>
            <RxCross2 className={`${CreateUserStyles.collapse_modal_icon}`} onClick={()=>{setAddingRole(false)}}/>
          </div>
        </div>}
        
    </div>
  )
}

export default CreateUser