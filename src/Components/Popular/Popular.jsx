import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = (props) =>{
    return(
        <div className='container py-5'>
            <h1>Popular In Women</h1>
            <hr/>
            
            <div className="container text-center">
  <div className="row">
                {data_product.map((item,i)=>{
                    
                    return (
                        
                    <div className="col">
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
                        </div>
                        )
                })}
            
            </div>
    </div>
            
        </div>
    )
}

export default Popular