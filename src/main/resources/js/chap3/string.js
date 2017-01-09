var str1 = 'にわにはにわにわとりがいる';
// 0
show(str1.indexOf('にわ'));
// 6
show(str1.lastIndexOf('にわ'));
// 4
show(str1.indexOf('にわ', 3));
// 5
show(str1.lastIndexOf('にわ', 5));
// -1
show(str1.indexOf('ガーデン'));
// true
show(str1.startsWith('にわ'));
// false
show(str1.endsWith('にわ'));
// true
show(str1.includes('にわ'));

var str2 = 'Wingsプロジェクト';
var str3 = '叱られて';
var str4 = '    wings   ';

// s
show(str2.charAt(4));
// プロジ
show(str2.slice(5, 8));
// プロジ
show(str2.substring(5, 8));
// プロジ
show(str2.substr(5, 3));
// ["Wing", "プロジェクト"]
show(str2.split('s'));
// ["に", "にはに", "に"]
show(str1.split('わ', 3));
// 87
show(str2.charCodeAt(0));
// Wing
show(String.fromCharCode(87, 105, 110, 103));
// 134047
show(str3.codePointAt(0));
// 叱
show(String.fromCodePoint(134047));
// Wingsプロジェクト 有限会社
show(str2.concat(' 有限会社'));
// WingsプロジェクトWingsプロジェクト
show(str2.repeat(2));
// wings
show(str4.trim());
// 11
show(str2.length);

function show(str) {
    console.log(str);
}