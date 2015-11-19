/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import {StatefulComponent} from '../redux/helpers';
import {State as ReduxState} from '../redux/store';
import {actions} from '../redux/actions';
import {Dish} from '../entities';

type State = {dishes: Dish[]};

export class Dishes extends StatefulComponent<{}, State> {

  getState(state: ReduxState) {
    const newState: State = {
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
  };

    return newState;
  }

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
    super.dispatch(actions.inCart, {dish});
  }
}
