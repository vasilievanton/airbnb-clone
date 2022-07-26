import { ADD_ITEM, FILTER_ITEMS, LOAD_ITEMS, REMOVE_ITEM } from './types';

export const addItemAction = (item) => ({
  type: ADD_ITEM,
  item,
});
export const removeItemAction = (itemID) => ({
  type: REMOVE_ITEM,
  itemID,
});



export const loadItemsAction = () => ({
  type: LOAD_ITEMS,
});
export const filterItemsAction = (keyFilter) => ({
  type: FILTER_ITEMS,
  keyFilter,
});
