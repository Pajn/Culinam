import {combineReducers, createStore} from 'redux';
import {orders, OrderState} from './reducers/orders';
import {dish, DishState} from './reducers/dish';

export type State = {
  cart: DishState,
  orders: OrderState,
};

export const store = createStore(combineReducers({cart: dish, orders}));
