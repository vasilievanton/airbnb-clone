import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { itemsReducer } from './itemsReducer';
import { myModalRedicer } from './myModalRedicer';
import { wishlistReducer } from './wishlistReducer';

const rootReduser = combineReducers({
  wishlist: wishlistReducer,
  items: itemsReducer,
  isModal: myModalRedicer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
