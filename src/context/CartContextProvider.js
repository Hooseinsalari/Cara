import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce((total, item) => total + item.quantity, 0);
  const total = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let findItem = state.selectedItems.find(
        (item) => item._id === action.payload._id
      );

      if (!findItem) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };

    case "REMOVE__ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item._id !== action.payload._id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
        checkout: false,
      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item._id === action.payload._id
      );

      state.selectedItems[indexI].quantity++;

      return {
        ...state,
        checkout: false,
        ...sumItems(state.selectedItems),
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item._id === action.payload._id
      );

      state.selectedItems[indexD].quantity--;

      return {
        ...state,
        checkout: false,
        ...sumItems(state.selectedItems),
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
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const localState = localStorage.getItem("state");
    return localState
      ? JSON.parse(localState)
      : {
          selectedItems: [],
          itemsCounter: 0,
          total: 0,
          checkout: false,
        };
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
