import * as React from 'react';
import {OrderItem} from '../entities';
import {Dish} from './dish';

const styles = Object.freeze({
  text: {
    color: 'black'
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
  cartPanel: {
    display: 'flex',
    background: 'black',
    border: '1 px solid #000',
    height: 50,
  },
});

type Properties = {
  cartItems: OrderItem[],
  onCartSubmit: Function,
}

export class Cart extends React.Component<Properties, {}> {

  render() {
    const {cartItems, onCartSubmit} = this.props;
    return (
      <div style={styles.wrapper}>
        <div style={styles.listWrapper}>
          {cartItems.map((item, key) => <Dish key={key} item={item} />)}
        </div>
        <div style={styles.cartPanel}>
          <a href='#' onClick={(e) => onCartSubmit(e, cartItems)}>Bonga</a>
        </div>
      </div>
    );
  }
}
