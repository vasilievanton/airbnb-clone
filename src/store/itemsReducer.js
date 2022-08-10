// import { items } from '../data/items';
import { ADD_MANY_ITEM, FILTER_ITEMS, LOAD_ITEMS } from './types';

// const defaultState = [ ...items ];
const defaultState = {items: []};

export const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_ITEM: {
      return {
        ...state,
        items: action.items,
      };
    }
    case LOAD_ITEMS: {
      return {
        ...state,
        items: [...defaultState.items],
      };
    }
    case FILTER_ITEMS: {
      console.log(action);
      return {
        ...state,
        items: [...defaultState.items.filter((item) => item.tags.includes(action.keyFilter))],
      };
    }
    default:
      return state;
  }
};
