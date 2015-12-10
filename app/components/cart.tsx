import * as React from 'react';
import {stateful, dispatch} from '../redux/helpers';
import {actions} from '../redux/actions';
import {Item, Order, OrderStatus} from '../entities';
import {Dish} from './dish';
import {renderCartItems} from '../utils/items';
const renderDishesInCart = renderCartItems(Dish, React.createElement);

const styles = Object.freeze({
  text: {
    color: 'black',
  },
  wrapper: {
    width: '30%',
    alignItems: 'stretch',
    flexDirection: 'column',
    padding: 8,
    background: 'white',
    display: 'flex',
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    flex: 1,
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallCartPanel:{
    display: 'flex',
    background: 'grey',
    height: 30,
  },
  cartPanel: {
    display: 'flex',
    background: 'black',
    height: 50,
  },
});

type State = {
  cart: Item[],
  orders: Order[],
};

@stateful(state => {
  return state.cart;
})
export class Cart extends React.Component<{}, State> {
  private id:any = 1;

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.listWrapper}>
          {
            renderDishesInCart(this.state.cart)
          }
        </div>
        <div style={styles.smallCartPanel}>
          <a href='#' onClick={(e) => {
            e.preventDefault();
          }}>Add</a>
        </div>
        <div style={styles.cartPanel}>
          <a href='#' onClick={(e) => {
            e.preventDefault();
            console.log("state: ", this.state.orders);
            dispatch(actions.orderCreated, {
              order: {
                id: this.id++,
                status: OrderStatus.Todo,
                items: this.state.cart,
              },
            });
          }}>Bonga</a>
        </div>
      </div>
    );
  }
}
