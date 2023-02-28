/* eslint-disable no-console */
// eslint-disable-next-line prefer-const
let checkStringLen = function (str, len) {
  if (str.length === len) {
    return true;
  }
  return false;
};

// eslint-disable-next-line prefer-const
let checkStringPalindrom = function (str) {
  str.toLowerCase();
  const reversedStr = str.split('').reverse().join('');
  if (str === reversedStr){
    return true;
  }
  return false;
};

// eslint-disable-next-line prefer-const
let getNumberFromStr = function (str) {
  let number = '';
  for (let i = 0; i < str.length; i ++){
    if (!isNaN(Number(str[i])) && (str[i]) !== ' '){
      number += String(str[i]);
    }
  }
  return number;
};

// eslint-disable-next-line prefer-const
let stringAdder = function (strIn, len, strAdd) {
  if (strIn.length >= len) {
    return strIn;
  }

  while (strIn.length < len) {
    if (strAdd.length + strIn.length > len){
      strAdd = strAdd.slice(0, len - strIn.length);
    }
    strIn = strAdd + strIn;
  }
  return strIn;
};

// eslint-disable-next-line no-console
// console.log(checkStringLen('word', 4));
// console.log(checkStringPalindrom('abba abba'));
// console.log(getNumberFromStr('123 r 34    dj,.df/df66'));
// console.log(stringAdder('1', 2, '0'));
// console.log(stringAdder('1', 4, '0'));
// console.log(stringAdder('q', 4, 'werty'));
// console.log(stringAdder('q', 4, 'we'));
// console.log(stringAdder('qwerty', 4, '0'));
