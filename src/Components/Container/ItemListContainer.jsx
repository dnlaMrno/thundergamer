import '../Container/ItemListContainer.css'
import { ItemList } from '../ProductsCard/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../ProductsCard/Mock'



export function ItemListContainer() {

  const [articulos, setArticulos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategory } = useParams()


  useEffect(() => {

    if (idCategory) {
      getFetch
        .then(res => {
          setArticulos(res.filter(art => art.categoria === idCategory))
          setLoading(false)
        })
    } else {
      getFetch
        .then(res => {
          setArticulos(res)
          setLoading(false)
        })
    }
  }, [idCategory])

  return (
    <>
      <div className='titulo'>
        <h1>Articulos</h1>
        {loading ?
          <h3>Cargando...</h3>
          :
          <ItemList articulos={articulos} />
        }
      </div>
    </>
  )
};
