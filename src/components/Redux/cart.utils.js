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