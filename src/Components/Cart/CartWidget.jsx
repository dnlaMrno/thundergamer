import { Link } from 'react-router-dom'
import '../Cart/CartWidget.css'


export function CartWidget() {
    return (
        <Link to='Cart'>
            <button className='boton'>
                <i className='fas fa-cart-arrow-down' />
            </button>
        </Link>
    )
}
