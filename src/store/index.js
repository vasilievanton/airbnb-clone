import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { columnReducer } from './columnReducer';
import { itemsReducer } from './itemsReducer';
import { myDrawerReducer } from './myDrawerReducer';
import { myModalReducer } from './myModalReducer';
import { wishlistReducer } from './wishlistReducer';

const rootReduser = combineReducers({
  wishlist: wishlistReducer,
  items: itemsReducer,
  isModal: myModalReducer,
  column: columnReducer,
  isDrawer: myDrawerReducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
