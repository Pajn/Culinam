import * as React from 'react';
import {OrderStatus} from '../entities';
import {Categories} from './categories';
import {Cart} from './cart';

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

type State = {
  orderStatus: OrderStatus,
};

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
