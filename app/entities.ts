export enum OrderStatus {
  Todo = 1,
  Ready = 2,
  Done = 3,
}

export interface Order {
  status: OrderStatus;
  drinks: Drink[];

}

//TODO: Generalize entities
export interface Dish {
    id: number;
    name: string;
    price: number;
}

export interface Drink {
   name: String;
   price: number;
}
