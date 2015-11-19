import * as React from 'react';
import {Link} from 'react-router';
import {OrderStatus} from '../entities';
import {Categories} from './categories';
import {Cart} from './cart';

const styles = Object.freeze({
  link: {
    display: 'block',
    color: 'white',
  },
  wrapper: {
    display: 'flex',
  },
});

type State = {
  orderStatus: OrderStatus,
};

export class Cashier extends React.Component<{children: JSX.Element}, {}> {

  render() {
    return (
      <div>
        <Link style={styles.link} to='/cashier/dishes'>Maträtter</Link>
        <Link style={styles.link} to='/cashier/drinks'>Bar</Link>
        <div style={styles.wrapper}>
          <Categories categories={this.props.children} />
          <Cart />
        </div>
      </div>
    );
  }
}
