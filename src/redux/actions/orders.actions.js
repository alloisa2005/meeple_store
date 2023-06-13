import { deleteCart } from './cart.actions';
import { addOrderToFirebase, deleteCartFromFirebase } from '../../constants/firebase';
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
