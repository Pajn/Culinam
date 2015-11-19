export enum OrderStatus {
  Todo = 1,
  Ready = 2,
  Done = 3,
}

export interface Order {
  id: number;
  status: OrderStatus;
  drinks: Drink[];
  dishes: Dish[];
}

//TODO: Generalize entities
export interface Dish {
    id: number;
    name: string;
    price: number;
    count?: number;
}

export interface Drink {
   name: String;
   price: number;
}
