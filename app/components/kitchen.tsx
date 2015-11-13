/* tslint:disable:no-unused-variable */ // Workaround for TSlint bug
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import {Order, OrderStatus} from '../entities';
import {StatefulComponent} from '../redux/helpers';
import {State as ReduxState} from '../redux/store';
import {Column} from './column';

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
};

export class Kitchen extends StatefulComponent<{}, State> {

  getState(state: ReduxState) {
    const newState: State = {
      todo: [],
      ready: [],
      done: [],
    };

    state.orders.forEach(order => {
      switch (order.status) {
        case OrderStatus.Todo:  newState.todo.push(order);  break;
        case OrderStatus.Ready: newState.ready.push(order); break;
        case OrderStatus.Done:  newState.done.push(order);  break;
      }
    });

    return newState;
  }

  render() {
    return <div style={styles.container}>
      <Column name='Todo' orders={this.state.todo} />
      <Column name='Kan hämtas' orders={this.state.ready} />
      <Column name='Uthämtade' orders={this.state.done} />
    </div>;
  }
}
