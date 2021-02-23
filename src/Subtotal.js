import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket},dispatch] = useStateValue.apply();
    return (
        <div className="subtotal">
        <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    
            Subtotal({basket?.length} item):<strong>{value}</strong>

                </p>
                <small className="subtotal__gift">
                <input type="checkbox"/>order as a gift
                  
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeprator={true}
            prefix={"$"}
        />
        <button><strong> checkout</strong></button>
    </div>
       
    )
}

export default Subtotal 
