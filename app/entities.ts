export enum OrderStatus {
  Todo = 1,
  Ready = 2,
  Done = 3,
}

export interface Order {
  id: number;
  status: OrderStatus;
  items: OrderItem[];
}

export interface Item {
  id?: number;
  name: string;
  price: number;
}

export interface OrderItem extends Item {
  count: number;
}
