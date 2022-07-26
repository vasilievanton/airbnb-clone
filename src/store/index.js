import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { itemsReducer } from './itemsReducer';
import { wishlistReducer } from './wishlistReducer';

const rootReduser = combineReducers({
  wishlist: wishlistReducer,
  items: itemsReducer
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
