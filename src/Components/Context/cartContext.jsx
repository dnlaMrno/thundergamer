import { createContext, useState, useContext } from "react";


const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

export const UseProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const vaciarCarrito = () => {
        setCart([])
    }


    function addItem(item, cantidad) {
        setCart([...cart, { item: item, quantity: cantidad }])
    }
    console.log(cart);

    return (

        <CartContext.Provider value={{ cart, addItem, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}