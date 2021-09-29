import '../Cart/CartWidget.css'
import { useCartContext } from '../Contex/cartContext'


export function CartWidget() {

    const { cartList } = useCartContext()
    return (
        <>
            <div className='cart-agre'>
                <h4>productos agregados con exito</h4>
                {cartList.map(resp => <h2>{resp.name}</h2>)}
            </div>
        </>
    )
}
