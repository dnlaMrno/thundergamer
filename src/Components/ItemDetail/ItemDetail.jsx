import { useCartContext } from '../Context/cartContext'
import { ItemCount } from '../Counter/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrRewind } from "react-icons/gr"
import '../ItemDetail/ItemDetail.css'



export const ItemDetail = ({ articulo }) => {

    const [handler, SetHandler] = useState(true)

    const handlerClick = () => {
        SetHandler(false);
    }

    const { addItem } = useCartContext()

    const onAdd = () => {
        addItem(articulo)
    }


    return (
        <>
            <Link to='/Home'>
                <span className='regresar'> <GrRewind /> </span>
            </Link>
            <div className='details'>
                <img className='big-img' src={articulo.imagen} alt="foto" />
                <div className='box'>
                    <div className='row'>
                        <h4>{articulo.nombre}</h4>
                        <span>$ {articulo.precio}</span>
                    </div>
                    <div className='contenido'>
                        <p>{articulo.descripcion}</p>
                    </div>
                    <div>
                        <span>{articulo.onAdd}</span>
                    </div>
                </div>
            </div>
            {
                handler
                    ?
                    <button onClick={handlerClick} className='agregar-cart'>agregar al carrito</button>
                    :
                    <Link to='/Cart'>
                        <button onClick={onAdd} className='agregar-cart'>terminar compra</button>
                    </Link>
            }
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}
