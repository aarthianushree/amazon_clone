import React from 'react'
import './Checkout.css'
import { useDataLayerContext } from './DataLayer'
import CheckOutProduct from './CheckOutProduct'
import Subtotal from './Subtotal'

function Checkout() {

  const [{basket}] = useDataLayerContext();

  return (
    <div className='checkout'>
    <div className='checkout_left'>
    
    <div className='Checkout_addimage'>
        <img className='checkout_pic' src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt=""/>
        
    </div>
    
    {basket?.length === 0 ? (
       <div>
        <h2 className='checkout_title'>Your basket is empty</h2>
       </div>
    ): (
      <div>
        <h2>Your shopping cart</h2>

        {basket?.map(item=>{
         return (
          <CheckOutProduct
             index={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
          />
         )
        })}
        
      </div>
    )}
    </div>

    <div className='checkout_right'>
      <Subtotal/>
    </div>

    </div>
    
  )
}

export default Checkout