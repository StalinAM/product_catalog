import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UilAngleLeft } from '@iconscout/react-unicons'
import { insertProduct, editProduct } from '../firebase/services'
import { Back, MainC } from '../styles/CommonStyles'
import Form from '../components/Form'
import { EditProductConext } from '../context/EditProduct'

function NewProduct() {
  const navigate = useNavigate()
  const [imagesUrls, setImagesUrls] = useState(null)
  const { product, submitActive } = useContext(EditProductConext)

  const updateProduct = async () => {
    if (
      product.title &&
      product.description &&
      product.category &&
      product.discounted_price &&
      product.normal_price &&
      product.product_details &&
      product.images_urls
    ) {
      await editProduct(docId, { ...product })
    }
  }
  const addProduct = async () => {
    if (
      product.title &&
      product.description &&
      product.category &&
      product.discounted_price &&
      product.normal_price &&
      product.product_details &&
      product.images_urls
    ) {
      await insertProduct({ ...product })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    updateProduct()
    setImagesUrls(null)
    inputRef.current.value = ''
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    addProduct()
    setImagesUrls(null)
    inputRef.current.value = ''
  }
  return (
    <MainC>
      <Header>
        <Back onClick={() => navigate('/catalog')}>
          <UilAngleLeft size='38' />
        </Back>
        <h2>{submitActive ? 'Actualizar producto' : 'Nuevo producto'}</h2>
      </Header>
      <Form
        handleSubmit={submitActive ? handleUpdate : handleSubmit}
        name={submitActive ? 'Actualizar' : 'Subir'}
        imagesUrls={imagesUrls}
        setImagesUrls={setImagesUrls}
      />
    </MainC>
  )
}

export default NewProduct

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
