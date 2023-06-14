import { deleteCart } from './cart.actions';
import {
  addOrderToFirebase,
  deleteCartFromFirebase,
  getOrdersFromFirebase,
} from '../../constants/firebase';
import { orderTypes } from '../types/orders.types';

export const addOrderAsync = (userId, order) => {
  return async (dispatch) => {
    try {
      await addOrderToFirebase(userId, order);
      await deleteCartFromFirebase(userId);

      dispatch(addOrder(order));
      dispatch(deleteCart());
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };
};

export const addOrder = (order) => {
  return {
    type: orderTypes.ADD_ORDER,
    payload: order,
  };
};

export const getOrdersAsync = (userId) => {
  return async (dispatch) => {
    try {
      const orders = await getOrdersFromFirebase(userId);
      dispatch(getOrders(orders));
    } catch (error) {
      dispatch(getOrders([]));
    }
  };
};

export const getOrders = (orders) => {
  return {
    type: orderTypes.GET_ORDERS,
    payload: orders,
  };
};

export const selectOrder = (order) => {
  return {
    type: orderTypes.SELECT_ORDER,
    payload: order,
  };
};
