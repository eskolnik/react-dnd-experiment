import { combineReducers, createStore } from 'redux';

import items from '../reducers/items';
import tabs from '../reducers/tabs';

let reducers = combineReducers({
  items,
  tabs
})

let store = createStore(reducers)

export default store;
