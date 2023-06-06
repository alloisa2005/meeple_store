import { orderTypes } from '../types/orders.types';

const initialState = {
  orders: [],
  loading: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case orderTypes.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case orderTypes.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case orderTypes.REMOVE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== action.payload),
      };
    case orderTypes.CLEAR_ORDERS:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
};

export default orderReducer;
