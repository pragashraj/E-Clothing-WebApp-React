export const addItemToCart = (item, cartItemToAdd) => {
    const existingCartItem = item.find(
      item => item.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return item.map(item =>
        item.id === cartItemToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
  
    return [...item, { ...cartItemToAdd, quantity: 1 }];
  };

  
  export const removeSingleItem=(item,itemToRemove)=>{
      const existingItem=item.find(
        item=>item.id===itemToRemove.id
      )
      
      if(existingItem.quantity===1){
        return item.filter(cartItem=>cartItem.id !== itemToRemove.id)
      }

      return item.map(
        cartItem=>cartItem.id===itemToRemove.id ? {...cartItem,quantity:cartItem.quantity-1} : cartItem
      )
  }