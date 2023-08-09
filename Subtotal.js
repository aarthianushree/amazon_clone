import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useDataLayerContext } from './DataLayer'
import { getbasketTotal } from './Reducer';

function Subtotal() {

    const [{basket},dispatch] = useDataLayerContext();

  return (
    <div className='subtotal'>
    <CurrencyFormat
        renderText={(value)=>(
            <>
                <p>
                    Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                </p>
                <small className='subtotal_gift'>
                   <input type='checkbox'/> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getbasketTotal(basket)}
        displayType={"text"}
        prefix={"₹"}
    />
    <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal