import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

const Navbar =() =>{
  const [menu, setMenu] = useState("shop")

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
        <div className="container d-flex">
            <div className='logo d-flex justify-content-start'>
                <img className='' src={logo}/>
                <p className=' fs-2'>BOICHARIK</p>
            </div>
          <div className='navMenu d-flex justify-content-center'>
            <ul className="navbar-nav d-flex justify-content-between me-auto mb-2 mb-lg-0">
            <li onCLick={()=>{setMenu("shop")}} className="nav-item px-5"> <Link class="text-decoration-none text-secondary-emphasis" to='/'>Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onCLick={()=>{setMenu("gifts")}} className="nav-item px-5"><Link class="text-decoration-none text-secondary-emphasis" to='/gifts'>Gifts</Link>{menu==="gifts"?<hr/>:<></>}</li>
            <li onCLick={()=>{setMenu("accessories")}} className="nav-item px-5">  <Link class="text-decoration-none text-secondary-emphasis" to='/accessories'>Accessories </Link>{menu==="accessories"?<hr/>:<></>}</li>
            <li onCLick={()=>{setMenu("electronics")}} className="nav-item px-5"><Link class="text-decoration-none text-secondary-emphasis" to='/electronics'>Electronics</Link> {menu==="electronics"?<hr/>:<></>}</li>
            </ul>
          </div>
          <div className='loginAndCart d-flex justify-content-end'>
          <button type="button" className="border px-4 btn btn-light px-4 py-2"><Link class="text-decoration-none text-secondary-emphasis"  to="/login">Login</Link></button>
          <Link className="text-decoration-none" to='/cart'><img src={cart_icon} className='px-4'/></Link>
          </div>
        </div>
      </nav>
   
    )
}

export default Navbar;