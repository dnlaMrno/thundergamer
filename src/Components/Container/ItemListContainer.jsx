import { ItemList } from '../ProductsCard/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { getFirestore } from '../Services/getFirebase'
import { SliderImage } from '../Slider/SliderImage'
import { SliderData } from '../Slider/SliderData'
import '../Container/ItemListContainer.css'
import { Anuncios } from '../Anuncios/Anuncios'



export function ItemListContainer() {

  const [articulos, setArticulos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategory } = useParams()


  useEffect(() => {

    // Esta es nuestra base de datos
    const dbQuery = getFirestore()

    const dbQueryFilter = idCategory ? dbQuery.collection('Items').where('categoriaID', '==', idCategory) : dbQuery.collection('Items')

    dbQueryFilter.get()
      .then(data => {
        setArticulos(data.docs.map(articulos => ({ id: articulos.id, ...articulos.data() })))
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [idCategory])

  return (
    <>


      <div className='contenedor'>
        <SliderImage slides={SliderData} />
        <div className='titulo'>
          <Anuncios />
          {loading ?
            <Spinner animation="grow" />
            :
            <ItemList articulos={articulos} />
          }
        </div>
      </div>
    </>
  )
}
