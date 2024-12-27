import React from 'react'
import "./DesignNavigation.css"

const DesignNavigation = ({changeDesign,design}) => {
  return (
    <div className='design_navigation'>
        <ul>
            <li className={`${design==='design1'&&'active_li'}`} onClick={()=>changeDesign('design1')}>Design1</li>
            <li className={`${design==='design2'&&'active_li'}`} onClick={()=>changeDesign('design2')}>Design2</li>
            <li className={`${design==='design3'&&'active_li'}`} onClick={()=>changeDesign('design3')}>Design3</li>
            <li className={`${design==='design4'&&'active_li'}`} onClick={()=>changeDesign('design4')}>Design4</li>
        </ul>
    </div>
  )
}

export default DesignNavigation