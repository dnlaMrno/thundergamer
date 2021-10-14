import { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom'
import { getFirestore } from '../Services/getFirebase';
import Spinner from 'react-bootstrap/Spinner'
import '../ItemDetail/ItemDetail.css'



export const ItemDetailContainer = () => {

    const [articulo, setArticulo] = useState({})
    const [loading, setLoading] = useState(true)
    const { idArticulo } = useParams()

    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('Items').doc(idArticulo).get()
            .then((docu) => setArticulo({ id: docu.id, ...docu.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [idArticulo])

    return (

        <div>
            {loading ?
                <Spinner className='loading' animation="grow" />
                :
                <ItemDetail articulo={articulo} />
            }
        </div>
    )
}