import React from 'react'
import '../Cart/CartWidget.css'
import { FaCartArrowDown } from "react-icons/fa";


export function CartWidget () {
    return (
        <>
        <div className="cart-icon">
        <FaCartArrowDown/>
        </div>
        </>
    )
}
