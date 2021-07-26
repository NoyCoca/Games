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
      const searchItem = state.itemsArray.find(item => item === action.payload)
      const deleteItem = state.itemsArray.indexOf(searchItem)
      if (searchItem) {
        searchItem.items += 1;
        state.itemsArray.splice(deleteItem, 1);

        console.log(searchItem)
        console.log(deleteItem)
      }
      return {
        itemsNumber: state.itemsNumber + 1,
        itemsArray: state.itemsArray.concat(action.payload),
      };

    case DELETE_ITEM:
      const indexDelete = state.itemsArray.indexOf(action.payload);
      console.log(indexDelete)
      if (indexDelete !== -1) {
        state.itemsArray.splice(indexDelete, 1);
      }
      return {
        itemsNumber: state.itemsArray.length,
        itemsArray: state.itemsArray,
      };
      
    case UPDATE_ITEMS_NUMBER:
      const updateDate = state.itemsArray.find(item => item === action.payload)
      const indexUpdateDelete = state.itemsArray.indexOf(action.payload);

      if (updateDate?.items > 0){
        updateDate.items -= 1;
      }
      else{
        state.itemsArray.splice(indexUpdateDelete, 1);
      }
      
      return {
        itemsNumber:  state.itemsArray.length,
        itemsArray : state.itemsArray
      }
    default:
      return state;
  }
}

export function useStoreContext() {
  return useContext(storeContext);
}
