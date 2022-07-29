import { SET_OPEN_DRAWER,SET_CLOSE_DRAWER } from './types';

const defaultState = { isOpenDrawer: false };

export const myDrawerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_OPEN_DRAWER: {
      return {
        ...state,
        isOpenDrawer: true,
      };
    }
    case SET_CLOSE_DRAWER: {
      return {
        ...state,
        isOpenDrawer: false,
      };
    }
    default:
      return state;
  }
};
