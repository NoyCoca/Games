import { reducer, ADD_ITEM, UPDATE_ITEMS_NUMBER } from './ItemsContext';

const initialState = {
  itemsNumber: 1,
  itemsArray: [
    {
      items: 5,
      id: '123-235',
      name: "some existing product"
    }
  ],
};


describe("reducer", () => {
  it("should return original state for unrecognized action", () => {

    const res = reducer(initialState, { type: "bla" });
    expect(res).toEqual(initialState);

  });
  it("should add new item", () => {
    const addAction = {
      type: ADD_ITEM,
      payload: {
        items: 5,
        name: ""
      }

    }
    const res = reducer(initialState, addAction);
    expect(res).toEqual({
      itemsNumber: initialState.itemsNumber + 1,
      itemsArray: [
        ...initialState.itemsArray,
        addAction.payload
      ]
    });

  });
  it("should update existing item", () => {
    const updateAction = {
      type: UPDATE_ITEMS_NUMBER,
      payload: {
        items: 5,
        id: '123-235',
        name: "some existing product"
      }

    }
    const res = reducer(initialState, updateAction);
    expect(res).toEqual({
      ...initialState,
      itemsNumber: initialState.itemsNumber,
      itemsArray: [
        {
          ...updateAction.payload,
          items: updateAction.payload.items - 1
        }
      ]
    });



  });
})