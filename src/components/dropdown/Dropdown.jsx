import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import './Dropdown.css'
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/slices/userDetailsModalSlice';

const Dropdown = ({chatbot}) => {
    const [activeDropdown,setActiveDropDown]=useState(false)
     const dispatch=useDispatch()
    const toggleDropdown=()=>{
        setActiveDropDown(!activeDropdown)
      }
    console.log(chatbot)
  return (
    <>
              <div className="chatbot">
                <div className={`chatbot_top no_select ${activeDropdown?"active_chatbot_top":"inactive_chatbot_top"}`} onClick={()=>toggleDropdown()}> 
                    <p>Try Chatbots</p>
                    <RiArrowDropDownLine className='dropdown_icon'/>
                </div>
                <div className="dropdown_container">
                <div className={`chatbot_body ${activeDropdown?'active_dropdown':'inactive_dropdown'}`}>
                  <ul>
                    {chatbot.map((chat)=> 
                        <li key={chat.id} className='chatbot_list' onClick={()=>dispatch(toggleModal({interest:chat.text,redirectUrl:chat.link}))} >{chat.text}</li>
                    )}
                  </ul>
                </div>
                </div>
              </div>
    </>
  )
}

export default Dropdown