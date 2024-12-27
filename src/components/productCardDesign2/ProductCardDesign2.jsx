import React from 'react'
import "./ProductCardDesign2.css"
import arrow from "../../assets/arrow-small-right.png"

const ProductCardDesign2 = ({prop}) => {
  return (
    <div className='design_2' style={{backgroundImage:`url(${prop.image})`}}>
        <div className="design_2_inner_container">
            <h1>{prop?.name}</h1>
            {prop?.detailsParagraphs?.map(praragraph=>(<p className='details_paragraph'>{praragraph}</p>))}
            {(prop?.subHeading) && <h3 className='card_subheading'>{prop.subHeading}</h3>}
            <ul className='card_list'>
                {prop?.list?.map(element=>(<li>{element}</li>))}
            </ul>
            <button className='design_2_button'>
                {prop?.buttonText?`${prop.buttonText.toUpperCase()}`:"VISIT PAGE"}
                <img src={arrow} alt="right arrow" />
            </button>
        </div>
    </div>
  )
}

export default ProductCardDesign2