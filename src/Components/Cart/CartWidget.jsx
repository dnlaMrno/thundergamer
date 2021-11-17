import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import { BsFillTrashFill } from "react-icons/bs"
import 'firebase/firestore'
import '../Cart/CartWidget.css'





export function CartWidget() {

    const { carro, borrarItem, sumaTotal, vaciarCarrito } = useCartContext()

    function registrar() {
        alert('Debes Registrarte para Terminar la Compra')
    }

    console.log(carro);

    return (

        <div className='content'>
            <div className='cartTitle'>
                <h1>productos agregados</h1>
            </div>
            <div className='box1'>
                {carro.length === 0 ?
                    <div>
                        <p className='cart-cargar'>no tienes ningun producto cargado...</p>
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
                            <div className='vaciar' onClick={() => borrarItem(articulo)}>
                                <BsFillTrashFill />
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            {carro.length === 0 ?
                <div>
                </div>
                :
                <div>
                    <h1 className='totalCompra'>Total de la compra = $ {sumaTotal()}</h1>
                    <div className='seguir-compra'>
                        <button className='btn-vaciarCompra' onClick={vaciarCarrito}>vaciar compra</button>
                        <Link to='/Home'>
                            <button >seguir comprando</button>
                        </Link>
                        <Link to='/Formulario' >
                            <button onClick={registrar} >siguiente</button>
                        </Link>
                    </div>
                </div>
            }
            <div>
            </div>
        </div>
    )
}

