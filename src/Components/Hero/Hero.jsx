import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arror_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () =>{

    return(
        <div  className='hero py-5 bg-light' >
            <div className='container text-center '>
                <div className='hero-content d-inline-flex  flex-column '>
                    <div className='hero-text my-5 text-center '>
                    <h2 className='fs-1 my-5'>NEW ARRIVALS ONLY</h2>
                    <div className='hero-p mt-5 fs-4'>
                        <p>new collections for everyone</p>
                    </div>
                    </div>
                    <div className='hero-button  text-center'>
                        <button type="button" class="btn btn-danger mb-5 fs-4">Latest collections</button>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Hero