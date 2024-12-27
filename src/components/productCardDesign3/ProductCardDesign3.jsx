import React from 'react'
import "./ProductCardDesign3.css"
import arrow from "../../assets/arrow-small-right.png"

const ProductCardDesign3 = ({prop}) => {
  return (
    <div className='design_3' style={{backgroundImage:`url(${prop?.image})`}}>
        <div className="design_3_inner_container">
        <h1 className='design_3_heading'>{prop.name}</h1>
        <p className='details_paragraph'>{prop?.detailsParagraphs[0]}</p>
        <div className="button_container">
            <button className='design_3_button'>{prop?.buttonText}</button>
            <img src={arrow} alt="right arrow" className='arrow'/>
        </div>
        </div>
    </div>
  )
}

export default ProductCardDesign3