import { curry } from '@yurkimus/curry'

/**
 * @throws {TypeError} "predicate" must be a function
 */
export var arity = curry((length, predicate, ...parameters) => {
  if (!isLike('Function', predicate)) {
    throw new TypeError('"predicate" must be a function')
  }

  return predicate(...parameters.slice(0, length))
}, 3)

export var unary = arity.bind(null, 1)

export var binary = arity.bind(null, 2)
