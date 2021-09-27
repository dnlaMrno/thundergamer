import React from "react"
import { ItemCount } from '../Counter/ItemCount'
import '../ItemDetail/ItemDetail.css'


export const ItemDetail = ({ articulo }) => {

    const onAdd = () => {
        console.log(onAdd)
    }
    return (
        <>
            <div className='details'>
                <div>
                    <img className='big-img' src={articulo.imagen} alt="foto" />
                </div>

                <div className='box'>
                    <div className='row'>
                        <h4>{articulo.name}</h4>
                        <span>$ {articulo.precio}</span>
                    </div>
                    <div className='contenido'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae rerum laudantium soluta error laboriosam deserunt aut! Magni minus repellat iure optio itaque ipsa! Ipsum perspiciatis veritatis cum amet commodi aut.</p>
                    </div>
                </div>
            </div>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}
