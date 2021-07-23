import * as actionType from 'actions/types';

const INITIAL_STATE = {
  user: null,
  authenticated: false,
  message: null
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionType.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authenticated: false,
        message : null
      }
    case actionType.SIGNUP_ERROR:
      return {
        ...state,
        message: action.payload
      }
    case actionType.SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        message : null
      }
    case actionType.SIGNIN_ERROR:
      return {
        ...state,
        message: action.payload
      }
    case actionType.SIGNOUT_SUCCESS:
      return {
        ...state,
        user: null,
        authenticated: false,
        message : null
      }
    case actionType.SIGNOUT_ERROR:
      return {
        ...state,
        message: action.payload
      }
    default: 
      return state;
  }
}

export default authReducer;