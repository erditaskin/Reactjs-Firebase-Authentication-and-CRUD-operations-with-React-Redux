import * as actionType from 'actions/types';
import firebase from "services/firebase";


export const getProducts = (callback) => async dispatch => {
  firebase.database().ref('products').once('value')
    .then(snapshot => {
      let products = [];
      snapshot.forEach(item => {
        products.push({
          id: item.key,
          name: item.val().name,
          price: item.val().price,
          desc: item.val().desc,
          createdAt: item.val().createdAt
        });
      });
      dispatch({
        type: actionType.SET_PRODUCTS_SUCCESS,
        payload: products
      });
      callback(products);
    })
    .catch((err) => {
      dispatch({
        type: actionType.SET_PRODUCTS_ERROR,
        payload: err.message
      });
    });
  return false;
};

export const addProduct = (name, price, desc, callback) => async dispatch => {
  firebase.database().ref('products').push({
    createdAt: firebase.database.ServerValue.TIMESTAMP,
    name: name,
    price: price,
    desc: desc
  })
    .then((snapshot) => {
      let createdAt;
      firebase.database().ref('products').once('value')
        .then(products => {
          products.forEach(item => {
            if (item.key === snapshot.key) createdAt = item.val().createdAt;
          });
          dispatch({
            type: actionType.ADD_PRODUCT_SUCCESS,
            payload: {
              id: snapshot.key,
              name: name,
              price: price,
              desc: desc,
              createdAt: createdAt
            }
          });
          callback(snapshot.key);
        })
        .catch((err) => {
          dispatch({
            type: actionType.ADD_PRODUCT_PRODUCTS_ERROR,
            payload: err.message
          });
        });
    })
    .catch((err) => {
      dispatch({
        type: actionType.ADD_PRODUCT_ERROR,
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
    });
  return false;
};



export const editProduct = (name, price, desc, key, callback) => async dispatch => {
  firebase.database().ref('products/' + key).update({
    name: name,
    price: price,
    desc: desc
  }).then(() => {
    dispatch({
      type: actionType.EDIT_PRODUCT_SUCCESS,
      payload: {
        id: key,
        name: name,
        price: price,
        desc: desc
      }
    });
    callback();
  }).catch((err) => {
    dispatch({
      type: actionType.EDIT_PRODUCT_ERROR,
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
  });
  return false;
};