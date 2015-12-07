import {createReducer, updateIn} from 'decorated-redux';
import {OrderItem} from '../../entities';
import {actions} from '../actions';

export type CartState = OrderItem[];

export const cart = createReducer<CartState>([])
  .when(actions.addToCart, (cart, {item}) => {
    const index = cart.findIndex(({name}) => item.name === name);

    if (index > -1) {
      return updateIn([index, 'count'], cart[index].count + 1, cart);
    }

    return [...cart, Object.assign({count: 1}, item)];
  })
  .when(actions.orderCreated, () => [])
  .build();
