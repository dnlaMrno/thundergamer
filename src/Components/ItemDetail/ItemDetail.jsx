import { useCartContext } from '../Context/cartContext'
import { ItemCount } from '../Counter/ItemCount'
import { Link } from 'react-router-dom'
import { GrRewind } from "react-icons/gr"
import '../ItemDetail/ItemDetail.css'


export const ItemDetail = ({ articulo }) => {

    const { addItem } = useCartContext()


    const onAdd = (quantity) => {
        addItem(articulo, quantity)
    }


    return (

        <div>
            <Link to='/Home'>
                <span className='regresar'> <GrRewind /> </span>
            </Link>
            <div key={articulo.id} className='details'>
                <img className='big-img' src={articulo.imagen} alt="foto" />
                <div className='box'>
                    <div className='row'>
                        <h4>{articulo.nombre}</h4>
                        <span>$ {articulo.precio}</span>
                    </div>
                    <div className='contenido'>
                        <p>{articulo.descripcion}</p>
                    </div>
                </div>
            </div>

            <ItemCount initial={1} stock={8} onAdd={onAdd} />

        </div>
    )
}
