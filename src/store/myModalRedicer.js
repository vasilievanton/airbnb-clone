import { SET_CLOSE_MODAL, SET_OPEN_MODAL } from './types';

const defaultState = { isModal: false };

export const myModalRedicer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_OPEN_MODAL: {
      return {
        ...state,
        isModal: true,
      };
    }
    case SET_CLOSE_MODAL: {
      return {
        ...state,
        isModal: false,
      };
    }
    default:
      return state;
  }
};
