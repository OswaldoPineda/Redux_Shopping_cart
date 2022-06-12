import { ADD_TO_CART, ADD_QUANTITY, SUBSTRACT_QUANTITY, REMOVE_ITEM } from './action-types/cart-actions';

export const addToCart = (id)=>{
  return {
    type: ADD_TO_CART,
    id
  }
};

export const addQuantity = (id)=>{
  return {
    type: ADD_QUANTITY,
    id
  }
}

export const substractQuantity = (id)=>{
  return {
    type: SUBSTRACT_QUANTITY,
    id
  }
}

export const removeItem = (id)=>{
  return {
    type: REMOVE_ITEM,
    id
  }
}
