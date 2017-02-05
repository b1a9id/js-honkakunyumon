var obj = new Object();

// オブジェクトの文字列表現を取得
console.log(obj.toString());
// オブジェクトの基本型表現を取得
console.log(obj.valueOf());

var dat = new Date();
console.log(dat.toString());
console.log(dat.valueOf());

var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
console.log(ary.toString());
console.log(ary.valueOf());

var num = 10;
console.log(num.toString());
console.log(num.valueOf());

var reg = /[0-9]{3}-[0-9]{4}/g;
console.log(reg.toString());
console.log(reg.valueOf());