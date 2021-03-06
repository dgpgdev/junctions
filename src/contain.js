import curry from './curry'
import equal from './equal'
/**
 * Test si une liste ou une chaine est vide
 * @memberOf List
 * @function contain
 * @param {array|string} value la valeur a tester
 * @returns {boolean}
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
 *console.log(contain(4, x)) // return true
 *console.log(contain(8, x)) // return false
  */
const contain = curry((value, array) => Array.isArray(value) ? array.some(u => value.some(equal(u))) : array.some(equal(value)))
export default contain
