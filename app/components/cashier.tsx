import * as React from 'react';
import {StatefulComponent} from '../redux/helpers';
import {Order, Drink, OrderStatus} from '../entities';
import {OrderItem} from './order-item';
import {State as ReduxState} from '../redux/store';
import {actions} from '../redux/actions';

type State = {
  orderStatus: OrderStatus,
};

export class Cashier extends StatefulComponent<{}, State> {

  getState(state: ReduxState) {
    const newState: State = {
      orderStatus: OrderStatus.Todo,
    };

    state.orders.orders.forEach(order => {
      switch (order.status) {
        case OrderStatus.Todo:  newState.orderStatus = OrderStatus.Todo;
        case OrderStatus.Ready: newState.orderStatus = OrderStatus.Ready;
        case OrderStatus.Done:  newState.orderStatus = OrderStatus.Done;
      }
    });
    return newState;
  }

  render() {
    return <div onClick={this.onOrder}>
      <OrderItem></OrderItem>
    </div>;
  }

  private onOrder() {
    const drink: Drink = {
      name: "Coca Cola",
    };

    const order: Order = {
      status: OrderStatus.Todo,
      drinks: [drink],
    };

    super.dispatch(actions.orderCreated, {order});
  }
}
