import * as React from 'react';
import {dispatch, stateful} from '../redux/helpers';
import {actions} from '../redux/actions';
import {Dish} from '../entities';

type State = {dishes: Dish[]};

@stateful(state => ({
  dishes: [{
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
      <div>
      {
        this.state.dishes.map(dish => (
          <p key={dish.id} onClick={() => {this.onAddToCart(dish);}}>{dish.name}</p>)
        )
      }
      </div>
    );
  }

  private onAddToCart(dish: Dish) {
    dispatch(actions.inCart, {dish});
  }
}
