import {addItemToCart,removeSingleItem} from './cart.utils'
const INITIAL_STATE={
    hidden:true,
    item:[]
};

const cartreducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden:!state.hidden
            }
        
        case "ADDITEM":
            return{
                ...state,
                item:addItemToCart(state.item,action.payload)
            }

        case "REMOVEITEM":
            return{
                ...state,
                item:state.item.filter(item=>item.id !== action.payload.id)
            }

        case "REMOVESINGLEITEM":
            return{
                ...state,
                item:removeSingleItem(state.item,action.payload)
            }

        default:return state
    }
}

export default cartreducer