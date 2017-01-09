var array = [5, 25, 10];
// [10, 25, 5]
console.log(array.sort());
// [5, 10, 25]
console.log(array.sort(function (x, y) {
    return x - y;
}));