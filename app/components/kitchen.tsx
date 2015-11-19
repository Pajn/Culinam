/* tslint:disable:no-unused-variable */ // Workaround for TSlint bug
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import {findDOMNode} from 'react-dom';
import {Order, OrderStatus} from '../entities';
import {StatefulComponent} from '../redux/helpers';
import {State as ReduxState} from '../redux/store';
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

export class Kitchen extends StatefulComponent<{}, State> {

  componentDidMount() {
    this.setState({
      width: findDOMNode(this.refs['column']).clientWidth,
    } as State);
  }

  getState(state: ReduxState) {
    const newState: State = {
      todo: [],
      ready: [],
      done: [],
      width: (this.state && this.state.width) || 0,
    };

    state.orders.orders.forEach(order => {
      switch (order.status) {
        case OrderStatus.Todo:  newState.todo.push(order);  break;
        case OrderStatus.Ready: newState.ready.push(order); break;
        case OrderStatus.Done:  newState.done.push(order);  break;
      }
    });

    return newState;
  }

  render() {
    const {todo, ready, done, width} = this.state;

    return <div style={styles.container}>
      <Column name='Todo' orders={todo} orderStatus={OrderStatus.Todo} ref='column' />
      <Column name='Kan hämtas' orders={ready} orderStatus={OrderStatus.Ready} />
      <Column name='Uthämtade' orders={done} orderStatus={OrderStatus.Done} />
      <OrderReceiptPreview width={width} />
    </div>;
  }
}
