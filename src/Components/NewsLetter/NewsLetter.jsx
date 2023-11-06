import React from 'react'
import './NewsLetter.css'

const NewsLetter = () =>{
    return(
        <div className ='container bg-light bg-gradient py-5 my-5 d-flex justify-content-center'>
            <div className ='d-inline-flex flex-column py-5'>
            <h1 className ='text-capitalize fw-bolder align-self-center '>Get exclusive offers on your email</h1>
            <p className ='align-self-center'>Subscribe to our newsletter and stay updated</p>
            <div>
            <form>
                <div class="mb-3 d-flex flex-row ">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Your Email ID' aria-describedby="emailHelp"/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}

export default NewsLetter;