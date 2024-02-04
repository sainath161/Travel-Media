import {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure,
  } from './actions';
  
  export const fetchData = () => {
    return async (dispatch) => {
      try {
        dispatch(fetchDataRequest());
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
  };