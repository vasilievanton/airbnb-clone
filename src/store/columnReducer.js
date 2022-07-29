import { SET_COLUMN } from './types';

const defaultState = { md: 3 };

export const columnReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_COLUMN: {
      return {
        ...state,
        md: action.md,
      };
    }
    default:
      return state;
  }
};
