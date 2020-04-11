export const toggleCartHidden=()=>({
    type:'TOGGLE_CART_HIDDEN'
})

export const addItem=item=>{
    return{
        type:"ADDITEM",
        payload:item
    }
    
}

export const removeCartItem = item =>{
    return{
        type:"REMOVEITEM",
        payload:item
    }
}
