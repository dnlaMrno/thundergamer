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
        addItem({ articulo })
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
                    <div>
                        <Link to='/Cart'>
                            <button onClick={onAdd} className='agregar-cart'>terminar compra</button>
                        </Link>
                        <Link to='/Home'>
                            <button className='seguir-cart'>seguir comprando</button>
                        </Link>
                    </div>
            }
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
    )
}
