import {combineReducers} from 'redux'
import userReducer from './user.reducer'
import cartreducer from './cartreducer'
import shopReducer from './shop.reducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer= combineReducers({
    user:userReducer,
    cart:cartreducer,
    shop:shopReducer
});

export default persistReducer(persistConfig,rootReducer)