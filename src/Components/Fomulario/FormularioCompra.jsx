import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import { getFirestore } from '../Services/getFirebase'
import firebase from "firebase"
import { useState } from 'react'
import '../Fomulario/FormularioCompra.css'
import 'firebase/firestore'





export function FormularioCompra() {

    const { carro, sumaTotal, vaciarCarrito } = useCartContext()

    const [data, setData] = useState(initial)


    const handleOnSubmit = (e) => {
        e.preventDefault()

        let orden = {}

        orden.date = firebase.firestore.Timestamp.date(new Date())

        orden.buyer = data

        orden.total = sumaTotal();

        orden.Items = carro.map(cartArt => {
            const id = cartArt.item.id;
            const nombre = cartArt.item.nombre;
            const precio = cartArt.item.precio * cartArt.quantity;

            return { id, nombre, precio }
        })

        const db = getFirestore()

        db.collection('ordenes').add(orden)
            .finally(() => setData(initial))

    }

    function handleOnChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log(data);
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
                    <div className='cartPrice'>
                        <p>{articulo.item.precio}</p>
                    </div>
                </div>

                )

            }

            {carro.length === 0 ?
                <p>no hay productos</p>
                :
                <div>
                    <form
                        onChange={handleOnChange}
                    >
                        <input
                            type='text'
                            placeholder='ingrese nombre'
                            name='nombre'
                            value={data.nombre}
                        />

                        <input
                            type='email'
                            placeholder='ingrese su correo'
                            name='correo'
                            value={data.correo}
                        />

                        <input
                            type='text'
                            placeholder='ingrese telefono'
                            name='telefono'
                            value={data.telefono}
                        />
                    </form>
                    <button className='btn-vaciar' onClick={vaciarCarrito}>vaciar orden</button>
                    <button className='btn-vaciar' onClick={handleOnSubmit}>terminar compra</button>
                    <h1>Total de la compra $ {sumaTotal()}</h1>
                </div>
            }
        </div>
    )
}

const initial = {
    nombre: '',
    correo: '',
    telefono: ''
}
