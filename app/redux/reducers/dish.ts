import {Dish} from '../../entities';
import {actions} from '../actions';
import {createReducer, when} from '../helpers';

type State = {cart: Dish[]};

export type DishState = State;

export const dish = createReducer<State>(
  {cart: []},
  when(actions.inCart, (state: State, payload) => {
    state.cart.push(payload.dish);
  })
);
