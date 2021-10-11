import audifonos from '../../Assets/Audifonos.jpg'



const articulo =  
    {
        id: '1',
        imagen:audifonos,
        nombre: "Audifonos",
        categoria:'Accesorios',
        precio:2500,
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandaead ipisicing elit. Repudiandae adipisicing elit. Repudiandae',
    }

export const getFetchUno = new Promise((resolve) => {
        resolve(articulo)
    },)
