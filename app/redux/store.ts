import {reactStore} from 'decorated-redux/react';
import {combineReducers, createStore} from 'redux';
import {orders, OrderState} from './reducers/orders';
import {cart, CartState} from './reducers/cart';

export type State = {
  cart: CartState,
  orders: OrderState,
};

export const store = createStore(combineReducers({cart, orders}));
const helpers = reactStore<State>(store);

export const dispatch = helpers.dispatch;
export const stateful = helpers.stateful;
