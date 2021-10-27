import { useCartContext } from '../Context/cartContext'
import { ItemCount } from '../Counter/ItemCount'
import { Link } from 'react-router-dom'
import { FcUpLeft } from "react-icons/fc"
import '../ItemDetail/ItemDetail.css'


export const ItemDetail = ({ articulo }) => {

    const { addItem } = useCartContext()


    const onAdd = (quantity) => {
        addItem(articulo, quantity)
    }


    return (

        <div className='box2'>
            <Link to='/'>
                <div className='regresar'> <FcUpLeft /> </div>
            </Link>
            <div key={articulo.id} className='details'>
                <img className='big-img' src={articulo.imagen} alt="foto" />
                <div className='box'>
                    <div className='row'>
                        <h2>{articulo.nombre}</h2>
                        <span>$ {articulo.precio}</span>
                    </div>
                    <div className='contenido'>
                        <div className='contenido1'>
                            <p className='texto1'>{articulo.caracteristica1}</p>
                            <p className='texto2'>{articulo.caracteristica2}</p>
                            <p className='texto3'>{articulo.caracteristica3}</p>
                        </div>
                    </div>
                </div>
            </div>

            <ItemCount initial={1} stock={8} onAdd={onAdd} />

        </div>
    )
}
