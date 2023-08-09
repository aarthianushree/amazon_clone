import React from 'react'
import './Product.css'
import { useDataLayerContext } from './DataLayer'

function Product({id,title,price,rating,image}) {

  const [{},dispatch] = useDataLayerContext();
  
  const addtoBasket = () =>{
     dispatch({
      type:"ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price:price,
        rating: rating
      }
     })
  }

  return (
    <div className='product'>

    <div className='product_info'>
    <p>{title}</p>

    <p className='product_price'>
      <strong>₹{price}</strong>
    </p>

    <div className='product_rating'>
    {Array(rating).fill().map( (_)=>{
        return (
            <p>⭐</p>
        )
    })}
    </div>

    </div>

    <img className="product_image" src={image} />

    <button onClick={addtoBasket}>Add to basket</button>
   
    </div>
  )
}

export default Product