import * as React from 'react';
import {OrderItem, OrderStatus} from '../entities';
import {actions} from '../redux/actions';
import {stateful, dispatch} from '../redux/store';
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
  cart: OrderItem[],
};

@stateful(state => ({cart: state.cart}))
export class Cashier extends React.Component<{children: JSX.Element}, State> {

  render() {
    return (
      <div style={styles.wrapper}>
        <Categories categories={this.props.children} />
        <Cart cartItems={this.state.cart} onCartSubmit={(e, cartItems) => {
          e.preventDefault();
          dispatch(actions.orderCreated, {
            order: {
              id: 1,
              status: OrderStatus.Todo,
              items: this.state.cart,
            },
          });
        }}/>
      </div>
    );
  }
}
