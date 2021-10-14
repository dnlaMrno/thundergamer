import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import { BsFillTrashFill } from "react-icons/bs"
import 'firebase/firestore'
import '../Cart/CartWidget.css'


export function CartWidget() {

    const { carro, borrarItem, sumaTotal } = useCartContext()


    return (

        <div>
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
                    <div className='cartPrice'>
                        <p>{articulo.item.precio}</p>
                    </div>
                    <div className='vaciar' onClick={() => borrarItem(articulo)}>
                        <BsFillTrashFill />
                    </div>
                </div>
                )
            }

            {carro.length === 0 ?
                <div>
                </div>
                :
                <div>
                    <Link to='/Home'>
                        <button className='seguir-compra'>seguir comprando</button>
                    </Link>
                    <Link to='/Formulario'>
                        <button className='seguir-compra'>siguiente</button>
                    </Link>
                    <h1 className='totalCompra'>Total de la compra $ {sumaTotal()}</h1>
                </div>
            }

        </div>
    )
}
