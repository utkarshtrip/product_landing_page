import React,{useState} from 'react'
import "./ProductCardDesign1.css"
import arrow from "../../assets/arrow-small-right.png"
import { useNavigate } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/slices/userDetailsModalSlice';

const ProductCardDesign1 = ({prop}) => {
 const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className='product_card'>
        <div className="product_card_innner_container">
          <div className="image_container">
            <div className="product_card_image" style={{backgroundImage:`url(${prop?.image})`}}></div>
          </div>
          <div className="details_container">
            <h1>{prop?.name.toUpperCase()}</h1>
            {prop?.detailsParagraphs?.map((paragraph,i)=>(<p key={i}>{paragraph}</p>))}
            {prop?.subheading}<h4>{prop.subHeading}</h4>
            <ul>
              {prop?.list?.map((element,i)=>(<li key={i}>{element}</li>))}
            </ul>
              {prop.buttonText&& <button onClick={()=>dispatch(toggleModal({interest:prop.name,redirectUrl:prop.projectLink}))} className='product_card_button'>
              {prop.buttonText.toUpperCase()}
              <img src={arrow} alt="arrow right" />
            </button>}
           
            {prop.chatbot&&<Dropdown chatbot={prop.chatbot}/>}
          </div>
        </div>
    </div>
  )
}

export default ProductCardDesign1