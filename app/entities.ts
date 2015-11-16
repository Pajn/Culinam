export enum OrderStatus {
  Todo = 1,
  Ready = 2,
  Done = 3,
}

export interface Order {
  status: OrderStatus;
  drinks: Drink[];
}

export interface Drink {
   name: String;
}
