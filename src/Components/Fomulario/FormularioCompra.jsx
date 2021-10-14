import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import { getFirestore } from '../Services/getFirebase'
import firebase from "firebase"
import 'firebase/firestore'




export function FormularioCompra() {

    const { carro, sumaTotal, vaciarCarrito } = useCartContext()

    const handleOnSubmit = (e) => {
        e.preventDefault()

        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date())

        orden.buyer = { name: 'dani', email: 'danip2824@gmail.com', telefono: '1133988' }

        orden.total = sumaTotal();

        orden.Items = carro.map(cartArt => {
            const id = cartArt.item.id;
            const nombre = cartArt.item.nombre;
            const precio = cartArt.item.precio * cartArt.quantity;

            return { id, nombre, precio }
        })

        const db = getFirestore()

        db.collection('ordenes').add(orden)
            .then(respuesta => console.log(respuesta))
    }

    return (

        <div>
            {carro.length === 0 ?
                <Link to='/'>
                    <button>volver al inicio</button>
                </Link>
                :
                carro.map(articulo => <div key={articulo.item.id}>
                    <div className='cartName'>
                        <p>{articulo.item.nombre}</p>
                    </div>
                    <div className='cartImg'>
                        <img src={articulo.item.imagen} alt="foto" />
                    </div>
                </div>
                )
            }


            {carro.length === 0 ?
                <p>no hay productos</p>
                :
                <div>
                    <button className='seguir-compra' onClick={vaciarCarrito}>vaciar orden</button>
                    <button className='seguir-compra' onClick={handleOnSubmit}>terminar compra</button>
                    <h1>Total de la compra $ {sumaTotal()}</h1>
                </div>
            }
        </div>
    )
}
