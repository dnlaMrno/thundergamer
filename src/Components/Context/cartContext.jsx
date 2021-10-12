import { createContext, useState, useContext } from "react";


const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

export const UseProvider = ({ children }) => {

    const [carro, setCarro] = useState([])

    const vaciarCarrito = () => {
        setCarro([])
    }

    function addItem(item, quantity) {
        setCarro([...carro, { item, quantity }])
    }
    console.log(carro);

    const iconCarrito = () => {
        return carro.reduce((acum, cantidad) => acum + cantidad.quantity, 0)
    }

    return (

        <CartContext.Provider value={{ carro, addItem, vaciarCarrito, iconCarrito }}>
            {children}
        </CartContext.Provider>
    )
}