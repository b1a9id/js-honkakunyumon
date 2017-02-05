var obj = {x:1, y:2, z:3};

var obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;

// configurable: 属性(writable以外)の変更やプロパティの削除が可能か
// enumerable: 列挙を可能とするか
// value: 値
// writable: 書き換え可能か
// get:ゲッター関数
// set:セッター関数
var obj3 = Object.create(Obj.prototype, {
	x: {value: 1, writable: true, configurable: true, enumerable:true},
	y: {value: 2, writable: true, configurable: true, enumerable:true},
	z: {value: 3, writable: true, configurable: true, enumerable:true}
});