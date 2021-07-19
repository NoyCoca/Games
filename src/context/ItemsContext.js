import { createContext, useContext } from "react";

export const storeContext = createContext();
export const StoreContextProvider = storeContext.Provider;
export const initialState = { itemsNumber: 0, itemsArray: [] };
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = " DELETE_ITEM";

export function reducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
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
    default:
      return state;
  }
}

export function useStoreContext() {
  return useContext(storeContext);
}
