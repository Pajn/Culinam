import * as React from 'react';
import {OrderItem} from '../entities';

const styles = Object.freeze({
  text: {
    color: 'black',
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type Properties = {
  key: any,
  item: OrderItem,
};

export class Dish extends React.Component<Properties, {}> {

  render() {
    const {count, price, name} = this.props.item;
    return (
      <div style={styles.rowWrapper}>
        <p style={styles.text}>{count}</p>
        <p style={styles.text}>{name}</p>
        <p style={styles.text}>{price * count} kr</p>
      </div>
    );
  }
}
