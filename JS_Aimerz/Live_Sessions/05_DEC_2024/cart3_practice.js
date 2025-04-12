const productDB = [
  {
    id: 1,
    name: "Mackbook",
    category: "Electronics",
    price: 140000,
  },
  {
    id: 2,
    name: "IPad",
    category: "Electronics",
    price: 110000,
  },
  {
    id: 3,
    name: "IPhone",
    category: "Electronics",
    price: 90000,
  },
  {
    id: 4,
    name: "Google Chromebook",
    category: "Electronics",
    price: 55000,
  },
  {
    id: 5,
    name: "Samsung Galaxy FE",
    category: "Electronics",
    price: 22100,
  },
];

const myCart = [];

const addToCart = (id) => {
  for (let product of productDB) {
    if (product.id === id) {
      myCart.push(product);
    }
  }
};

const removeFromCart = (cart, id) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
    }
  }
};

const cartTotalValue = (cart) => {
  let cartTotal = 0;
  for (let cartItem of cart) {
    cartTotal += cartItem.price;
  }
  console.log(`Your cart total value : Rs.${cartTotal}.`);
};

// addToCart(5);
// console.log(myCart);
// removeFromCart(myCart, 5);
// console.log(myCart);
// cartTotalValue(myCart);

addToCart(4);
addToCart(3);
addToCart(2);
addToCart(5);

console.log(myCart);

removeFromCart(myCart, 5);
removeFromCart(myCart, 3);

console.log(myCart);

cartTotalValue(myCart);
