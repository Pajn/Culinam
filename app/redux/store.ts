import {combineReducers, createStore} from 'redux';
import {orders, OrderState} from './reducers/orders';
import {item, ItemState} from './reducers/dish';

export type State = {
  cart: ItemState,
  orders: OrderState,
};

export const store = createStore(combineReducers({cart: item, orders}));
