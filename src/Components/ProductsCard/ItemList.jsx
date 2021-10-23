import { Link } from 'react-router-dom'
import '../ProductsCard/ItemList.css'



export function ItemList({ articulos }) {

    return (

        <div>
            <p className='subTituloDos'>nuestros productos</p>

            <div className='container'>
                {
                    articulos.map(articulos => <div key={articulos.id} className="card">
                        <div className="car-header">
                            {articulos.nombre}
                        </div>
                        <div className="car-body">
                            <img src={articulos.imagen} alt="foto" />
                        </div>
                        <div className='precio'>
                            $ {articulos.precio}
                        </div>
                        <div className="car-footer">
                            <Link to={`/detalle/${articulos.id}`}>
                                <button className="btn btn-outline-warning btn-block">Detalle</button>
                            </Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}
