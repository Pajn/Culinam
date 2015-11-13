import {List} from 'immutable';
import {Order} from '../../entities';
import {actions} from '../actions';
import {createReducer, when} from '../helpers';

type State = List<Order>;

export type OrderState = State;

export const orders = createReducer<State>(
  List([]),
  when(actions.orderCreated, (state: State, {order}) => state.push(order))
);
