import React from 'react'
import ProductDetail from '../components/ProductDetail'

export default function page({params}: string) {
    const {productId} = params
    return (
    <div>
      <ProductDetail  productId={productId}/>
    </div>
  )
}
