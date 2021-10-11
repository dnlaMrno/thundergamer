import { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom'
import { getFetchUno } from './itemDetailMock'
import Spinner from 'react-bootstrap/Spinner'
import '../ItemDetail/ItemDetail.css'



export const ItemDetailContainer = () => {

    const { idArticulo } = useParams()
    const [articulo, setArticulo] = useState({})

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            getFetchUno
                .then(resp => setArticulo(resp))
                .finally(() => setLoading(false))
        }, 2000)
    },
        [idArticulo])

    return (
        <>
            {loading ?
                <Spinner className='loading' animation="grow" />
                :
                <ItemDetail articulo={articulo} />
            }
        </>
    )
}