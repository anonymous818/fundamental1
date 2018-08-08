var stringValue = 'l;fjdasoi;j*YOHn:LI#;o8#IO*#!Nl'

// var regEx = /[^A-Za-z0-9]/g
// stringValue = stringValue.replace(regEx, '');
// console.log(stringValue);

var regExHuruf = /[^A-Za-z]/g
stringOnly = stringValue.replace(regExHuruf, '');
// console.log(stringOnly);
huruf = stringOnly.split('');
console.log(huruf);

var regExAngka = /[^0-9]/g
numberOnly = stringValue.replace(regExAngka, '');
// console.log(numberOnly);
angka = numberOnly.split('');
console.log(angka);