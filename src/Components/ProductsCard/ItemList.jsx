import { Link } from 'react-router-dom'



export function ItemList({ articulos }) {


    return (
        <>
            <div className='container'>
                {
                    articulos.map(articulos => <div key={articulos.id} className="card">
                        <div className="car-header">
                            {articulos.name}
                        </div>
                        <div className="car-body">
                            <img src={articulos.imagen} alt="foto" />
                        </div>
                        <div className='precio'>
                            $ {articulos.precio}
                        </div>
                        <div className="car-footer">
                            <Link to={`/detalle/${articulos.id}`} >
                                <button className="btn btn-outline-warning btn-block">Detalle del articulo</button>
                            </Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    )
}
