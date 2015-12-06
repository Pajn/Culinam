import * as React from 'react';
import {stateful, dispatch} from '../redux/helpers';
import {actions} from '../redux/actions';
import {Categories} from './categories';
import {Cart} from './cart';
import {Item} from '../entities';

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
  cart: Item[],
};

@stateful(state => state.cart)
export class Cashier extends React.Component<{children: JSX.Element}, State> {

  render() {
    return (
      <div style={styles.wrapper}>
        <Categories categories={this.props.children} />
        <Cart cartItems={this.state.cart
          .reduce((cartItems:Item[], currentItem:Item) => {
            let exists = cartItems.find(item => item.name === currentItem.name);
            if (exists) {
              exists.count++;
              exists.price = currentItem.price * exists.count;
            } else {
              cartItems.push({
                'name': currentItem.name,
                'price': currentItem.price,
                'count': 1,
              });
            }
            return cartItems;
          }, [])
        } onCartSubmit={(e, cartItems) => {
          e.preventDefault();
          dispatch(actions.orderCreated, {
            order: {
              id: 1,
              status: 1,
              items: this.state.cart,
            },
          });
        }}/>
      </div>
    );
  }
}
