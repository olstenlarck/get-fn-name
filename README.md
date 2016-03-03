# [get-fn-name][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Get function name with strictness and correctness in mind. Also works for arrow functions and getting correct name of bounded functions. Powered by [fn-name][].

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i get-fn-name --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const getFnName = require('get-fn-name')
```

### [getFnName](index.js#L33)
> Trying to get the name of `val` function.

**Params**

* `val` **{Function}**: Regular or arrow (es2015/es6, also know as `fat arrow`) function.    
* `returns` **{String|null}**: The name of function or `null` otherwise.  

**Example**

```js
var name = require('get-fn-name')

console.log(name(function () { return 1 })) // => null
console.log(name(function named () { return 2 })) // => 'named'

// arrows
console.log(name(() => 3)) // => null
console.log(name(() => { return 4 })) // => null
console.log(name((a, b, c) => a + b + c)) // => null
console.log(name((a, b) => { return a + b })) // => null
```

## Related
* [bind-context](https://www.npmjs.com/package/bind-context): Bind context to a function and preserves her name. Can be… [more](https://www.npmjs.com/package/bind-context) | [homepage](https://github.com/tunnckocore/bind-context)
* [fn-name](https://www.npmjs.com/package/fn-name): Get the name of a named function | [homepage](https://github.com/sindresorhus/fn-name)
* [get-comments](https://www.npmjs.com/package/get-comments): Extract javascript comments on per character basis. Comment object compatible with… [more](https://www.npmjs.com/package/get-comments) | [homepage](https://github.com/tunnckocore/get-comments)
* [get-installed-path](https://www.npmjs.com/package/get-installed-path): Get the installation path of the given package if it is… [more](https://www.npmjs.com/package/get-installed-path) | [homepage](https://github.com/tunnckoCore/get-installed-path)
* [global-modules](https://www.npmjs.com/package/global-modules): The directory used by npm for globally installed npm modules. | [homepage](https://github.com/jonschlinkert/global-modules)
* [global-prefix](https://www.npmjs.com/package/global-prefix): Get the npm global path prefix. | [homepage](https://github.com/jonschlinkert/global-prefix)
* [parse-function](https://www.npmjs.com/package/parse-function): Parse a function, arrow function or string to object with name,… [more](https://www.npmjs.com/package/parse-function) | [homepage](https://github.com/tunnckocore/parse-function)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/get-fn-name/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[fn-name]: https://github.com/sindresorhus/fn-name

[npmjs-url]: https://www.npmjs.com/package/get-fn-name
[npmjs-img]: https://img.shields.io/npm/v/get-fn-name.svg?label=get-fn-name

[license-url]: https://github.com/tunnckoCore/get-fn-name/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/get-fn-name
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/get-fn-name.svg

[travis-url]: https://travis-ci.org/tunnckoCore/get-fn-name
[travis-img]: https://img.shields.io/travis/tunnckoCore/get-fn-name/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/get-fn-name
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/get-fn-name.svg

[david-url]: https://david-dm.org/tunnckoCore/get-fn-name
[david-img]: https://img.shields.io/david/tunnckoCore/get-fn-name.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

