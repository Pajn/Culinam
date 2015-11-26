export enum OrderStatus {
  Todo = 1,
  Ready = 2,
  Done = 3,
}

export interface Order {
  id: number;
  status: OrderStatus;
  items: Item[];
}

export interface Item {
    id: number;
    name: string;
    price: number;
    count?: number;
}
