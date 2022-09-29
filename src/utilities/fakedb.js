// // use local storage to manage cart data
// const addToDatabase = (id) => {
//   let breakTime = {};

//   //get the shopping cart from local storage
//   const storedCart = localStorage.getItem("break-time");
//   if (storedCart) {
//     breakTime = JSON.parse(storedCart);
//   }

//   // add quantity
//   const quantity = breakTime[id];
//   if (quantity) {
//     const newQuantity = quantity + 1;
//     breakTime[id] = newQuantity;
//   } else {
//     breakTime[id] = 1;
//   }
//   localStorage.setItem("break-time", JSON.stringify(breakTime));
// };

// const getStoredCart = () => {
//   let shoppingCart = {};

//   //get the shopping cart from local storage
//   const storedCart = localStorage.getItem("break-time");
//   if (storedCart) {
//     shoppingCart = JSON.parse(storedCart);
//   }
//   return shoppingCart;
// };

// const removeFromDb = (id) => {
//   const storedCart = localStorage.getItem("break-time");
//   if (storedCart) {
//     const shoppingCart = JSON.parse(storedCart);
//     if (id in shoppingCart) {
//       delete shoppingCart[id];
//       localStorage.setItem("break-time", JSON.stringify(shoppingCart));
//     }
//   }
// };

// const deleteShoppingCart = () => {
//   localStorage.removeItem("break-time");
// };

// export {
//   addToDatabase as addToDb,
//   getStoredCart,
//   removeFromDb,
//   deleteShoppingCart,
// };

const addToDatabase = (value) => {
  localStorage.setItem("break-time", value);
};
const storValue = () => {
  let breakTime = 0;
  const storeDb = localStorage.getItem("break-time");
  if (storeDb) {
    breakTime = storeDb;
  }
  return breakTime;
};
export { addToDatabase, storValue };
