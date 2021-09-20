import audifonos from '../../Assets/Audifonos.jpg'
import gabinete from '../../Assets/Gabinete.jpg'
import microfono from '../../Assets/Microfono.jpg'
import monitor from '../../Assets/Monitor.png'
import mouse from '../../Assets/Mouse.png'
import padmouse from '../../Assets/PadMouse.jpg'
import silla from '../../Assets/SillaGamer.png'
import teclado from '../../Assets/Teclado.jpg'
import notebook from '../../Assets/Notebook.jpg'



const articulos = [
    {
        id: '1',
        imagen: audifonos,
        name: "Audifonos",
        categoria:'Accesorios',
        precio:2500
    },
    {
        id: '2',
        imagen: gabinete,
        name: "Gabinete",
        categoria:'Accesorios',
        precio:3000
    },
    {
        id: '3',
        imagen: microfono,
        name: "Microfono",
        categoria:'Accesorios',
        precio:1800
    },
    {
        id: '4',
        imagen: monitor,
        name: "Monitor",
        categoria:'Equipos',
        precio:8000
    },
    {
        id: '5',
        imagen: mouse,
        name: "Mouse Gamer",
        categoria:'Accesorios',
        precio:2900
    },
    {
        id: '6',
        imagen: padmouse,
        name: "Pad Mouse",
        categoria:'Accesorios',
        precio:790
    },
    {
        id: '7',
        imagen: silla,
        name: "Silla Gamer",
        categoria:'Accesorios',
        precio:32000
    },
    {
        id: '8',
        imagen: teclado,
        name: "Teclado",
        categoria:'Accesorios',
        precio:4200
    },
    {
        id: '9',
        imagen: notebook,
        name: "Notebook",
        categoria:'Equipos',
        precio:106000
    },
]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(articulos)
    }, 2000)
});


