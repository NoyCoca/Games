import { createContext, useContext, useState } from "react";

export const storeContext = createContext();
export const StoreContextProvider = storeContext.Provider;
export const initialState = { itemsNumber: 0, itemsArray: [] };
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEMS_NUMBER = "UPDATE_ITEMS_NUMBER";


export function reducer(state, action) {

  switch (action.type) {
    case ADD_ITEM:

      const searchItem = state.itemsArray.find(item => item.id === action.payload.id)
      if (searchItem) {
        searchItem.items += 1;
      }
      else{
        state.itemsArray.push(action.payload)
      }

      return {
        itemsNumber: state.itemsNumber + 1,
        itemsArray: state.itemsArray,
      };
      
    case DELETE_ITEM:
      const gameItem = state.itemsArray.find(item => item.id === action.payload.id)
      const indexUpdateDelete = state.itemsArray.findIndex(item => item.id === action.payload.id)
      if (gameItem?.items > 1){
        state.itemsArray[indexUpdateDelete].items -= 1;
      }
      else {
        state.itemsArray.splice(indexUpdateDelete, 1);
      }
      
      return {
        itemsNumber: state.itemsNumber - 1,
        itemsArray : state.itemsArray
      }
    default:
      return state;
  }
}

export function useStoreContext() {
  return useContext(storeContext);
}
