import React from 'react'
import './Item.css'

const Item = (props) =>{
    return(

            <div className="card" styles="width: 18rem;">
            <img src={props.image} styles="width: 100px; height:100px;"class="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div className="d-flex justify-content-center">
            <p className="mx-1 card-text text-decoration-line-through ">{props.old_price}</p>
            <a href="#" className="btn btn-primary mx-1"> {props.new_price}</a>
            </div>
            </div>
            </div>
    )
}

export default Item