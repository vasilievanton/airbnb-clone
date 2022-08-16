import { REMOVE_USER, SET_USER } from './types';

const defaultState = { user: { id: null, email: null, token: null } };

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER: {
      console.log(action);
      return {
        ...state,
        user: {
          id: action.id,
          email: action.email,
          token: action.token,
          displayName: action.displayName
        },
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        user: {
          id: null,
          email: null,
          token: null,
          displayName: null
        },
      };
    }
    default:
      return state;
  }
};
