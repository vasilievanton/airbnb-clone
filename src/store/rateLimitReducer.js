import { SET_LIMIT } from './types';

const defaultState = { limit: null};

export const rateLimitReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LIMIT: {
      return {
        ...state,
        limit: action.limit,
      };
    }
    default:
      return state;
  }
};
