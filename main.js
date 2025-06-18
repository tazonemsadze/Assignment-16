// 1. შექმენით 5 ელმენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი.
// კონსოლში გამოიტანეთ ამ რიცხვების ჯამი და საშუალო არითმეტიკული

const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, num) => acc + num, 0);
const avg = nums.reduce((acc, num) => (acc = num), 0 / nums.length);
console.log(sum);
console.log(avg);

// 2. შექმენით ობიექტი რომელიმე კომპიუტერის/მობილურის  შესახებ შემდეგი propertyებით: productName (ტექსტი), memory(ტექსტი), და isAvailableAt(მისამართების მასივი). ამ მნიშვნელობების დახმარებით კონსოლში გამოიტანეთ შემდეგი ტექსტი: "(აქ productName ცვლადი) with (აქ memory ცვლადი)  memory is available at (აქ isAvailableAt ცვლადის პირველი მნიშვნელობა (პირველივე მისამართი)) ."

const productInfo = {
  type: "Laptop",
  company: "Lenovo",
  productName: "Thinkpad X1 Carbon",
  memory: "32GB LPDDR5",
  isAvailableAt: ["lenovo.com", "alta.ge", "ee.ge"],
};

const productInfo2 = {
  type: "Smartphone",
  company: "Apple",
  productName: "iPhone SE (2nd generation)",
  memory: "64GB",
  isAvailableAt: ["apple.com", "iplus.ge", "ispace.ge"],
};

console.log(
  `${productInfo.productName} with ${productInfo.memory} memory is available at ${productInfo.isAvailableAt[0]}`
);

console.log(
  `${productInfo2.productName} with ${productInfo2.memory} memory is available at ${productInfo2.isAvailableAt[0]}`
);

// 3. შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი შემდეგი property-ებით: title, author, და yearPublished. კონსოლში გამოიტანეთ შექმნილი მასივი.

const bokklubbenList = [
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    yearPublished: 1866,
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    yearPublished: 1942,
  },
  {
    title: "The Trial",
    author: "Franz Kafka",
    yearPublished: 1925,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    yearPublished: 1605,
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    yearPublished: 1967,
  },
];

console.log(bokklubbenList);
console.log(...bokklubbenList);
