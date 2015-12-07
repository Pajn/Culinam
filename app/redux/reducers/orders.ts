import {createReducer, updateIn} from 'decorated-redux';
import {Order} from '../../entities';
import {actions} from '../actions';

export type OrderState = Order[];

export const orders = createReducer<OrderState>([])
  .when(actions.orderCreated, (orders, {order}) =>
      [...orders, Object.assign(order, {id: Date.now()})])
  .when(actions.setOrderStatus, (orders, {order, status}) => {
    const index = orders.findIndex(({id}) => id === order.id);
    if (index > -1) {
      return updateIn([index, 'status'], status, orders);
    }
  })
  .build();
