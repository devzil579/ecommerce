import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar =() =>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
        <div className="container d-flex">
            <div className='logo d-flex justify-content-start'>
                <img className='' src={logo}/>
                <p className=' fs-2'>SHOPPER</p>
            </div>
          <div className='navMenu d-flex justify-content-center'>
            <ul className="navbar-nav d-flex justify-content-between me-auto mb-2 mb-lg-0">
              <li className="nav-item px-5">
                <a className="nav-link active" aria-current="page" href="#">Shop</a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#">Men</a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#">Women</a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#">Kids</a>
              </li>
            </ul>
          </div>
          <div className='loginAndCart d-flex justify-content-end'>
          <button type="button" className="border px-4 btn btn-light px-4 py-2">Login</button>
          <img src={cart_icon} className='px-4'/>
          </div>
        </div>
      </nav>
   
    )
}

export default Navbar;