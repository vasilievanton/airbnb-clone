import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { columnReducer } from './columnReducer';
import { itemsReducer } from './itemsReducer';
import { myModalReducer } from './myModalReducer';
import { rateLimitReducer } from './rateLimitReducer';
import { wishlistReducer } from './wishlistReducer';
import { userReducer } from './userReducer';

const rootReduser = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  items: itemsReducer,
  isModal: myModalReducer,
  column: columnReducer,
  rateLimit: rateLimitReducer
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
