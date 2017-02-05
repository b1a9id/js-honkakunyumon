'use strict';

// var pet1 = {
// 	type: 'スノーホワイトハムスター',
// 	name: 'キラ'
// };
//
// Object.preventExtensions(pet1);
// show(pet1);

// var pet2 = {
// 	type: 'スノーホワイトハムスター',
// 	name: 'キラ'
// };
// Object.seal(pet2);
// show(pet2);

var pet3 = {
	type: 'スノーホワイトハムスター',
	name: 'キラ'
};
Object.freeze(pet3);
show(pet3);

function show(p) {
	p.name = '山田きら';
	delete p.type;
	p.weight = 42;
}