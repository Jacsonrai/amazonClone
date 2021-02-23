import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";

function product({id,title,image,price,rating}) {
    
    const [{basket},dispatch] = useStateValue.apply();

    function addToBasket() {
        //dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }
    return (
        <div className="product">
            <div className="product__info">
    <p><b>{title}</b></p>
                <p className='product__price'>
                    <small>$</small>
    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating).fill().map((_, i)=>(
                     <span role="img" aria-label="star">🌟</span>
                ))}
                   
                </div>
                </div>
                <img src={image} alt=""/>
                <button onClick={addToBasket}>Add to basket</button>
           
        </div>
    )
}

export default product
