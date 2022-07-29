import { SET_CLOSE_MODAL, SET_OPEN_MODAL } from './types';

const defaultState = { item: {}, isModal: false };

export const myModalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_OPEN_MODAL: {
      return {
        ...state,
        isModal: true,
        item: action.item,
      };
    }
    case SET_CLOSE_MODAL: {
      return {
        ...state,
        isModal: false,
        item: {},
      };
    }
    default:
      return state;
  }
};
