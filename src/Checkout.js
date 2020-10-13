import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
    <div className='checkout_left'>
      <img className='checkout_ad' src='https://www.perion.com/wp-content/uploads/2017/07/adobe-ads.png' alt='' />
      {basket?.length === 0? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p > You have no items in your basket. To buy one or more items,click "Add to basket" next to the item</p>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
          {/*lists out all the items in the checkout products*/}
          {basket?.map((item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          )))}
        </div>
      )}
    </div>
    {basket?.length > 0 && (
      <div className='checkout_right'>
      <Subtotal />
      </div>
    )}
    </div>
  )
}

export default Checkout;
