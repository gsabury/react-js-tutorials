import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { addItem, deleteItem } from "../actions/cartAction";

const Cart = () => {
    const state = useSelector((state) => state);
  
    const dispatch = useDispatch();

    const addItemToCart = () =>  dispatch(addItem());

    const removeItemFromCart = () =>  dispatch(deleteItem());

  return (
    <div className="cart">
      
      <h2>Number of items in Cart: {state.numOfItems}</h2>

      <button className="green"  onClick={addItemToCart}>Add Item to Cart</button>

      <button 
      disabled={state.numOfItems > 0 ? false : true}
      className="red" onClick={removeItemFromCart}>Remove Item from Cart</button>
    </div>
  );
};

export default Cart;