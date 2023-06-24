import { createStore } from 'redux';

// Initial state
const initialState = {
  user: null,
  userDetails: null,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_USER_DETAILS':
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(rootReducer);

export default store;
