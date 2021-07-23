import * as actionType from 'actions/types';

const INITIAL_STATE = {
  loading: false,
  alert : { 
    show: false,
    variant : null,
    message : null
  }
}

const generalReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case actionType.SET_ALERT:
      return {
        ...state,
        alert: {
          show: action.payload.show,
          variant : action.payload.variant,
          message : action.payload.message
        }
      }
    case actionType.CLEAR_ALERT:
        return {
          ...state,
          alert: {
            show: false,
            variant : null,
            message : null
          }
        }
    default: 
      return state;
  }
}

export default generalReducer;