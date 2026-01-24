import React from 'react'
import './Button.css'
const Button = ({ type }) => {
    return (
        <div>
            <button className={type}>Button</button>
        </div>
    )
}

export default Button