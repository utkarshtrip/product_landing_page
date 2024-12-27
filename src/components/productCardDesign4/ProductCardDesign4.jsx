import React from 'react'
import "./ProductCardDesign4.css"
import arrow from "../../assets/arrow-small-right.png"


const ProductCardDesign4 = ({prop}) => {
  return (
    <div className='design_4' >
            <img src={prop?.image} alt="product image" className='product_image' />
            <div className="design_4_details">
                <h1 className='design_4_heading'>{prop?.name}</h1>
                <p>{prop?.detailsParagraphs}</p>
                <div className="button_container">
                    <button className='design_4_button'>{prop?.buttonText}</button>
                    <img src={arrow} alt="right arrow" className='arrow'/>
                </div>
            </div>
            
        </div>
  )
}

export default ProductCardDesign4