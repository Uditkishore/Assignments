const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

const getUniqueProductCount = (listOfProducts) => {
  let findCount = listOfProducts.reduce((acc, curr) => {
    if (acc[curr.productName]) {
      acc[curr.productName] = ++acc[curr.productName];
    } else {
      acc[curr.productName] = 1;
    }
    return acc;
  }, {});

  return findCount;
};

let ProductCount = getUniqueProductCount(listOfProducts);
console.log(ProductCount);

const getUniquePrducts = (listOfProducts) => {
  let newArr = [];
  let Products = getUniqueProductCount(listOfProducts);

  for (let key in Products) {
    let filterProduct = listOfProducts.filter((ele) => {
      if (ele.productName == key) {
        return ele;
      }
    });

    let sum = 0;
    filterProduct.map((ele) => (sum += ele.quantity));
    filterProduct[0].quantity = sum;

    newArr.push(filterProduct[0]);
  }

  return newArr;
};

let uniqueProduct = getUniquePrducts(listOfProducts);
console.log(uniqueProduct);
