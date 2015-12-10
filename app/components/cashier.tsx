import * as React from 'react';
import {Categories} from './categories';
import {Cart} from './cart';
import {Item, Order, OrderStatus} from '../entities';

const styles = Object.freeze({
  link: {
    display: 'block',
    color: 'white',
  },
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export class Cashier extends React.Component<{children: JSX.Element}, {}> {
  render() {
    return (
      <div style={styles.wrapper}>
        <Categories categories={this.props.children} />
        <Cart/>
      </div>
    );
  }
}
