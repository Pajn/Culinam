import {Component} from 'react';
import {Action} from './actions';
import {State, store} from './store';

export interface ActionHandler<T> {
  actionName: string;
  handler: (state, payload: T) => void;
}

export function when<T>(action: Action<T>, callback: (state, payload: T) => void) {
  return {
    actionName: action.type,
    handler: callback,
  };
}

export function createReducer<S extends {}>(
    initialState: S,
    ...actionHandlers: ActionHandler<any>[]) {
  return (state, action) => {
    for (const actionHandler of actionHandlers) {
      if (action.type === actionHandler.actionName) {
        const copy = Object.assign({}, state);
        const updated = actionHandler.handler(copy, action.payload);
        if (!updated) {
          return copy;
        }
      }
    }

    return state || initialState;
  };
}

export abstract class StatefulComponent<P, S> extends Component<P, S> {
  store = store;
  subscriptionDisposer: Function;

  abstract getState(state: State);

  constructor(props) {
    super(props);
    this.state = this.getState(store.getState());
    this.subscriptionDisposer = store.subscribe(() =>
      this.setState(this.getState(store.getState())));
  }

  componentWillUnmount() {
    this.subscriptionDisposer();
  }

  dispatch<T>(action: Action<T>, payload?: T) {
    store.dispatch({type: action.type, payload});
  }
}
