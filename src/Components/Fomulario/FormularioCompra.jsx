import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import { getFirestore } from '../Services/getFirebase'
import firebase from "firebase"
import { useState } from 'react'
import '../Fomulario/FormularioCompra.css'
import 'firebase/firestore'


export function FormularioCompra() {

    const { cantidadCarrito } = useCartContext()
    const { carro, sumaTotal, vaciarCarrito } = useCartContext()
    const [formData, setFormData] = useState(initialFormData)

    const handleOnSubmit = (e) => {
        e.preventDefault()

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = formData
        orden.total = sumaTotal();
        orden.Items = carro.map(cartArt => {
            const id = cartArt.item.id;
            const nombre = cartArt.item.nombre;
            const stock = cartArt.item.stock;
            const precio = cartArt.item.precio * cartArt.quantity;
            return { id, nombre, precio, stock }
        })
        const db = getFirestore()
        db.collection('ordenes').add(orden)
            .catch(err => console.log(err))
            .finally(() => setFormData(initialFormData))
    }

    function handleOnChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='box3'>
            <p className='titulo4'>
                registrate para terminar compra
            </p>
            <div className='product-content'>
                <div className='recuadro'>
                    {carro.length === 0 ?
                        <div>
                            <p>no hay productos</p>
                            <Link to='/'>
                                <button>volver al inicio</button>
                            </Link>
                        </div>
                        :
                        <div className='user-detail'>
                            <div className='input-box'>
                                <form>
                                    <span>nombre*</span>
                                    <input required
                                        onChange={handleOnChange}
                                        type='text'
                                        placeholder='Ingrese Nombre'
                                        name='nombre'
                                        value={formData.nombre}
                                    />
                                    <span>apellido*</span>
                                    <input required
                                        onChange={handleOnChange}
                                        type='text'
                                        placeholder='Ingrese Apellido'
                                        name='apellido'
                                        value={formData.apellido}
                                    />
                                    <span>contraseña*</span>
                                    <input required
                                        onChange={handleOnChange}
                                        type='password'
                                        placeholder='Ingrese Contraseña'
                                        name='contraseña'
                                        value={formData.contraseña}
                                    />
                                    <span>email*</span>
                                    <input required
                                        onChange={handleOnChange}
                                        type='email'
                                        placeholder='Ingrese email'
                                        name='correo'
                                        value={formData.correo}
                                    />
                                    <span>telefono</span>
                                    <input
                                        onChange={handleOnChange}
                                        type='text'
                                        placeholder='ingrese Telefono'
                                        name='telefono'
                                        value={formData.telefono}
                                    />
                                </form>
                                <div className='btn-contenedor'>
                                    <button className='btn-vaciar' onSubmit={handleOnSubmit}>terminar compra</button>
                                    <button className='btn-vaciar2' onClick={vaciarCarrito}>cancelar compra</button>
                                </div>
                                <div className='cargado'>
                                    <p>productos cargados = {cantidadCarrito()}</p>
                                    <p>Total de la compra = $ {sumaTotal()}</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
const initialFormData = {
    nombre: '',
    apellido: '',
    contraseña: '',
    correo: '',
    telefono: ''
}
