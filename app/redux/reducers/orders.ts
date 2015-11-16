import {List} from 'immutable';
import {Order} from '../../entities';
import {actions} from '../actions';
import {createReducer, when} from '../helpers';

type State = {orders: Array<Order>};

export type OrderState = State;

export const orders = createReducer<State>(
  {orders: []},
  when(actions.orderCreated, (state: State, payload) => {
    console.log(payload.order);
    state.orders.push(payload.order);
  })
);
