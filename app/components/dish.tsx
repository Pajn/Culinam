import * as React from 'react';
import {Item} from '../entities';

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
  item: Item,
}

export class Dish extends React.Component<Properties, {}> {

  render() {
    const {key, item} = this.props;
    return (
      <div style={styles.rowWrapper} key={key}>
        <p style={styles.text}>{item.count}</p>
        <p style={styles.text}>{item.name}</p>
        <p style={styles.text}>{item.price} kr</p>
      </div>
    );
  }
}
