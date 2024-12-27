import React from 'react'
import './UserDetailsModal.css'
import ContactForm from '../contactForm/ContactForm'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/slices/userDetailsModalSlice';
const UserDetailsModal = () => {
  const dispatch=useDispatch()
  return (
    <div className='user_details_modal'>
        <div className="user_details_modal_inner_container">
        <RxCross2 className='collapse_modal_icon' onClick={()=>dispatch(toggleModal({demo:null}))}/>
        <ContactForm/>
        </div>
    </div>
  )
}

export default UserDetailsModal