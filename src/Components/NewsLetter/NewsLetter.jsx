import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () =>{
    return(
        <div className ='container bg-light bg-gradient d-inline-flex  justify-content-center border'>
            <h1 className ='text-capitalize fw-bolder border'>Get exclusive offers on your email</h1>
            <p className ='border'>Subscribe to our newsletter and stay updated</p>
        </div>
    )
}

export default NewsLetter;