import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import { BsFillTrashFill } from "react-icons/bs"
import '../Cart/CartWidget.css'


export function CartWidget({ condition = true }) {

    const { cart, vaciarCarrito } = useCartContext()

    //   if (!condition) {
    //      return <h2>No puede ver el carrito</h2>
    // }

    return (
        <>

            <div className='cartTitle'>
                <h1>productos agregados</h1>
            </div>
            {cart.length === 0 ?
                <div>
                    <h1 className='title'>No tienes ningun producto cargado</h1>
                    <Link to='/Home'>
                        <button className='comprar'>ir a comprar</button>
                    </Link>
                </div>
                :
                cart.map(cart => <div key={cart.id}>
                    <div className='cartName'>
                        <p>{cart.nombre}</p>
                    </div>
                    <div className='cartImg'>
                        <img src={cart.imagen} alt="foto" />
                    </div>
                    <div className='cartBox'>
                        <div className='cartDetail'>
                            <p>{cart.descripcion}</p>
                        </div>
                        <div className='cartPrice'>
                            <p> $ {cart.precio}</p>
                        </div>
                    </div>
                    <Link to='/Home'>
                        <button className='seguir-compra'>seguir comprando</button>
                    </Link>
                    <div className='vaciar' onClick={() => vaciarCarrito()}>
                        <BsFillTrashFill />
                    </div>
                </div>
                )
            }
        </>
    )
}
