import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce((total, item) => total + item.quantity, 0)
  const total = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  return {itemsCounter, total}
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let findItem = state.selectedItems.find(
        (item) => item === action.payload.id
      );
      if (!findItem) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        checkout: false,
        ...sumItems(state.selectedItems)
      };

    case "REMOVE__ITEM":
      const filteredItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...filteredItem],
        checkout: false,
        ...sumItems(state.selectedItems)
      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[indexI].quantity++;

      return {
        ...state,
        checkout: false,
        ...sumItems(state.selectedItems)
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.selectedItems[indexD].quantity--;

      return {
        ...state,
        checkout: false,
        ...sumItems(state.selectedItems)
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
