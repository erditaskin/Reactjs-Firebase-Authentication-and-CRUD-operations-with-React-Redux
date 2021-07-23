import * as actionType from 'actions/types';

const INITIAL_STATE = {
  products: [],
  product: {},
  message: null
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      }
    case actionType.SET_PRODUCTS_ERROR:
      return {
        ...state,
        message: action.payload
      }
    case actionType.SET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload
      }
    case actionType.SET_PRODUCT_ERROR:
      return {
        ...state,
        message: action.payload
      }
    case actionType.ADD_PRODUCT_SUCCESS:
      state.products.push(action.payload);
      return {
        ...state,
        products: state.products,
        message: null
      }
    case actionType.ADD_PRODUCT_ERROR:
      return {
        ...state,
        message: action.payload
      }
    case actionType.ADD_PRODUCT_PRODUCTS_ERROR:
      return {
        ...state,
        message: action.payload
      }
    case actionType.EDIT_PRODUCT_SUCCESS:
      let products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            id: product.id,
            name: action.payload.name,
            price: action.payload.price,
            desc: action.payload.desc,
            createdAt: product.createdAt
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        products: products,
        message: null
      }
    case actionType.EDIT_PRODUCT_ERROR:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}

export default productReducer;