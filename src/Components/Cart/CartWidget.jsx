import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import { BsFillTrashFill } from "react-icons/bs"
import 'firebase/firestore'
import '../Cart/CartWidget.css'


export function CartWidget() {

    const { carro, borrarItem, sumaTotal } = useCartContext()

    function registrar() {
        alert('Debes Registrarte para Terminar la Compra')
    }

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
                            <p>$ {articulo.item.precio}</p>
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
                <div className='totalBotones'>
                    <h1 className='totalCompra'>Total de la compra = $ {sumaTotal()}</h1>
                    <Link to='/Home'>
                        <button className='seguir-compra'>seguir comprando</button>
                    </Link>
                    <Link to='/Formulario' >
                        <button className='seguir-compra' onClick={registrar} >siguiente</button>
                    </Link>
                </div>
            }
        </div>
    )

}
