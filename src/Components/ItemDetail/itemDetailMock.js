import audifonos from '../../Assets/Audifonos.jpg'


const articulo = 
    {
        id: '1',
        imagen: audifonos,
        name: "Audifonos",
        categoria:'Accesorios',
        precio:2500
    }

export const getFetchUno = new Promise((resolve) => {
    setTimeout(() => {
        resolve(articulo)
    }, 2000)
});
