var data = [4, 9, 16, 25];
var result = data.filter(function (value, inde, arraya) {
    return value % 2 == 1;
});

console.log(result);