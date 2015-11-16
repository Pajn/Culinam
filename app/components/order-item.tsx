import * as React from 'react';
import {Order, OrderStatus} from '../entities';
import {State as ReduxState} from '../redux/store';
import {StatefulComponent} from '../redux/helpers';

type State = {
  orderStatus: OrderStatus,
};

export class OrderItem extends React.Component<{}, State> {

  render() {
    return <div>
      <p>Order a drink</p>
    </div>
  }
}
