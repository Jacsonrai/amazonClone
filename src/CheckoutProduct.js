import React from 'react'
import { Spring } from 'react-spring/renderprops';
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider";


function CheckoutProduct({id,image,title,price,rating}) {
    

    const [{basket},dispatch] = useStateValue();
    const removeFromBasket=()=>{
        //remove the item from basker
        dispatch({
            type:'REMOVE_FROM_BASKET',
           id: id,
          
                        })
    }
    return (
        <Spring 
        from={{opacity:0}}
        to={{opacity:1}}
        config={{delay:100}}
        >
            {
            props=>(
                <div style={props}>
                     <div className="checkoutProduct">
                <img className='checkoutProduct__image' src={image}/>
        
        <div className="checkoutProduct__info">
        
    <p className='checkoutProduct__title'>{title}</p>
        <p className="checkoutProduction__price">
            <small>$</small>
            <strong>{price}</strong>

        </p>
        
        <div className="checkoutProduct__rating">
            {Array(rating)
            .fill()
            .map((_, i)=>(
                
                <span role="img" aria-label="star">🌟</span>
            ))}
            

        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
        </div>
                </div>
            )
            }
           
    
        </Spring>
        
    )
}

export default CheckoutProduct
