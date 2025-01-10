import React, { useEffect, useState } from 'react'
import DashboardStyles from './Dashboard.module.css'
import axios from 'axios'
const Dashboard = () => {
    const [visitors,setVisitors]=useState(null)
    console.log(visitors)
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers=async()=>{
        try {
            const response=await axios.get('http://localhost:4000/admin/get-visitors',{withCredentials:true,headers:{Accept:"application/json"}})
            console.log(response)
            setVisitors(response.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={`${DashboardStyles.dashboard_page}`}>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Organization</th>
                <th>Industry</th>
                <th>Last Visit</th>
                <th>No. of  Visits</th>
                <th>Intrests</th>
            </tr>
            </thead>
            <tbody>
                {visitors?.map((visitor)=>(<tr>
                <td>{visitor.name}</td>
                <td>{visitor.email}</td>
                <td>{visitor.phone}</td>
                <td>{visitor.organization}</td>
                <td>{visitor.industry}</td>
                <td>{visitor.lastVisit.split("T")[0]}</td>
                <td>{visitor.visits}</td>
                <td>{visitor.interests?.map((interest)=>`${interest}, `)}</td>
            </tr>))}
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard