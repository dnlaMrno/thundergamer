import { ItemList } from '../ProductsCard/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { getFirestore } from '../Services/getFirebase'
import '../Container/ItemListContainer.css'



export function ItemListContainer() {

  const [articulos, setArticulos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategory } = useParams()


  useEffect(() => {

    // Esta es nuestra base de datos
    const dbQuery = getFirestore()
    dbQuery.collection('Items').get()
      .then(data => {
        setArticulos(data.docs.map(articulos => ({ id: articulos.id, ...articulos.data() })))
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  }, [idCategory])
  return (

    <div className='titulo'>
      {loading ?
        <Spinner animation="grow" />
        :
        <ItemList articulos={articulos} />
      }
    </div>

  )
};
