import React from 'react'
import '../Container/ItemListContainer.css'
import { ItemCount } from '../Counter/ItemCount'
import { ItemList } from '../ProductsCard/ItemList'


export function ItemListContainer() {
  return (
    <>
      <div>
        <h1>Thunder Gamer</h1>
        <ItemList />
        <ItemCount />
      </div>
    </>
  )
};
