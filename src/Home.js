import React from 'react'
import "./Home.css"
import Product from "./Product";



function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://lh3.googleusercontent.com/p4OrpVf1Vl01WQxg43F_mWz4yXOtSnlnnwyFEJLulveQZYuIwb-2-Vk0B9XSnTjAEA" alt=""/>
                <div className="home__row">
                <Product
                id={0}
                 title='Computer, device for processing, storing, and displaying information.'
                 price={29.99} 
                 image='https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg'
                 rating={2}
                  />
                <Product
                id={1}
                  title='Beautiful woolen sweter with white strap'
                  price={29.99} 
                  image='//img.pakamera.net/i1/7/362/swetry-12206570_8971224362.jpg'
                  rating={3}
                 />
                
                
               </div> 
               <div className="home__row">
               
               <Product
               id={3}
               title='The lean startup'
               price={29.99} 
               image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
               rating={4}
                />

               <Product
                id={4}
               title='Apple Watch Bracelet 44mm & 42mm Turquoise S/M and M/L'
               price={29.99} 
               image='https://cdn3.macmaniack.com/12181-thickbox_default/apple-wrist-watch-42mm-turquoise-and-sm-ml.jpg'
               rating={1}
                />
               
               <Product
                    id={5}
               title='LightSpeed RUSH | High Performance Electric Bicycle'
               price={29.99} 
               image='https://lightspeed.bike/wp-content/uploads/2019/09/lightspeedRush.png'
               rating={5}
                />
                
               </div> 
               <div className="home__row">
               
               <Product
               id={6}
               title='this is an 16 inch lcd monitor with HIGh defination quality'
               price={29.99} 
               image='https://www.okdam.com/public/images/upload/product/samsung-ua32n4300ar-se-32-inches-smart-tv.jpg'
               rating={4}
                />
                
               </div> 
            
            </div>
        </div>
    )
}

export default Home
