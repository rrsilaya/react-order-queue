import axios from 'axios';

/**
 * Place all the API calls needed for the `order` entity
 * here. We'll return a promise (provided from axios).
 */

export const getOrders = () => {
  return axios.get('/api/order');
}

export const addOrder = body => {
  return axios.post('/api/order', body);
}

export const updateOrder = (_id, body) => {
  /**
   * Try to supply what's needed here. We'll use the PUT HTTP
   * request to update the status of the order.
   */
}

export const deleteOrder = _id => {
  /**
   * Do this on your own :).
   */
}