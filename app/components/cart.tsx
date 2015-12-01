import * as React from 'react';
import {stateful} from '../redux/helpers';
import {Item} from '../entities';

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
  cartPanel: {
    display: 'flex',
    background: 'black',
    height: 50,
  }
});

type State = {
  cart: Item[],
}

@stateful(state => state.cart)
export class Cart extends React.Component<{}, State> {

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.listWrapper}>
          {
            this.state.cart
              .reduce((cartItems, currentItem) => {
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
              .map((item, id) => (
                  <div style={styles.rowWrapper} key={id}>
                    <p style={styles.text}>{item.count}</p>
                    <p style={styles.text}>{item.name}</p>
                    <p style={styles.text}>{item.price} kr</p>
                  </div>
                )
              )
          }
        </div>
        <div style={styles.cartPanel}>
        </div>
      </div>
    );
  }
}
