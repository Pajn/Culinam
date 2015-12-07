import {Action, createActions} from 'decorated-redux';
import {Order, OrderStatus, Item} from '../entities';

class Actions {
  addToCart: Action<{item: Item}> = {};
  orderCreated: Action<{order: Order}> = {};
  setOrderStatus: Action<{order: Order, status: OrderStatus}> = {};
}

export const actions = createActions(Actions);
