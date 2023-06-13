import { orderTypes } from '../types/orders.types';

const initialState = {
  orders: [],
  loading: false,
  selected: null,
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
        loading: false,
      };
    case orderTypes.SELECT_ORDER:
      return {
        ...state,
        selected: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default orderReducer;
