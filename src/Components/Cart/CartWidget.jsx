import { Link } from 'react-router-dom'
import '../Cart/CartWidget.css'
import { useCartContext } from '../Context/cartContext'
import { BsFillTrashFill } from "react-icons/bs"


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
            <div className='box1'>
                {
                    cart.map(cart => <div key={cart.nombre}>
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
                        <div className='vaciar' onClick={() => vaciarCarrito()}>
                            <BsFillTrashFill />
                        </div>
                    </div>
                    )
                }
            </div>
            <Link to='/Home'>
                <button className='seguir-compra'>seguir comprando</button>
            </Link>

        </>
    )
}
