import React from 'react'
import styled from 'styled-components'
import { Back, Header, MainC } from '../styles/CommonStyles'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img4 from '../assets/4.webp'

function ProductDescription() {
  return (
    <MainC>
      <Header>
        <Back>
          <i className='uil uil-angle-left' />
        </Back>
        <h1>Información del producto</h1>
      </Header>
      <SlideC>
        <img src={img1} alt='' />
        <img src={img2} alt='' />
        <img src={img3} alt='' />
        <img src={img4} alt='' />
      </SlideC>
      <div></div>
    </MainC>
  )
}

export default ProductDescription

const SlideC = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 250px;
  height: 300px;
  display: flex;
  border-radius: 18px;
  overflow: hidden;
  img {
    width: 0;
    flex-grow: 1;
    object-fit: cover;
    opacity: 0.8;
    transition: 0.5s ease;
    &:hover {
      cursor: pointer;
      width: 200px;
      opacity: 1;
      filter: contrast(110%);
    }
  }
`
