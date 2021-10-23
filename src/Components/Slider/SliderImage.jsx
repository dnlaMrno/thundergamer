import { SliderData } from "./SliderData"
import { useState } from "react"
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai"
import '../Slider/Slider.css'


export const SliderImage = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }



    return (

        <div className='slider'>
            <AiFillCaretLeft className='izquierda' onClick={prevSlide} />
            <AiFillCaretRight className='derecha' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.imagen} alt="foto" className='image' />)}
                    </div>
                )
            })}
        </div>

    )
}
