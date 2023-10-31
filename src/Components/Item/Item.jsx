import React from 'react'
import './Item.css'

const Item = (props) =>{
    return(

            <div className="card" styles="width: 18rem;">
            <img src={props.image}  class="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.new_price}</p>
            <a href="#" className="btn btn-primary"> {props.old_price}</a>
            </div>
            </div>
    )
}

export default Item