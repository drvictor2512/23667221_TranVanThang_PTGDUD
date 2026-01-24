import React from 'react'
import './ProductCard.css'
const ProductCard = () => {
    return (
        <div className='product-card'>
            <img src="https://jola.vn/cdn/720/Product/dnqMNlWaf/c68d8b7c62e782f2c4de40e8de5e811fjpg.jpg" alt="" />
            <h1>Tai nghe Basus</h1>
            <p>Giá: 250.000 VND</p>
            <button>Add to cart</button>
        </div>
    )
}

export default ProductCard