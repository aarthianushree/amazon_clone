import React from 'react'
import './CheckOutProduct.css'
import { useDataLayerContext } from './DataLayer'

function CheckOutProduct({index, title, image, price, rating}) {

    const [{basket},dispatch] = useDataLayerContext();

    function RemoveFromBasket(){
       dispatch({
        type:"REMOVE_FROM_BASKET",
        index: index
       })
    }

    return (
    <div className='checkoutProduct'>
      <img src={image}/>
      
      <div className='checkoutProduct_info'>

      <h3>{title}</h3>
      <strong>₹{price}</strong>

      <div className='checkoutProduct_rating'>
      {Array(rating).fill().map( (item,i)=>{
        return (
            <p>⭐</p>
        )
      })}
      </div>

      <button onClick={RemoveFromBasket} className='checkoutProduct_button'>Remove from Basket</button>

      </div>

    </div>
  )
}

export default CheckOutProduct