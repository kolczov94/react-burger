import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CLOSE_MODAL_ORDER_DETAIL,
  TOrderActions,
} from "../actions/order";

type TOrderState = {
  number: number;
  name: string;
  orderRequest: boolean;
  orderFailed: boolean;
  isShow: boolean;
};

const initialState: TOrderState = {
  number: 0,
  name: "",
  orderRequest: false,
  orderFailed: false,
  isShow: false,
};

export const orderReducer = (
  state = initialState,
  action: TOrderActions
): TOrderState => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return { ...state, orderRequest: true, orderFailed: false };
    }
    case GET_ORDER_SUCCESS:
      const { number, name } = action.payload;
      return {
        ...state,
        number,
        name,
        isShow: true,
        orderRequest: false,
      };
    case GET_ORDER_FAILED: {
      return { ...state, orderFailed: true, orderRequest: false };
    }
    case CLOSE_MODAL_ORDER_DETAIL: {
      return { ...state, isShow: false };
    }
    default:
      return state;
  }
};
