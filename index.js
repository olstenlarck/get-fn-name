/*!
 * get-fn-name <https://github.com/tunnckoCore/get-fn-name>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * > Trying to get the name of `val` function.
 *
 * **Example**
 *
 * ```js
 * var name = require('get-fn-name')
 *
 * console.log(name(function () { return 1 })) // => null
 * console.log(name(function named () { return 2 })) // => 'named'
 *
 * // arrows
 * console.log(name(() => 3)) // => null
 * console.log(name(() => { return 4 })) // => null
 * console.log(name((a, b, c) => a + b + c)) // => null
 * console.log(name((a, b) => { return a + b })) // => null
 * ```
 *
 * @param  {Function} `val` Regular or arrow (es2015/es6, also know as `fat arrow`) function.
 * @return {String|null} The name of function or `null` otherwise.
 * @api public
 */

module.exports = function getFnName (val) {
  val = require('fn-name')(val)
  val = val ? val.replace(/^bound/, '') : null
  val = val ? val.trim() : null
  return val
}
