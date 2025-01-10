import React,{useState} from 'react'
import RolesStyles from './Roles.module.css'
import { RiArrowDropDownLine } from "react-icons/ri";

const Roles = ({roles,select,selectedRole,activeDropdown,setActiveDropDown}) => {
  
      const selectRole=(roleId,rolename)=>{
        select({roleId,rolename})
        setActiveDropDown(false)
      }
  return (
    <div className="chatbot">
                    <div className={`${RolesStyles.chatbot_top} ${RolesStyles.no_select} ${activeDropdown?RolesStyles.active_chatbot_top:RolesStyles.inactive_chatbot_top}`} onClick={()=>setActiveDropDown(!activeDropdown)}> 
                        <p>{selectedRole?selectedRole.rolename:"Select Role"}</p>
                        <RiArrowDropDownLine className='dropdown_icon'/>
                    </div>
                    <div className="dropdown_container">
                    <div className={`chatbot_body ${activeDropdown?'active_dropdown':'inactive_dropdown'}`}>
                      <ul>
                        {(!roles||roles.length===0)&&<li className={`${RolesStyles.chatbot_list}`}>No roles</li>}
                        {roles?.map((role)=> 
                            <li key={role.id} className={`${RolesStyles.chatbot_list}`} onClick={()=>selectRole(role.id,role.rolename)}>{role.rolename}</li>
                        )}
                      </ul>
                    </div>
                    </div>
                  </div>
  )
}

export default Roles