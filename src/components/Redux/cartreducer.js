import {addItemToCart} from './cart.utils'
const INITIAL_STATE={
    hidden:true,
    cartItems:[
        {
            id: 1,
            name: 'Brown Brim',
            imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
            price: 25,
            quantity:1
        }
    ]
};

const cartreducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden:!state.hidden
            }
        
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        default:return state
    }
}

export default cartreducer