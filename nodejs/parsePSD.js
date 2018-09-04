    var PSD = require('psd');
var psd = PSD.fromFile("./psd/Cute_bullet.psd");
psd.parse();
 
console.log(psd.tree());
console.log(psd.tree().childrenAtPath('A/B/C')[0]);
 