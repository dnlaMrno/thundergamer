import { createContext, useState, useContext } from 'react'




const cartContext = createContext()


export const useCartContext = () => {

    return (
        useContext(cartContext)
    )
}


export function CartContext({ childrend }) {



    const [cartList, setCartList] = useState([])

    function agregarItems(articuloNuevo) {
        setCartList([...cartList, articuloNuevo])
    }

    console.log(cartList);

    return (
        <>
            <cartContext.Provider value={{ cartList, agregarItems }}>
                {childrend}
            </cartContext.Provider>
        </>
    )
}

