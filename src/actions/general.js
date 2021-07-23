import * as actionType from 'actions/types';

export const setLoading = (payload) => async dispatch => {
  dispatch({
    type: actionType.SET_LOADING,
    payload: payload
  });
};

export const setAlert = (payload) => async dispatch => {
  dispatch({
    type: actionType.SET_ALERT,
    payload: payload
  });
};

export const clearAlert = () => async dispatch => {
  dispatch({
    type: actionType.CLEAR_ALERT
  });
};
