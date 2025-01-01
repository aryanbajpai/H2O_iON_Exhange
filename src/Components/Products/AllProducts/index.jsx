import React from 'react'
import { CommonHeader, Navigation } from '../../../ReusableComponents'
import { Container } from '../../../Basics';
import ProductList from './ProductList';

const AllProducts = () => {
  return (
    <main>
      <CommonHeader
        head="All Products"
        tail='"Nothing in the world is more flexible and yielding then water"'
        // bgImg={aboutUsBg}
        headBanner={true}
      />
      <Navigation child="All Products" />

      <Container classname1={"my-24"}>
        <ProductList />
      </Container>


    </main>
  )
}

export default AllProducts;