import {Order} from '../entities';

export interface Action<T> {
  type?: string;
  payload?: T;
}

class Actions {
  orderCreated: Action<{order: Order}> = {};
}

function createActions(actionDefinitions: Actions) {
  return Object.freeze(
    Object.keys(actionDefinitions).reduce((actions, type) => {
      let actionDefinition = actionDefinitions[type];

      actions[type] = Object.create(actionDefinition);
      actions[type].type = type;
      return actions;
    }, new Actions())
  );
}

export const actions: Actions = createActions(new Actions());
