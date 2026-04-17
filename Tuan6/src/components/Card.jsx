import React from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cardAtoms'


const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState)

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <div>
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart