/* tslint:disable:no-unused-variable */ // Workaround for TSlint bug
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import {findDOMNode} from 'react-dom';
import {Order, OrderStatus} from '../entities';
import {stateful} from '../redux/store';
import {Column} from './column';
import {OrderReceiptPreview} from './order-receipt-preview';

const styles = Object.freeze({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
});

type State = {
  todo: Order[],
  ready: Order[],
  done: Order[],
  width: number,
};

@stateful(state => state.orders.reduce((state, order) => {
  switch (order.status) {
    case OrderStatus.Todo:  state.todo.push(order);  break;
    case OrderStatus.Ready: state.ready.push(order); break;
    case OrderStatus.Done:  state.done.push(order);  break;
  }
  return state;
}, {
  todo: [],
  ready: [],
  done: [],
}))
export class Kitchen extends React.Component<{}, State> {

  componentDidMount() {
    this.setState({
      width: findDOMNode(this.refs['column']).clientWidth,
    } as State);
  }

  render() {
    const {todo, ready, done, width} = this.state;

    return (
      <div style={styles.container}>
        <Column name='Todo' orders={todo} orderStatus={OrderStatus.Todo} ref='column' />
        <Column name='Kan hämtas' orders={ready} orderStatus={OrderStatus.Ready} />
        <Column name='Uthämtade' orders={done} orderStatus={OrderStatus.Done} />
        <OrderReceiptPreview width={width} />
      </div>
    );
  }
}
