import React, { createContext, useState } from 'react'
export const EditProductConext = createContext()
function EditProduct({ children }) {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
    discounted_price: 0,
    normal_price: 0,
    product_details: '',
    images_urls: ''
  })
  const [submitActive, setSubmitActive] = useState(false)

  return (
    <EditProductConext.Provider
      value={{ product, setProduct, submitActive, setSubmitActive }}
    >
      {children}
    </EditProductConext.Provider>
  )
}

export default EditProduct
