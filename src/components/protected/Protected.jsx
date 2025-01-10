import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Protected = ({children,allowedRoles,superAdmin}) => {
    const [authenticated,setAuthenticated]=useState(false)
    useEffect(()=>{
        authenticate()
    },[])
    const authenticate=async()=>{
        try {
            const response=await axios.get('http://localhost:4000/auth/authenticate',{withCredentials:true,headers:{Accept:"application/json"}})
            if(response.data.superAdmin){
                setAuthenticated(true)
                return
            }
            if(allowedRoles.includes("all")||allowedRoles.includes(response.data.role.rolename)){
                setAuthenticated(true)
            }else{
                window.location.href='/dashboard/login'
            }
        } catch (error) {
            window.location.href='/dashboard/login'
            console.log(error)
        }
    }
  return ( 
    <>
    {authenticated&&<div>{children}</div>}
    </>
  )
}

export default Protected