import React from 'react'
import ProductCardDesign1 from '../components/productCardDesign1/ProductCardDesign1'
import { products } from '../data/productsData'
const ProductsIdea1 = () => {
  return (
    <div className='products_page'>
      {products?.map((product,index)=>(<ProductCardDesign1 prop={product} key={index}/>))}
    </div>
  )
}

export default ProductsIdea1