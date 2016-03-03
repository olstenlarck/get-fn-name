/*!
 * get-fn-name <https://github.com/tunnckoCore/get-fn-name>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var name = require('./index')

test('should throw TypeError if `val` not a function', function (done) {
  function fixture () {
    name(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /Expected a function/)
  done()
})

test('should get function name of regular functions', function (done) {
  test.strictEqual(name(/* istanbul ignore next */function () { return 1 }), null)
  test.strictEqual(name(/* istanbul ignore next */function named () { return 2 }), 'named')
  done()
})

test('should get function name of arrow functions', function (done) {
  test.strictEqual(name(/* istanbul ignore next */() => 111), null)
  test.strictEqual(name(/* istanbul ignore next */() => { return 222 }), null)
  test.strictEqual(name(/* istanbul ignore next */(a, b, c) => a + b + c), null)
  test.strictEqual(name(/* istanbul ignore next */(a, b) => { return a + b }), null)
  done()
})

test('should get correct name of bounded function', function (done) {
  function hello () {}
  var fn = hello.bind({foo: 'bar'})
  test.strictEqual(name(fn), 'hello')
  test.strictEqual(fn.name, 'bound hello')
  done()
})
