import * as React from 'react';
import {dispatch, stateful} from '../redux/helpers';
import {actions} from '../redux/actions';
import {Item} from '../entities';

type State = {items: Item[]};

const styles = Object.freeze({
  link: {
    display: 'block',
    color: 'white',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

@stateful(state => ({
  items: [{
    id: 1,
    name: 'Lumber Jack',
    price: 160,
  },
  {
    id: 2,
    name: 'Lax med potatis och dillsås',
    price: 180,
  },
],
}))
export class Dishes extends React.Component<{}, State> {

  render() {
    return (
      <div style={styles.wrapper}>
        <div>
          {
            this.state.items.map(item => (
              <p key={item.id} onClick={() => {this.onAddToCart(item);}}>{item.name}</p>)
            )
          }
        </div>
      </div>
    );
  }

  private onAddToCart(item: Item) {
    dispatch(actions.inCart, {item});
  }
}
