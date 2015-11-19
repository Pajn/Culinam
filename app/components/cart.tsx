/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import {StatefulComponent} from '../redux/helpers';
import {State as ReduxState} from '../redux/store';
import {Dish} from '../entities';

const styles = Object.freeze({
  text: {
    color: 'black',
  },
  wrapper: {
    width: '30%',
    alignItems: 'stretch',
    padding: 8,
    background: 'white',
  },
  listWrapper: {
    display: 'flex',
    'flex-direction': 'column',
    padding: 0,
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type State = {
  cart: Dish[],
}

export class Cart extends StatefulComponent<{}, State> {

  getState(state: ReduxState) {
    return state.cart;
  }

  render() {
    return (
    <div style={styles.wrapper}>
        <p style={styles.text}>This is the cart</p>
        <p style={styles.text}>{this.state.cart.length}</p>
        <div style={styles.listWrapper}>
          {
            this.state.cart.map((item, id) => (
                <div style={styles.rowWrapper} key={id}>
                  <p style={styles.text}>{item.name}</p>
                  <p style={styles.text}>{item.price}</p>
                </div>
              )
            )
          }
        </div>
      </div>
    );
  }
}
