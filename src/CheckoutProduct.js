import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{basket}, dispatch] = useStateValue();
  console.log(id,title,price,rating,image)
  const removeFromBasket =() => {
    //removeFromBasket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  return(
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt='' />
        <div className="checkoutProduct_info">
          <p className='checkoutProduct_title'>{title}</p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
              {Array(rating)
              .fill()
              .map((index) => (
                <p key={index}>⭐</p>
              ))}
          </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;
