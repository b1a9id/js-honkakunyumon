var book = { title:"大の大冒険", price:2680, publish:"翔泳社"};
var { price, memo = "なし", title } = book;
console.log(price);
console.log(memo);
console.log(title);