let productDB = [
  {
    id: 1,
    name: "MacBook",
    price: 120000,
  },
  {
    id: 2,
    name: "Iphone",
    price: 90000,
  },
  {
    id: 3,
    name: "Ipad",
    price: 100000,
  },
  {
    id: 4,
    name: "Asus ZenBook",
    price: 140000,
  },
  {
    id: 5,
    name: "Google Pixel 9",
    price: 85000,
  },
];

const myCart = [];

function addToCart(id) {
  for (let product of productDB) {
    if (product.id === id) {
      myCart.push(product);
      break;
    }
  }
}

const removeFromCart = (id) => {
  for (let i = 0; i < myCart.length; i++) {
    if (myCart[i].id === id) {
      myCart.splice(i, 1);
    }
  }
};

// addToCart(4);
// addToCart(2);
// console.log(myCart);

// removeFromCart(4);
// removeFromCart(2);
// console.log(myCart);

// const calculateTotal = (cart) => {
//   let total = 0;
//   for (let i = 0; i < cart.length; i++) {
//     total += cart[i].price;
//   }
//   console.log(total);
// };

// console.log(myCart);
// addToCart(3);
// addToCart(5);
// console.log(myCart);
// calculateTotal(myCart);
// removeFromCart(3);
// addToCart(1);
// addToCart(1);
// console.log(myCart);
// calculateTotal(myCart);

const calculateTotalCartValue = (cart) => {
  let totalValue = 0;
  for (let product of cart) {
    totalValue += product.price;
  }
  console.log(`Your total cart value is Rs.${totalValue}.`);
};

console.log(myCart);

addToCart(1);
addToCart(3);
addToCart(5);
removeFromCart(5);

console.log(myCart);

calculateTotalCartValue(myCart);
