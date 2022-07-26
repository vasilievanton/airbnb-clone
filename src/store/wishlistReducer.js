import { ADD_ITEM, REMOVE_ITEM } from './types';

const defaultState = { items: [] };

export const wishlistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.item],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.itemID),
      };
    }
    default:
      return state;
  }
};
