import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import reduxThunk from "redux-thunk";
import generalReducer from "reducers/general";
import authReducer from "reducers/auth";
import productReducer from "reducers/product";

const reducers = combineReducers({
  general : generalReducer,
  auth: authReducer,
  product: productReducer
})


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'product'],
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk));
const persistor = persistStore(store)

export default store;
export { persistor };

