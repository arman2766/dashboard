import React from 'react'
import { colors } from '../../assets/style/colors'

const ProductIcon = ({ width = '24px', height = '24px', color = colors.lightGray }) => {
    return (

        <svg width={width} height={height} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM6 8C6 8.55 5.55 9 5 9C4.45 9 4 8.55 4 8V6H6V8ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM12 8C12 8.55 11.55 9 11 9C10.45 9 10 8.55 10 8V6H12V8Z" fill={color} />
        </svg>

    )
}

export default ProductIcon