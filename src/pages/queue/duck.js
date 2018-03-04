// Action Types
const GET_ORDERS = 'QUEUE/GET_ORDERS';
const DELETE_ORDER = 'QUEUE/DELETE_ORDER';
const UPDATE_ORDER = 'QUEUE/UPDATE_ORDER';

// Action Creators

// Initial State
const initialState = {
  orders: [],

  isGettingOrders: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    

    default:
      return state;
  }
}

export default reducer;