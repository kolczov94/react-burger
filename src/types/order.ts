export type TOrderResponse = {
  success: boolean;
  name: string;
  order: {
    number: number;
  };
};

export type TOrderWsItem = {
  _id: string;
  ingredients: Array<string>;
  status: "done" | "created" | "pending";
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

export type TOrderWsResponse = {
  success: boolean;
  orders: Array<TOrderWsItem>;
  total: number;
  totalToday: number;
};
