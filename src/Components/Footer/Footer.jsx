import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () =>{
    return(
        <div className='container'>
            <ul className="list-group">
                <li className="list-group-item">Company</li>
                <li className="list-group-item">Product</li>
                <li className="list-group-item">Offices</li>
                <li className="list-group-item">About</li>
                <li className="list-group-item">Contact</li>
            </ul>
        </div>
    )
}

export default Footer;