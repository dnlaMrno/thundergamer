import { createContext, useState, useContext } from "react";


const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

export const UseProvider = ({ children }) => {

    const [carro, setCarro] = useState([])



    function addItem(item, cantidad) {
        const index = carro.findIndex(i => i.item.id === item.id)
        if (index > -1) {
            const oldQuantity = carro[index].quantity
            carro.splice(index, 1)
            setCarro([...carro, { item, quantity: cantidad + oldQuantity }])
        }
        else {
            setCarro([...carro, { item, quantity: cantidad }])
        }
    }

    console.log(carro);

    const deleteItem = (item) => {
        const deleteArticulo = carro.filter((article) => article.item.id !== item.item.id);

        setCarro([...deleteArticulo])
    }

    const iconCarrito = () => {
        return carro.reduce((acum, cantidad) => acum + cantidad.quantity, 0)
    }

    const precioTotal = () => {
        return carro.reduce((acum, cantidad) => (acum + (cantidad.quantity * cantidad.item.precio)), 0)
    }

    return (

        <CartContext.Provider value={{
            carro,
            addItem,
            iconCarrito,
            deleteItem,
            precioTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}