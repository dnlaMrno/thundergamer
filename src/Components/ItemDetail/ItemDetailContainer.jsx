import { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom'
import { getFetchUno } from './itemDetailMock'



export const ItemDetailContainer = () => {

    const { idArticulo } = useParams()

    const [articulo, setArticulo] = useState([])



    useEffect(() => {
        getFetchUno
            .then(resp => setArticulo(resp))
    }, [idArticulo])


    return (
        <>

            <ItemDetail articulo={articulo} />
        </>
    )
}
