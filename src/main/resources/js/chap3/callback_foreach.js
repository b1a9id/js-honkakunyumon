var data = [2, 3, 4, 5];
/**
 * value:要素の値
 * index;インデックス番号
 * array:元の配列
 */
data.forEach(function (value, index, array) {
    console.log(index);
    console.log(value * value);
    console.log(array);
})