import {Order} from '../entities';

export interface Action<T> {
  name?: string;
  payload?: T;
}

class Actions {
  orderCreated: Action<{order: Order}> = {};
}

function createActions(actionDefinitions: Actions) {
  return Object.freeze(
    Object.keys(actionDefinitions).reduce((actions, name) => {
      let actionDefinition = actionDefinitions[name];

      actions[name] = Object.create(actionDefinition);
      actions[name].name = name;
      return actions;
    }, new Actions())
  );
}

export const actions: Actions = createActions(new Actions());
