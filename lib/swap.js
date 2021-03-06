'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Interverti les items de la liste
 * @memberOf List
 * @function swap
 * @param {any} a le premier item a intervertir
 * @param {any} b le deuxième item a intervertir
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const items = [1, 2, 3, 4, 5, 6]
swap(3, 6, items)) // return [1, 2, 6, 4, 5, 3]

const creatures = [
  {name: 'dragon', attack: 10},
  {name: 'troll', attack: 5},
  {name: 'gobelin', attack: 1}]

swap({name: 'troll', attack: 5}, {name: 'dragon', attack: 10}, creatures))
// return [
// {name: 'troll', attack: 5},
// {name: 'dragon', attack: 10},
// {name: 'gobelin', attack: 1}
// ]
*/
var swap = (0, _curry2.default)(function (a, b, arr) {
  var aIndex = arr.findIndex((0, _equal2.default)(a));
  var bIndex = arr.findIndex((0, _equal2.default)(b));
  var newArr = arr.splice(0);
  newArr[aIndex] = b;
  newArr[bIndex] = a;
  return newArr;
});
exports.default = swap;