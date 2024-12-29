// utils.js
export const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  