import * as React from 'react';
import {DropTarget, DropTargetMonitor} from 'react-dnd';
import {Order, OrderStatus} from '../entities';
import {actions} from '../redux/actions';
import {dispatch} from '../redux/helpers';
import {OrderReceipt, dragType} from './order-receipt';

const styles = Object.freeze({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
    borderBottom: 'solid 2px gray',
  },
});

type Properties = {
  name: string,
  orders: Order[],
  orderStatus: OrderStatus,
  connectDropTarget?,
  ref?,
};

const events = {
  drop(props: Properties, monitor: DropTargetMonitor) {
    dispatch(actions.setOrderStatus, {order: monitor.getItem(), status: props.orderStatus});
  },
};

@DropTarget(dragType, events, (connect) => ({connectDropTarget: connect.dropTarget()}))
export class Column extends React.Component<Properties, {}> {

  render() {
    const {connectDropTarget, orders} = this.props;

    return connectDropTarget(
      <div style={styles.container}>
        <header style={styles.header}>
          <h2>{this.props.name}</h2>
        </header>
        <div>
          {orders.map(order => <OrderReceipt order={order} key={order.id} />)}
        </div>
      </div>
    );
  }
}
