import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from './actions';
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return { ...state, loading: true };
      case FETCH_DATA_SUCCESS:
        return { ...state, data: action.payload, loading: false };
      case FETCH_DATA_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default rootReducer;