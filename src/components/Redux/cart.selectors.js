import {createSelector} from 'reselect'

const selectCart= state =>state.cart

export const selectCartItems=createSelector(
    [selectCart],
    cart=>cart.item
)

export const selectCartItemCount=createSelector(
    [selectCartItems],
    item=>item.reduce((accumalatedQuantity,item)=>accumalatedQuantity+item.quantity,0)
)

export const selectCartItemTotal=createSelector(
    [selectCartItems],
    item=>item.reduce(
        (accumalatedQuantity,item)=>accumalatedQuantity+item.quantity * item.price  , 0)
)