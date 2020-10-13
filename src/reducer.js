export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount,item) => item.price + amount, 0);

//the most complicated pattern i must learn
const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'SET_USER':
    return {
      ...state,
      user:action.user
    }
    case 'ADD_TO_BASKET':
    return {
      //everytime we return we must update what the new datalayer will look like
      ...state,
      //we include whatever we had on the current basket plus put what we have added
      basket: [...state.basket, action.item]
    }
    // logic for adding item to basket
    case 'REMOVE_FROM_BASKET':
    //we cloned the basket
    let newBasket = [...state.basket];
    const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

    if (index >= 0) {
      //item exists in basket.remove it...
      newBasket.splice(index, 1)
    } else {
      console.warn(
        `can't remove product (id: ${action.id}) as it is not in the basket`
      )
    }
    return {
      ...state,
      basket: newBasket,
    }
    //Logic for removing item from basket
    default:
      return state;
  }
}

export default reducer;
