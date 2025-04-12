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

let myCart = [];

const addToCart = (id) => {
  for (let product of productDB) {
    if (product.id === id) {
      myCart.push(product);
    }
  }
};

console.log(myCart);
addToCart(3);
addToCart(5);
addToCart(4);
addToCart(1);
console.log(myCart);

const removeFromCart = (id, cart) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
    }
  }
};

removeFromCart(1, myCart);
removeFromCart(4, myCart);
console.log(myCart);

// --------- Method - 1 :

// const cartTotalValue = (cart) => {
//   let totalAmount = 0;
//   for (let product of cart) {
//     totalAmount += product.price;
//   }
//   console.log(`Your total cart amount is Rs.${totalAmount}.`);
// };

// cartTotalValue(myCart);/

// ------------ Method - 2 :

const totalCartValue = (cart) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  console.log(`Your cart total : Rs.${total}.`);
};

addToCart(2);
console.log(myCart);
totalCartValue(myCart);

// ---------------------------------------------------------------------
