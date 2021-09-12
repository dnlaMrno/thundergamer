import React from 'react';
import { useState, useEffect } from 'react';
import { Item } from './Item';

const articulos = [
    { id: 1, imagen: 'https://http2.mlstatic.com/D_NQ_NP_773182-MLA43960171984_102020-O.jpg', name: "Monitor" },
    { id: 2, imagen: 'https://lh3.googleusercontent.com/proxy/tEiUpVoS4IrqfqB8cVfUmccvzDB9H-uuOEVwmcJQDcYIhu9h3Hosuy86mEgL7pOdh6pSM7bKSInNb96PEuF9R0kpKfOPZkGYYx_i7wSRmK_ICFQOCfw1qcKu-gHtQhtbVU4CaLyG3Zt8QANQT2-s44F4', name: "Cpu" },
    { id: 3, imagen: 'https://m.media-amazon.com/images/I/71uMfiDAEbL._AC_SY450_.jpg', name: "Teclado" },
    { id: 4, imagen: 'https://m.media-amazon.com/images/I/7179atWcg7L._AC_SS450_.jpg', name: "audifonos" },
    { id: 5, imagen: 'https://http2.mlstatic.com/D_NQ_NP_673208-MLA46546681960_062021-O.jpg', name: "notebook" },
]

const tarea = new Promise((resolve) => {
    setTimeout(() => {
        resolve(articulos)
    }, 2000)
});


export function ItemList() {
    const [articulos, setArticulos] = useState([])


    useEffect(() => {
        tarea.then(res => setArticulos(res))
    }, [])

    return (
        <>
            <Item />


            {articulos.map(articulo => <div key={articulo.id} className="card w-50 mt-5 ">
                <div className="car-header">
                    {articulo.name}
                </div>

                <div className="car-body">
                    <img src={articulo.imagen} alt="foto" />
                </div>

                <div className="car-footer">
                    <button className="btn btn-outline-primary btn-block">Detalle del articulo</button>
                </div>

            </div>
            )}
        </>
    )
}
