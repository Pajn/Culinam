import {Item} from '../../entities';
import {actions} from '../actions';
import {createReducer, when} from '../helpers';

type State = {cart: Item[]};

export type ItemState = State;

export const item = createReducer<State>(
  {cart: []},
  when(actions.inCart, (state: State, payload) => {
    state.cart.push(payload.item);
  })
);
