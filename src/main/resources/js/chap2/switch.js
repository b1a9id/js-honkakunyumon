// switch命令の先頭の式と、case句とは、「==」ではなく「===」で比較される
var rank = 'B';
switch (rank) {
    case 'A':
        console.log('Aランクです');
        break;
    case 'B':
        console.log('Bランクです');
        break;
    default:
        console.log('ランク外です。');
        break;
}