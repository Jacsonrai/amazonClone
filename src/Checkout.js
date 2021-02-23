import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";



function Checkout() {
  const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1
  };
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img 
            className="checkout__ad"
            src="https://d1jie5o4kjowzg.cloudfront.net/deli-headline-banner-images/amazon_deli_newstore_111119.png?zxVCcQYOU9p3YfUcCMhjR3D1NDtEmgh2" 
            alt=""
            />
            <div>
    <h3>Hello,{!user?
    'Guest':user?.email}</h3>
               <h2 className="checkout__title">
                  Your shopping Basket</h2>
                
                {basket.map(item=>(
             
                      <CheckoutProduct
                    
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                      />
                      
                        )
                    )}
          
              
                 

            </div>
            </div>
            <div className="checkout__right">
           <Subtotal/>

            </div>
            </div>
    )
}

export default Checkout
