import React from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cardAtoms'


const Product = () => {
  const [cart, setCart] = useRecoilState(cartState)

  const addToCart = () => {
    const newItem = {
      id: Date.now(),
      name: 'React Course',
      price: 10,
    }

    setCart([...cart, newItem])
  }

  return (
    <div>
      <h2>Product</h2>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Product