import { ADD_ITEM, FILTER_ITEMS, LOAD_ITEMS, REMOVE_ITEM, SET_CLOSE_MODAL, SET_OPEN_MODAL, SET_COLUMN, ADD_MANY_ITEM, SET_OPEN_DRAWER, SET_CLOSE_DRAWER, SET_LIMIT, SET_USER, REMOVE_USER } from './types';

export const addItemAction = (item) => ({
  type: ADD_ITEM,
  item,
});
export const removeItemAction = (itemID) => ({
  type: REMOVE_ITEM,
  itemID,
});
export const addManyItemAction = (items) => ({
  type: ADD_MANY_ITEM,
  items,
});

export const loadItemsAction = () => ({
  type: LOAD_ITEMS,
});
export const filterItemsAction = (keyFilter) => ({
  type: FILTER_ITEMS,
  keyFilter,
});

export const setOpenModalAction = (item) => ({
  type: SET_OPEN_MODAL,
  item,
});
export const setCloseModalAction = () => ({
  type: SET_CLOSE_MODAL,
});

export const setColumnAction = (md) => ({
  type: SET_COLUMN,
  md,
});

export const setOpenDrawerAction = () => ({
  type: SET_OPEN_DRAWER,
});
export const setCloseDrawerAction = () => ({
  type: SET_CLOSE_DRAWER,
});

export const setRateLimitAction = (limit) => ({
  type: SET_LIMIT,
  limit,
});

export const setUserAction = (id, email, token, displayName) => ({
  type: SET_USER,
  id,
  email,
  token,
  displayName,
});
export const removeUserAction = () => ({
  type: REMOVE_USER,
});
