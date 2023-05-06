import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UilCheck, UilAngleLeft } from '@iconscout/react-unicons'
import { insertProduct, uploadImages } from '../firebase/services'
import {
  Back,
  Button,
  Input,
  InputsC,
  Label,
  MainC
} from '../styles/CommonStyles'

function NewProduct({ product, setProduct }) {
  const inputRef = useRef()
  const navigate = useNavigate()
  const [imagesUrls, setImagesUrls] = useState(null)

  const handleImagesInputChange = async (e) => {
    const urls = []
    const files = e.target.files
    for (const item of files) {
      const url = await uploadImages(item)
      urls.push(url)
    }
    setImagesUrls(urls)
    product.images_urls = urls
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProduct((prevState) => ({
      ...prevState,
      [name]: value
    }))
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
    addProduct()
    setProduct({
      title: '',
      description: '',
      category: '',
      discounted_price: 0,
      normal_price: 0,
      product_details: '',
      images_urls: ''
    })
    setImagesUrls(null)
    inputRef.current.value = ''
  }
  return (
    <MainC>
      <Header>
        <Back onClick={() => navigate('/catalog')}>
          <UilAngleLeft size='38' />
        </Back>
        <h2>Datos del producto</h2>
      </Header>
      <FormC onSubmit={handleSubmit}>
        <section>
          <InputsC>
            <Label htmlFor='title'>Título</Label>
            <Input
              required
              type='text'
              name='title'
              value={product.title}
              onChange={handleInputChange}
              placeholder='Ingrese el título del producto'
            />
          </InputsC>
          <InputsC>
            <Label htmlFor='description'>Descripción</Label>
            <Input
              required
              type='text'
              name='description'
              value={product.description}
              onChange={handleInputChange}
              placeholder='Ingrese una descripción corta'
            />
          </InputsC>
          <InputsC>
            <Label htmlFor='category'>Categoría</Label>
            <Input
              required
              type='text'
              name='category'
              value={product.category}
              onChange={handleInputChange}
              placeholder='hogar, ropa, maquillaje, etc'
            />
          </InputsC>
          <InputsNumC>
            <InputsC>
              <Label htmlFor='discounted_price'>Precio con descuento</Label>
              <Input
                required
                type='number'
                name='discounted_price'
                value={product.discounted_price}
                onChange={handleInputChange}
                placeholder='0'
              />
            </InputsC>
            <InputsC>
              <Label htmlFor='normal_price'>Precio normal</Label>
              <Input
                required
                type='number'
                name='normal_price'
                value={product.normal_price}
                onChange={handleInputChange}
                placeholder='0'
              />
            </InputsC>
          </InputsNumC>
        </section>
        <section>
          <InputsC>
            <Label htmlFor='product_details'>Detalles del producto</Label>
            <Textarea
              required
              name='product_details'
              value={product.product_details}
              onChange={handleInputChange}
              placeholder='Ingrese todos los detalles de producto'
            />
          </InputsC>
          <InputsC>
            <Label htmlFor='add_images'>Agregar imagenes</Label>
            <Input
              type='file'
              name='add_images'
              accept='image'
              ref={inputRef}
              onChange={handleImagesInputChange}
              multiple
            />
            {imagesUrls && <Check size='48' />}
          </InputsC>
        </section>
        <div>
          <Button type='submit'>Subir Producto</Button>
        </div>
      </FormC>
    </MainC>
  )
}

export default NewProduct

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const FormC = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  div {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding: 2rem 4rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 2rem;
    div {
      width: 100%;
      button {
        width: auto;
      }
    }
    section {
      flex: 1;
    }
  }
`
const InputsNumC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  input {
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    gap: 2rem;
  }
`
const Textarea = styled.textarea`
  background-color: ${(props) => props.theme.white};
  border-radius: 18px;
  border: none;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.pink_400};
  min-height: 14rem;
  resize: none;
  font-size: ${(props) => props.theme.font_16};
  &::placeholder {
    color: ${(props) => props.theme.gray_400};
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: ${(props) => props.theme.font_18};
  }
`
const Check = styled(UilCheck)`
  margin-left: auto;
  fill: ${(props) => props.theme.pink_400};
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0.75rem;
    right: 1rem;
  }
`
