import img5 from '../../Assets/img5.png'
import img6 from '../../Assets/img6.png'
import '../Anuncios/Anuncios.css'


export const Anuncios = () => {
    return (

        <div className='subTitulo'>
            <p>¡ destacados !</p>

            <div className='propa'>
                <img className='propaUno' src={img5} alt="foto" />
                <img className='propaUno' src={img6} alt="foto" />
            </div>

        </div>
    )
}
