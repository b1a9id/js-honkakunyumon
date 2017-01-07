var data = [22, 18, 81, 11, 23];
var [x0, x1, x2, x3, x4] = data;
console.log(x0);
console.log(x2);
console.log(x4);

var data2 = [22, 18, 81, 11, 23];
var [y0, y1, ...other] = data2;
console.log(y0);
console.log(y1);
console.log(other);

var x = 1;
var y = 100;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);