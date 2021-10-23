import { TiSocialInstagram, TiSocialTwitter, TiSocialFacebook, TiSocialYoutube } from 'react-icons/ti'
import '../Footer/Footer.css'
import React from 'react'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <span> <TiSocialInstagram /> </span>
                <span> <TiSocialTwitter /> </span>
                <span> <TiSocialFacebook /> </span>
                <span> <TiSocialYoutube /> </span>
            </div>
            <div className='list'>
                <p>inicio</p>
                <p>equipos</p>
                <p>accesorios</p>
                <p>nosotros</p>
            </div>
            <p className='copy-right'>
                comisión 19725 reactjs @2021
            </p>
        </div>
    )
}
