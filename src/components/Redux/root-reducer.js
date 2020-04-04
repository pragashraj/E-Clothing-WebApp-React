import {combineReducers} from 'redux'
import userReducer from './user.reducer'
import cartreducer from './cartreducer'
export default combineReducers({
    user:userReducer,
    cart:cartreducer
});