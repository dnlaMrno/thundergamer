import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import { BsFillTrashFill } from "react-icons/bs"
import '../Cart/CartWidget.css'


export function CartWidget() {

    const { carro, deleteItem, precioTotal } = useCartContext()


    return (
        <>

            <div className='cartTitle'>
                <h1>productos agregados</h1>
            </div>
            {carro.length === 0 ?
                <div>
                    <h1 className='title'>No tienes ningun producto cargado</h1>
                    <Link to='/Home'>
                        <button className='comprar'>ir a comprar</button>
                    </Link>
                </div>
                :
                carro.map(articulo => <div key={articulo.item.id}>
                    <div className='cartName'>
                        <p>{articulo.item.nombre}</p>
                    </div>
                    <div className='cartImg'>
                        <img src={articulo.item.imagen} alt="foto" />
                    </div>
                    <div className=''>
                        <h2>precio unitario</h2>
                        <p>{articulo.item.precio}</p>
                    </div>
                    <Link to='/Home'>
                        <button className='seguir-compra'>seguir comprando</button>
                    </Link>
                    <div className='vaciar' onClick={() => deleteItem(articulo)}>
                        <BsFillTrashFill />
                    </div>
                </div>
                )
            }
            <div className='totalCompra'>
                <h1>Total de la compra $ {precioTotal()}</h1>
            </div>
        </>
    )
}
