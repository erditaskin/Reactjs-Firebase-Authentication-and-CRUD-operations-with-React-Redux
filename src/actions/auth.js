import * as actionType from 'actions/types';
import firebase from "services/firebase";

export const signUp = (email, password, callback) => async dispatch => {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    if (res.user) {
      dispatch({
        type: actionType.SIGNUP_SUCCESS,
        payload: res.user
      });
      callback();
    }
  } catch (err) {
    dispatch({
      type: actionType.SIGNUP_ERROR,
      payload: err.message
    });
    dispatch({
      type: actionType.SET_ALERT,
      payload: {
        show: true,
        variant: 'danger',
        message: err.message
      }
    });
  }
  return false;
};

export const signIn = (email, password, callback) => async dispatch => {
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    if (res.user) {
      dispatch({
        type: actionType.SIGNIN_SUCCESS,
        payload: res.user
      });
      callback();
    }
  } catch (err) {
    dispatch({
      type: actionType.SIGNIN_ERROR,
      payload: err.message
    });
    dispatch({
      type: actionType.SET_ALERT,
      payload: {
        show: true,
        variant: 'danger',
        message: err.message
      }
    });
  }
  return false;
};

export const signOut = () => async dispatch => {
  try {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: actionType.SIGNOUT_SUCCESS
        });
      })
      .catch((err) => {
        dispatch({
          type: actionType.SIGNOUT_ERROR,
          payload: 'Error: Service problem at signing out.' + err
        });
      });
  } catch (err) {
    dispatch({
      type: actionType.SIGNOUT_ERROR,
      payload: err.message
    });
  }
  return false;
};
