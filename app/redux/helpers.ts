import {Action} from './actions';
import {State, store} from './store';

export interface ActionHandler<T> {
  actionName: string;
  handler: (state, payload: T) => void;
}

export function dispatch<T>(action: Action<T>, payload?: T) {
  store.dispatch({type: action.type, payload});
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

export function stateful(getState: (globalState: State) => Object): ClassDecorator {
  return (target) => {

    return (...args) => {
      const component = new target(...args);
      const {componentWillUnmount} = component;
      let dispose: Function;

      component.componentWillUnmount = componentWillUnmount
        ? (...args) => {
          dispose();
          return componentWillUnmount.apply(component, args);
        }
        : () => dispose();

      component.state = getState(store.getState());
      dispose = store.subscribe(() =>
        component.setState(getState(store.getState())));

      return component;
    };
  };
}
