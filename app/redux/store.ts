import {combineReducers, createStore} from 'redux';
import {orders, OrderState} from './reducers/orders';

export type State = {
  orders: OrderState,
};

export const store = createStore(combineReducers({orders}));
