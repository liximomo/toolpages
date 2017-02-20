module.exports =
webpackJsonp([1],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(824),
    listCacheDelete = __webpack_require__(825),
    listCacheGet = __webpack_require__(826),
    listCacheHas = __webpack_require__(827),
    listCacheSet = __webpack_require__(828);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(128);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(822);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(59);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(129);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 128:
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(91),
    isObjectLike = __webpack_require__(74);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(781),
    baseKeys = __webpack_require__(794),
    isArrayLike = __webpack_require__(92);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(59),
    root = __webpack_require__(40);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(829),
    mapCacheDelete = __webpack_require__(830),
    mapCacheGet = __webpack_require__(831),
    mapCacheHas = __webpack_require__(832),
    mapCacheSet = __webpack_require__(833);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 179:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(41),
    isSymbol = __webpack_require__(129);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 181:
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(788),
    isObjectLike = __webpack_require__(74);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 183:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(426), __esModule: true };

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = supportsProtoAssignment;
var x = {};
var y = { supports: true };
try {
  x.__proto__ = y;
} catch (err) {}

function supportsProtoAssignment() {
  return x.supports || false;
};

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(178),
    setCacheAdd = __webpack_require__(841),
    setCacheHas = __webpack_require__(842);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(123),
    stackClear = __webpack_require__(846),
    stackDelete = __webpack_require__(847),
    stackGet = __webpack_require__(848),
    stackHas = __webpack_require__(849),
    stackSet = __webpack_require__(850);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 382:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 383:
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(385),
    eq = __webpack_require__(128);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(394);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 386:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(393),
    toKey = __webpack_require__(127);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(789),
    isObjectLike = __webpack_require__(74);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(795),
    baseMatchesProperty = __webpack_require__(796),
    identity = __webpack_require__(181),
    isArray = __webpack_require__(41),
    property = __webpack_require__(862);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(181),
    overRest = __webpack_require__(840),
    setToString = __webpack_require__(844);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 391:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 392:
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(41),
    isKey = __webpack_require__(180),
    stringToPath = __webpack_require__(852),
    toString = __webpack_require__(868);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(59);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(380),
    arraySome = __webpack_require__(782),
    cacheHas = __webpack_require__(392);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(93);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 399:
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(396);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 400:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(40),
    stubFalse = __webpack_require__(864);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)(module)))

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(91),
    isObject = __webpack_require__(93);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(793),
    baseUnary = __webpack_require__(391),
    nodeUtil = __webpack_require__(837);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.router = undefined;

var _regenerator = __webpack_require__(88);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var render = exports.render = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(props) {
    var onError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : renderErrorComponent;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return doRender(props);

          case 3:
            _context.next = 9;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context['catch'](0);
            _context.next = 9;
            return onError(_context.t0);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 5]]);
  }));

  return function render(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var renderErrorComponent = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(err) {
    var pathname, query, props;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pathname = router.pathname, query = router.query;
            _context2.next = 3;
            return (0, _utils.loadGetInitialProps)(ErrorComponent, { err: err, pathname: pathname, query: query });

          case 3:
            props = _context2.sent;
            _context2.next = 6;
            return doRender({ Component: ErrorComponent, props: props, err: err });

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function renderErrorComponent(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var doRender = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(_ref5) {
    var Component = _ref5.Component,
        props = _ref5.props,
        err = _ref5.err,
        emitter = _ref5.emitter;

    var _pathname, _query, appProps;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!props && Component && Component !== ErrorComponent && lastAppProps.Component === ErrorComponent)) {
              _context3.next = 5;
              break;
            }

            // fetch props if ErrorComponent was replaced with a page component by HMR
            _pathname = router.pathname, _query = router.query;
            _context3.next = 4;
            return (0, _utils.loadGetInitialProps)(Component, { err: err, pathname: _pathname, query: _query });

          case 4:
            props = _context3.sent;

          case 5:

            if (emitter) {
              emitter.emit('before-reactdom-render', { Component: Component });
            }

            Component = Component || lastAppProps.Component;
            props = props || lastAppProps.props;

            appProps = { Component: Component, props: props, err: err, router: router, headManager: headManager };

            _reactDom2.default.render((0, _react.createElement)(_app2.default, appProps), container);

            if (emitter) {
              emitter.emit('after-reactdom-render', { Component: Component });
            }

            lastAppProps = appProps;

          case 12:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function doRender(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var _react = __webpack_require__(1);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__(209);

var _headManager = __webpack_require__(649);

var _headManager2 = _interopRequireDefault(_headManager);

var _css = __webpack_require__(651);

var _router = __webpack_require__(347);

var _app = __webpack_require__(650);

var _app2 = _interopRequireDefault(_app);

var _evalScript = __webpack_require__(131);

var _evalScript2 = _interopRequireDefault(_evalScript);

var _utils = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    _window$__NEXT_DATA__ = _window.__NEXT_DATA__,
    component = _window$__NEXT_DATA__.component,
    errorComponent = _window$__NEXT_DATA__.errorComponent,
    props = _window$__NEXT_DATA__.props,
    ids = _window$__NEXT_DATA__.ids,
    err = _window$__NEXT_DATA__.err,
    pathname = _window$__NEXT_DATA__.pathname,
    query = _window$__NEXT_DATA__.query;


var Component = (0, _evalScript2.default)(component).default;
var ErrorComponent = (0, _evalScript2.default)(errorComponent).default;
var lastAppProps = void 0;

var router = exports.router = (0, _router.createRouter)(pathname, query, {
  Component: Component,
  ErrorComponent: ErrorComponent,
  err: err
});

var headManager = new _headManager2.default();
var container = document.getElementById('__next');

exports.default = function (onError) {
  var emitter = new _events.EventEmitter();
  if (ids && ids.length) (0, _css.rehydrate)(ids);

  router.subscribe(function (_ref) {
    var Component = _ref.Component,
        props = _ref.props,
        err = _ref.err;

    render({ Component: Component, props: props, err: err, emitter: emitter }, onError);
  });

  render({ Component: Component, props: props, err: err, emitter: emitter }, onError);

  return emitter;
};

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = __webpack_require__(660);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _defineProperty = __webpack_require__(85);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _slicedToArray2 = __webpack_require__(114);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getOwnPropertyDescriptors = __webpack_require__(661);

var _getOwnPropertyDescriptors2 = _interopRequireDefault(_getOwnPropertyDescriptors);

var _entries = __webpack_require__(351);

var _entries2 = _interopRequireDefault(_entries);

var _getIterator2 = __webpack_require__(111);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patched = false; // monkeypatch React for fixing https://github.com/facebook/react/issues/2461
// based on https://gist.github.com/Aldredcz/4d63b0a9049b00f54439f8780be7f0d8

exports.default = function () {
  var handleError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  if (patched) {
    throw new Error('React is already monkeypatched');
  }

  patched = true;

  var createElement = _react2.default.createElement;


  _react2.default.createElement = function (Component) {
    if (typeof Component === 'function') {
      // We need to get the prototype which has the render method.
      // It's possible to have render inside a deeper prototype due to
      // class extending.
      var prototypeWithRender = getRenderPrototype(Component);
      var _Component = Component,
          prototype = _Component.prototype;

      // assumes it's a class component if render method exists.

      var isClassComponent = Boolean(prototypeWithRender) ||
      // subclass of React.Component or PureComponent with no render method.
      // There's no render method in prototype
      // when it's created with class-properties.
      prototype instanceof _react2.default.Component || prototype instanceof _react2.default.PureComponent;

      var dynamicWrapper = withWrapOwnRender;

      if (isClassComponent) {
        if (prototypeWithRender) {
          // Sometimes render method is created with only a getter.
          // In that case we can't override it with a prototype. We need to
          // do it dynamically.
          if (canOverrideRender(prototypeWithRender)) {
            prototypeWithRender.render = wrapRender(prototypeWithRender.render);
          } else {
            dynamicWrapper = withWrapRenderAlways;
          }
        }

        // wrap the render method in runtime when the component initialized
        // for class-properties.
        Component = wrap(Component, dynamicWrapper);
      } else {
        // stateless component
        Component = wrapRender(Component);
      }
    }

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return createElement.call.apply(createElement, [this, Component].concat(rest));
  };

  var componentPrototype = _react2.default.Component.prototype;
  var forceUpdate = componentPrototype.forceUpdate;


  componentPrototype.forceUpdate = function () {
    if (this.render) {
      this.render = wrapRender(this.render);
    }

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return forceUpdate.apply(this, args);
  };

  function wrapRender(render) {
    return wrap(render, withHandleError);
  }

  function withHandleError(fn) {
    try {
      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return fn.apply(this, args);
    } catch (err) {
      handleError(err);
      return null;
    }
  }

  function withWrapOwnRender(fn) {
    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    var result = fn.apply(this, args);
    if (this.render && this.hasOwnProperty('render')) {
      this.render = wrapRender(this.render);
    }
    return result;
  }

  function withWrapRenderAlways(fn) {
    for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }

    var result = fn.apply(this, args);
    if (this.render) {
      Object.defineProperty(this, 'render', { writable: true, value: wrapRender(this.render) });
    }
    return result;
  }
};

function wrap(fn, around) {
  if (fn.__wrapped) {
    return fn.__wrapped;
  }

  var _fn = function _fn() {
    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return around.call.apply(around, [this, fn].concat(args));
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)((0, _entries2.default)((0, _getOwnPropertyDescriptors2.default)(fn))), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = (0, _slicedToArray3.default)(_step.value, 2),
          k = _step$value[0],
          d = _step$value[1];

      try {
        (0, _defineProperty2.default)(_fn, k, d);
      } catch (e) {}
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  _fn.__wrapped = fn.__wrapped = _fn;

  return _fn;
}

function getRenderPrototype(Component) {
  var proto = Component.prototype;

  while (true) {
    if (proto.hasOwnProperty('render')) return proto;
    proto = (0, _getPrototypeOf2.default)(proto);
    if (!proto) return null;
  }
}

function canOverrideRender(prototype) {
  var descriptor = (0, _getOwnPropertyDescriptor2.default)(prototype, 'render');
  if (!descriptor) return true;

  return descriptor.writable;
}

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(758);


/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(473);
module.exports = __webpack_require__(16).Object.entries;

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(466);
var $Object = __webpack_require__(16).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(474);
module.exports = __webpack_require__(16).Object.getOwnPropertyDescriptors;

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(54)
  , toIObject = __webpack_require__(33)
  , isEnum    = __webpack_require__(77).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN     = __webpack_require__(139)
  , gOPS     = __webpack_require__(101)
  , anObject = __webpack_require__(31)
  , Reflect  = __webpack_require__(22).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(33)
  , $getOwnPropertyDescriptor = __webpack_require__(100).f;

__webpack_require__(140)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export  = __webpack_require__(23)
  , $entries = __webpack_require__(453)(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = __webpack_require__(23)
  , ownKeys        = __webpack_require__(454)
  , toIObject      = __webpack_require__(33)
  , gOPD           = __webpack_require__(100)
  , createProperty = __webpack_require__(189);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(792),
    getValue = __webpack_require__(813);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(94);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_TITLE = '';

var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

var HeadManager = function () {
  function HeadManager() {
    (0, _classCallCheck3.default)(this, HeadManager);

    this.updatePromise = null;
  }

  (0, _createClass3.default)(HeadManager, [{
    key: 'updateHead',
    value: function updateHead(head) {
      var _this = this;

      var promise = this.updatePromise = _promise2.default.resolve().then(function () {
        if (promise !== _this.updatePromise) return;

        _this.updatePromise = null;
        _this.doUpdateHead(head);
      });
    }
  }, {
    key: 'doUpdateHead',
    value: function doUpdateHead(head) {
      var _this2 = this;

      var tags = {};
      head.forEach(function (h) {
        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });

      this.updateTitle(tags.title ? tags.title[0] : null);

      var types = ['meta', 'base', 'link', 'style', 'script'];
      types.forEach(function (type) {
        _this2.updateElements(type, tags[type] || []);
      });
    }
  }, {
    key: 'updateTitle',
    value: function updateTitle(component) {
      var title = void 0;
      if (component) {
        var children = component.props.children;

        title = typeof children === 'string' ? children : children.join('');
      } else {
        title = DEFAULT_TITLE;
      }
      if (title !== document.title) document.title = title;
    }
  }, {
    key: 'updateElements',
    value: function updateElements(type, components) {
      var headEl = document.getElementsByTagName('head')[0];
      var oldTags = Array.prototype.slice.call(headEl.querySelectorAll(type + '.next-head'));
      var newTags = components.map(reactElementToDOM).filter(function (newTag) {
        for (var i = 0, len = oldTags.length; i < len; i++) {
          var oldTag = oldTags[i];
          if (oldTag.isEqualNode(newTag)) {
            oldTags.splice(i, 1);
            return false;
          }
        }
        return true;
      });

      oldTags.forEach(function (t) {
        return t.parentNode.removeChild(t);
      });
      newTags.forEach(function (t) {
        return headEl.appendChild(t);
      });
    }
  }]);
  return HeadManager;
}();

exports.default = HeadManager;


function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;

  var el = document.createElement(type);
  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue;

    var attr = DOMAttributeNames[p] || p.toLowerCase();
    el.setAttribute(attr, props[p]);
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : children.join('');
  }
  return el;
}

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(752);

var _shallowEquals = __webpack_require__(348);

var _shallowEquals2 = _interopRequireDefault(_shallowEquals);

var _utils = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorDebug = process.env.NODE_ENV === 'production' ? null : __webpack_require__(652).default;

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var headManager = this.props.headManager;

      return { headManager: headManager };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          props = _props.props,
          err = _props.err,
          router = _props.router;

      var containerProps = { Component: Component, props: props, router: router };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Container, containerProps),
        ErrorDebug && err ? _react2.default.createElement(ErrorDebug, { error: err }) : null
      );
    }
  }]);
  return App;
}(_react.Component);

App.childContextTypes = {
  headManager: _react.PropTypes.object
};
exports.default = App;

var Container = function (_Component2) {
  (0, _inherits3.default)(Container, _Component2);

  function Container() {
    (0, _classCallCheck3.default)(this, Container);
    return (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).apply(this, arguments));
  }

  (0, _createClass3.default)(Container, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      // need this check not to rerender component which has already thrown an error
      return !(0, _shallowEquals2.default)(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          Component = _props2.Component,
          props = _props2.props,
          router = _props2.router;

      var url = createUrl(router);

      // includes AppContainer which bypasses shouldComponentUpdate method
      // https://github.com/gaearon/react-hot-loader/issues/442
      return _react2.default.createElement(
        _reactHotLoader.AppContainer,
        { errorReporter: ErrorDebug },
        _react2.default.createElement(Component, (0, _extends3.default)({}, props, { url: url }))
      );
    }
  }]);
  return Container;
}(_react.Component);

function createUrl(router) {
  return {
    query: router.query,
    pathname: router.pathname,
    back: function back() {
      return router.back();
    },
    push: function push(url, as) {
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      (0, _utils.warn)('Warning: \'url.pushTo()\' is deprecated. Please use \'url.push()\' instead.');
      var pushRoute = as ? href : null;
      var pushUrl = as || href;

      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      (0, _utils.warn)('Warning: \'url.replaceTo()\' is deprecated. Please use \'url.replace()\' instead.');
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;

      return router.replace(replaceRoute, replaceUrl);
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray2 = __webpack_require__(114);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(351);

var _entries2 = _interopRequireDefault(_entries);

var _getIterator2 = __webpack_require__(111);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(113);

var _keys2 = _interopRequireDefault(_keys);

var _utils = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = __webpack_require__(152);
// Needed because of the mutation below
delete __webpack_require__.c[/*require.resolve*/(152)];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = (0, _getIterator3.default)((0, _entries2.default)(css)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = (0, _slicedToArray3.default)(_step.value, 2),
        k = _step$value[0],
        v = _step$value[1];

    if (typeof v === 'function') {
      css[k] = (0, _utils.deprecated)(v, 'Warning: \'next/css\' is deprecated. Please refer to the migration guide: https://github.com/zeit/next.js/wiki/Migrating-from-next-css');
    }
  }

  /**
   * Expose style as default and the whole object as properties
   * so it can be used as follows:
   *
   * import css, { merge } from 'next/css'
   * css({ color: 'red' })
   * merge({ color: 'green' })
   * css.merge({ color: 'blue' })
   */
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

css.default = css.style;
(0, _keys2.default)(css).forEach(function (key) {
  if (key !== 'default') {
    css.default[key] = css[key];
  }
});

module.exports = css;

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ansiHtml = __webpack_require__(349);

var _ansiHtml2 = _interopRequireDefault(_ansiHtml);

var _head = __webpack_require__(346);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var error = _ref.error,
      _ref$error = _ref.error,
      name = _ref$error.name,
      message = _ref$error.message,
      module = _ref$error.module;
  return _react2.default.createElement(
    'div',
    { style: styles.errorDebug },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' })
    ),
    module ? _react2.default.createElement(
      'div',
      { style: styles.heading },
      'Error in ',
      module.rawRequest
    ) : null,
    name === 'ModuleBuildError' ? _react2.default.createElement('pre', { style: styles.message, dangerouslySetInnerHTML: { __html: (0, _ansiHtml2.default)(encodeHtml(message)) } }) : _react2.default.createElement(StackTrace, { error: error })
  );
};

var StackTrace = function StackTrace(_ref2) {
  var _ref2$error = _ref2.error,
      name = _ref2$error.name,
      message = _ref2$error.message,
      stack = _ref2$error.stack;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: styles.heading },
      name && message && name + ': ' + message
    ),
    _react2.default.createElement(
      'pre',
      { style: styles.message },
      stack
    )
  );
};

var styles = {
  errorDebug: {
    background: '#a6004c',
    boxSizing: 'border-box',
    overflow: 'auto',
    padding: '15px',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 9999
  },

  message: {
    fontFamily: '"SF Mono", "Roboto Mono", "Fira Mono", consolas, menlo-regular, monospace',
    fontSize: '13px',
    color: '#fbe7f1',
    margin: 0,
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },

  heading: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#ff84bf',
    marginBottom: '20px'
  }
};

var encodeHtml = function encodeHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

// see color definitions of babel-code-frame:
// https://github.com/babel/babel/blob/master/packages/babel-code-frame/src/index.js

_ansiHtml2.default.setColors({
  reset: ['fff', 'a6004c'],
  darkgrey: 'e54590',
  yellow: 'ee8cbb',
  green: 'f2a2c7',
  magenta: 'fbe7f1',
  blue: 'fff',
  cyan: 'ef8bb9',
  red: 'fff'
});

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(427), __esModule: true };

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(428), __esModule: true };

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = deepForceUpdate;
function traverseRenderedChildren(internalInstance, callback, argument) {
  callback(internalInstance, argument);

  if (internalInstance._renderedComponent) {
    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
  } else {
    for (var key in internalInstance._renderedChildren) {
      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
      }
    }
  }
}

function setPendingForceUpdate(internalInstance) {
  if (internalInstance._pendingForceUpdate === false) {
    internalInstance._pendingForceUpdate = true;
  }
}

function forceUpdateIfPending(internalInstance) {
  if (internalInstance._pendingForceUpdate === true) {
    var publicInstance = internalInstance._instance;
    var updater = publicInstance.updater;

    if (typeof publicInstance.forceUpdate === 'function') {
      publicInstance.forceUpdate();
    } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
      updater.enqueueForceUpdate(publicInstance);
    }
  }
}

function deepForceUpdate(instance) {
  var internalInstance = instance._reactInternalInstance;
  traverseRenderedChildren(internalInstance, setPendingForceUpdate);
  traverseRenderedChildren(internalInstance, forceUpdateIfPending);
}

module.exports = exports['default'];

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(756);


/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var deepForceUpdate = __webpack_require__(677);
var Redbox = __webpack_require__(894).default;
var Component = React.Component;

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer(props) {
    _classCallCheck(this, AppContainer);

    var _this = _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).call(this, props));

    _this.state = { error: null };
    return _this;
  }

  _createClass(AppContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        console.error('React Hot Loader: It appears that "react-hot-loader/patch" ' + 'did not run immediately before the app started. Make sure that it ' + 'runs before any other code. For example, if you use Webpack, ' + 'you can add "react-hot-loader/patch" as the very first item to the ' + '"entry" array in its config. Alternatively, you can add ' + 'require("react-hot-loader/patch") as the very first line ' + 'in the application code, before any other imports.');
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      // Hot reload is happening.
      // Retry rendering!
      this.setState({
        error: null
      });
      // Force-update the whole tree, including
      // components that refuse to update.
      deepForceUpdate(this);
    }

    // This hook is going to become official in React 15.x.
    // In 15.0, it only catches errors on initial mount.
    // Later it will work for updates as well:
    // https://github.com/facebook/react/pull/6020

  }, {
    key: 'unstable_handleError',
    value: function unstable_handleError(error) {
      // eslint-disable-line camelcase
      this.setState({
        error: error
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var error = this.state.error;

      if (error) {
        return React.createElement(this.props.errorReporter, { error: error });
      }

      if (this.props.component) {
        return React.createElement(this.props.component, this.props.props);
      }

      return React.Children.only(this.props.children);
    }
  }]);

  return AppContainer;
}(Component);

AppContainer.propTypes = {
  component: function component(props) {
    if (props.component) {
      return new Error('Passing "component" prop to <AppContainer /> is deprecated. ' + 'Replace <AppContainer component={App} /> with <AppContainer><App /></AppContainer>.');
    }

    return undefined;
  },
  props: function props(_props) {
    if (_props.props) {
      return new Error('Passing "props" prop to <AppContainer /> is deprecated. ' + 'Replace <AppContainer component={App} props={{ myProp: myValue }} /> ' + 'with <AppContainer><App myProp={myValue} /></AppContainer>.');
    }

    return undefined;
  },
  children: function children(props) {
    if (React.Children.count(props.children) !== 1) {
      return new Error('Invalid prop "children" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');
    }

    return undefined;
  }
};

AppContainer.defaultProps = {
  errorReporter: Redbox
};

module.exports = AppContainer;

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* eslint-disable global-require */



if (!module.hot || process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(755);
} else {
  module.exports = __webpack_require__(753);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var Component = React.Component;

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
  }

  _createClass(AppContainer, [{
    key: 'render',
    value: function render() {
      if (this.props.component) {
        return React.createElement(this.props.component, this.props.props);
      }

      return React.Children.only(this.props.children);
    }
  }]);

  return AppContainer;
}(Component);

module.exports = AppContainer;

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AppContainer = __webpack_require__(754);

module.exports = function warnAboutIncorrectUsage(arg) {
  if (this && this.callback) {
    throw new Error('React Hot Loader: The Webpack loader is now exported separately. ' + 'If you use Babel, we recommend that you remove "react-hot-loader" ' + 'from the "loaders" section of your Webpack configuration altogether, ' + 'and instead add "react-hot-loader/babel" to the "plugins" section ' + 'of your .babelrc file. ' + 'If you prefer not to use Babel, replace "react-hot-loader" or ' + '"react-hot" with "react-hot-loader/webpack" in the "loaders" section ' + 'of your Webpack configuration.');
  } else if (arg && arg.types && arg.types.IfStatement) {
    throw new Error('React Hot Loader: The Babel plugin is exported separately. ' + 'Replace "react-hot-loader" with "react-hot-loader/babel" ' + 'in the "plugins" section of your .babelrc file. ' + 'While we recommend the above, if you prefer not to use Babel, ' + 'you may remove "react-hot-loader" from the "plugins" section of ' + 'your .babelrc file altogether, and instead add ' + '"react-hot-loader/webpack" to the "loaders" section of your Webpack ' + 'configuration.');
  } else {
    throw new Error('React Hot Loader does not have a default export. ' + 'If you use the import statement, make sure to include the ' + 'curly braces: import { AppContainer } from "react-hot-loader". ' + 'If you use CommonJS, make sure to read the named export: ' + 'require("react-hot-loader").AppContainer.');
  }
};

module.exports.AppContainer = AppContainer;

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var React = __webpack_require__(1);
var createProxy = __webpack_require__(770).default;
var global = __webpack_require__(522);

var ComponentMap = function () {
  function ComponentMap(useWeakMap) {
    _classCallCheck(this, ComponentMap);

    if (useWeakMap) {
      this.wm = new WeakMap();
    } else {
      this.slots = {};
    }
  }

  _createClass(ComponentMap, [{
    key: 'getSlot',
    value: function getSlot(type) {
      var key = type.displayName || type.name || 'Unknown';
      if (!this.slots[key]) {
        this.slots[key] = [];
      }
      return this.slots[key];
    }
  }, {
    key: 'get',
    value: function get(type) {
      if (this.wm) {
        return this.wm.get(type);
      }

      var slot = this.getSlot(type);
      for (var i = 0; i < slot.length; i++) {
        if (slot[i].key === type) {
          return slot[i].value;
        }
      }

      return undefined;
    }
  }, {
    key: 'set',
    value: function set(type, value) {
      if (this.wm) {
        this.wm.set(type, value);
      } else {
        var slot = this.getSlot(type);
        for (var i = 0; i < slot.length; i++) {
          if (slot[i].key === type) {
            slot[i].value = value;
            return;
          }
        }
        slot.push({ key: type, value: value });
      }
    }
  }, {
    key: 'has',
    value: function has(type) {
      if (this.wm) {
        return this.wm.has(type);
      }

      var slot = this.getSlot(type);
      for (var i = 0; i < slot.length; i++) {
        if (slot[i].key === type) {
          return true;
        }
      }
      return false;
    }
  }]);

  return ComponentMap;
}();

var proxiesByID = void 0;
var didWarnAboutID = void 0;
var hasCreatedElementsByType = void 0;
var idsByType = void 0;

var hooks = {
  register: function register(type, uniqueLocalName, fileName) {
    if (typeof type !== 'function') {
      return;
    }
    if (!uniqueLocalName || !fileName) {
      return;
    }
    if (typeof uniqueLocalName !== 'string' || typeof fileName !== 'string') {
      return;
    }
    var id = fileName + '#' + uniqueLocalName; // eslint-disable-line prefer-template
    if (!idsByType.has(type) && hasCreatedElementsByType.has(type)) {
      if (!didWarnAboutID[id]) {
        didWarnAboutID[id] = true;
        var baseName = fileName.replace(/^.*[\\\/]/, '');
        console.error('React Hot Loader: ' + uniqueLocalName + ' in ' + fileName + ' will not hot reload ' + ('correctly because ' + baseName + ' uses <' + uniqueLocalName + ' /> during ') + ('module definition. For hot reloading to work, move ' + uniqueLocalName + ' ') + ('into a separate file and import it from ' + baseName + '.'));
      }
      return;
    }

    // Remember the ID.
    idsByType.set(type, id);

    // We use React Proxy to generate classes that behave almost
    // the same way as the original classes but are updatable with
    // new versions without destroying original instances.
    if (!proxiesByID[id]) {
      proxiesByID[id] = createProxy(type);
    } else {
      proxiesByID[id].update(type);
    }
  },
  reset: function reset(useWeakMap) {
    proxiesByID = {};
    didWarnAboutID = {};
    hasCreatedElementsByType = new ComponentMap(useWeakMap);
    idsByType = new ComponentMap(useWeakMap);
  }
};

hooks.reset(typeof WeakMap === 'function');

function resolveType(type) {
  // We only care about composite components
  if (typeof type !== 'function') {
    return type;
  }

  hasCreatedElementsByType.set(type, true);

  // When available, give proxy class to React instead of the real class.
  var id = idsByType.get(type);
  if (!id) {
    return type;
  }

  var proxy = proxiesByID[id];
  if (!proxy) {
    return type;
  }

  return proxy.get();
}

var createElement = React.createElement;
function patchedCreateElement(type) {
  // Trick React into rendering a proxy so that
  // its state is preserved when the class changes.
  // This will update the proxy if it's for a known type.
  var resolvedType = resolveType(type);

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return createElement.apply(undefined, [resolvedType].concat(args));
}
patchedCreateElement.isPatchedByReactHotLoader = true;

function patchedCreateFactory(type) {
  // Patch React.createFactory to use patched createElement
  // because the original implementation uses the internal,
  // unpatched ReactElement.createElement
  var factory = patchedCreateElement.bind(null, type);
  factory.type = type;
  return factory;
}
patchedCreateFactory.isPatchedByReactHotLoader = true;

if (typeof global.__REACT_HOT_LOADER__ === 'undefined') {
  React.createElement = patchedCreateElement;
  React.createFactory = patchedCreateFactory;
  global.__REACT_HOT_LOADER__ = hooks;
}

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* eslint-disable global-require */



if (!module.hot || process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(759);
} else {
  module.exports = __webpack_require__(757);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* noop */


/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindAutoBindMethods;
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of React source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Original:
 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
 */

function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);

  boundMethod.__reactBoundContext = component;
  boundMethod.__reactBoundMethod = method;
  boundMethod.__reactBoundArguments = null;

  var componentName = component.constructor.displayName,
      _bind = boundMethod.bind;

  boundMethod.bind = function (newThis) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (newThis !== component && newThis !== null) {
      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
    } else if (!args.length) {
      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
      return boundMethod;
    }

    var reboundMethod = _bind.apply(boundMethod, arguments);
    reboundMethod.__reactBoundContext = component;
    reboundMethod.__reactBoundMethod = method;
    reboundMethod.__reactBoundArguments = args;

    return reboundMethod;
  };

  return boundMethod;
}

function bindAutoBindMethodsFromMap(component) {
  for (var autoBindKey in component.__reactAutoBindMap) {
    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
      return;
    }

    // Tweak: skip methods that are already bound.
    // This is to preserve method reference in case it is used
    // as a subscription handler that needs to be detached later.
    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = component.__reactAutoBindMap[autoBindKey];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

function bindAutoBindMethods(component) {
  if (component.__reactAutoBindPairs) {
    bindAutoBindMethodsFromArray(component);
  } else if (component.__reactAutoBindMap) {
    bindAutoBindMethodsFromMap(component);
  }
}

function bindAutoBindMethodsFromArray(component) {
  var pairs = component.__reactAutoBindPairs;

  if (!pairs) {
    return;
  }

  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];

    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = pairs[i + 1];

    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = createClassProxy;

var _find = __webpack_require__(856);

var _find2 = _interopRequireDefault(_find);

var _createPrototypeProxy = __webpack_require__(768);

var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);

var _bindAutoBindMethods = __webpack_require__(766);

var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);

var _deleteUnknownAutoBindMethods = __webpack_require__(769);

var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);

var _supportsProtoAssignment = __webpack_require__(379);

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString'];

function isEqualDescriptor(a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

function getDisplayName(Component) {
  var displayName = Component.displayName || Component.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Unknown';
}

// This was originally a WeakMap but we had issues with React Native:
// https://github.com/gaearon/react-proxy/issues/50#issuecomment-192928066
var allProxies = [];
function findProxy(Component) {
  var pair = (0, _find2.default)(allProxies, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var key = _ref2[0];
    return key === Component;
  });
  return pair ? pair[1] : null;
}
function addProxy(Component, proxy) {
  allProxies.push([Component, proxy]);
}

function proxyClass(InitialComponent) {
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = findProxy(InitialComponent);
  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = undefined;
  var ProxyComponent = undefined;
  var savedDescriptors = {};

  function instantiate(factory, context, params) {
    var component = factory();

    try {
      return component.apply(context, params);
    } catch (err) {
      (function () {
        // Native ES6 class instantiation
        var instance = new (Function.prototype.bind.apply(component, [null].concat(_toConsumableArray(params))))();

        Object.keys(instance).forEach(function (key) {
          if (RESERVED_STATICS.indexOf(key) > -1) {
            return;
          }
          context[key] = instance[key];
        });
      })();
    }
  }

  var displayName = getDisplayName(InitialComponent);
  try {
    // Create a proxy constructor with matching name
    ProxyComponent = new Function('factory', 'instantiate', 'return function ' + displayName + '() {\n         return instantiate(factory, this, arguments);\n      }')(function () {
      return CurrentComponent;
    }, instantiate);
  } catch (err) {
    // Some environments may forbid dynamic evaluation
    ProxyComponent = function ProxyComponent() {
      return instantiate(function () {
        return CurrentComponent;
      }, this, arguments);
    };
  }
  try {
    Object.defineProperty(ProxyComponent, 'name', {
      value: displayName
    });
  } catch (err) {}

  // Proxy toString() to the current constructor
  ProxyComponent.toString = function toString() {
    return CurrentComponent.toString();
  };

  var prototypeProxy = undefined;
  if (InitialComponent.prototype && InitialComponent.prototype.isReactComponent) {
    // Point proxy constructor to the proxy prototype
    prototypeProxy = (0, _createPrototypeProxy2.default)();
    ProxyComponent.prototype = prototypeProxy.get();
  }

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }
    if (NextComponent === CurrentComponent) {
      return;
    }

    // Prevent proxy cycles
    var existingProxy = findProxy(NextComponent);
    if (existingProxy) {
      return update(existingProxy.__getCurrent());
    }

    // Save the next constructor so we call it
    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent;

    // Try to infer displayName
    displayName = getDisplayName(NextComponent);
    ProxyComponent.displayName = displayName;
    try {
      Object.defineProperty(ProxyComponent, 'name', {
        value: displayName
      });
    } catch (err) {}

    // Set up the same prototype for inherited statics
    ProxyComponent.__proto__ = NextComponent.__proto__;

    // Copy over static methods and properties added at runtime
    if (PreviousComponent) {
      Object.getOwnPropertyNames(PreviousComponent).forEach(function (key) {
        if (RESERVED_STATICS.indexOf(key) > -1) {
          return;
        }

        var prevDescriptor = Object.getOwnPropertyDescriptor(PreviousComponent, key);
        var savedDescriptor = savedDescriptors[key];

        if (!isEqualDescriptor(prevDescriptor, savedDescriptor)) {
          Object.defineProperty(NextComponent, key, prevDescriptor);
        }
      });
    }

    // Copy newly defined static methods and properties
    Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }

      var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
      var savedDescriptor = savedDescriptors[key];

      // Skip redefined descriptors
      if (prevDescriptor && savedDescriptor && !isEqualDescriptor(savedDescriptor, prevDescriptor)) {
        Object.defineProperty(NextComponent, key, prevDescriptor);
        Object.defineProperty(ProxyComponent, key, prevDescriptor);
        return;
      }

      if (prevDescriptor && !savedDescriptor) {
        Object.defineProperty(ProxyComponent, key, prevDescriptor);
        return;
      }

      var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
        configurable: true
      });
      savedDescriptors[key] = nextDescriptor;
      Object.defineProperty(ProxyComponent, key, nextDescriptor);
    });

    // Remove static methods and properties that are no longer defined
    Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }
      // Skip statics that exist on the next class
      if (NextComponent.hasOwnProperty(key)) {
        return;
      }
      // Skip non-configurable statics
      var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
      if (proxyDescriptor && !proxyDescriptor.configurable) {
        return;
      }

      var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
      var savedDescriptor = savedDescriptors[key];

      // Skip redefined descriptors
      if (prevDescriptor && savedDescriptor && !isEqualDescriptor(savedDescriptor, prevDescriptor)) {
        return;
      }

      delete ProxyComponent[key];
    });

    if (prototypeProxy) {
      // Update the prototype proxy with new methods
      var mountedInstances = prototypeProxy.update(NextComponent.prototype);

      // Set up the constructor property so accessing the statics work
      ProxyComponent.prototype.constructor = NextComponent;

      // We might have added new methods that need to be auto-bound
      mountedInstances.forEach(_bindAutoBindMethods2.default);
      mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);
    }
  };

  function get() {
    return ProxyComponent;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  update(InitialComponent);

  var proxy = { get: get, update: update };
  addProxy(ProxyComponent, proxy);

  Object.defineProperty(proxy, '__getCurrent', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

function createFallback(Component) {
  var CurrentComponent = Component;

  return {
    get: function get() {
      return CurrentComponent;
    },
    update: function update(NextComponent) {
      CurrentComponent = NextComponent;
    }
  };
}

function createClassProxy(Component) {
  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
}

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrototypeProxy;

var _assign = __webpack_require__(853);

var _assign2 = _interopRequireDefault(_assign);

var _difference = __webpack_require__(855);

var _difference2 = _interopRequireDefault(_difference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrototypeProxy() {
  var proxy = {};
  var current = null;
  var mountedInstances = [];

  /**
   * Creates a proxied toString() method pointing to the current version's toString().
   */
  function proxyToString(name) {
    // Wrap to always call the current version
    return function toString() {
      if (typeof current[name] === 'function') {
        return current[name].toString();
      } else {
        return '<method was deleted>';
      }
    };
  }

  /**
   * Creates a proxied method that calls the current version, whenever available.
   */
  function proxyMethod(name) {
    // Wrap to always call the current version
    var proxiedMethod = function proxiedMethod() {
      if (typeof current[name] === 'function') {
        return current[name].apply(this, arguments);
      }
    };

    // Copy properties of the original function, if any
    (0, _assign2.default)(proxiedMethod, current[name]);
    proxiedMethod.toString = proxyToString(name);
    try {
      Object.defineProperty(proxiedMethod, 'name', {
        value: name
      });
    } catch (err) {}

    return proxiedMethod;
  }

  /**
   * Augments the original componentDidMount with instance tracking.
   */
  function proxiedComponentDidMount() {
    mountedInstances.push(this);
    if (typeof current.componentDidMount === 'function') {
      return current.componentDidMount.apply(this, arguments);
    }
  }
  proxiedComponentDidMount.toString = proxyToString('componentDidMount');

  /**
   * Augments the original componentWillUnmount with instance tracking.
   */
  function proxiedComponentWillUnmount() {
    var index = mountedInstances.indexOf(this);
    // Unless we're in a weird environment without componentDidMount
    if (index !== -1) {
      mountedInstances.splice(index, 1);
    }
    if (typeof current.componentWillUnmount === 'function') {
      return current.componentWillUnmount.apply(this, arguments);
    }
  }
  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');

  /**
   * Defines a property on the proxy.
   */
  function defineProxyProperty(name, descriptor) {
    Object.defineProperty(proxy, name, descriptor);
  }

  /**
   * Defines a property, attempting to keep the original descriptor configuration.
   */
  function defineProxyPropertyWithValue(name, value) {
    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};

    var _ref$enumerable = _ref.enumerable;
    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
    var _ref$writable = _ref.writable;
    var writable = _ref$writable === undefined ? true : _ref$writable;


    defineProxyProperty(name, {
      configurable: true,
      enumerable: enumerable,
      writable: writable,
      value: value
    });
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindMap() {
    if (!current.__reactAutoBindMap) {
      return;
    }

    var __reactAutoBindMap = {};
    for (var name in current.__reactAutoBindMap) {
      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
        __reactAutoBindMap[name] = proxy[name];
      }
    }

    return __reactAutoBindMap;
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindPairs() {
    var __reactAutoBindPairs = [];

    for (var i = 0; i < current.__reactAutoBindPairs.length; i += 2) {
      var name = current.__reactAutoBindPairs[i];
      var method = proxy[name];

      if (typeof method === 'function') {
        __reactAutoBindPairs.push(name, method);
      }
    }

    return __reactAutoBindPairs;
  }

  /**
   * Applies the updated prototype.
   */
  function update(next) {
    // Save current source of truth
    current = next;

    // Find changed property names
    var currentNames = Object.getOwnPropertyNames(current);
    var previousName = Object.getOwnPropertyNames(proxy);
    var removedNames = (0, _difference2.default)(previousName, currentNames);

    // Remove properties and methods that are no longer there
    removedNames.forEach(function (name) {
      delete proxy[name];
    });

    // Copy every descriptor
    currentNames.forEach(function (name) {
      var descriptor = Object.getOwnPropertyDescriptor(current, name);
      if (typeof descriptor.value === 'function') {
        // Functions require additional wrapping so they can be bound later
        defineProxyPropertyWithValue(name, proxyMethod(name));
      } else {
        // Other values can be copied directly
        defineProxyProperty(name, descriptor);
      }
    });

    // Track mounting and unmounting
    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);

    if (current.hasOwnProperty('__reactAutoBindMap')) {
      defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
    }

    if (current.hasOwnProperty('__reactAutoBindPairs')) {
      defineProxyPropertyWithValue('__reactAutoBindPairs', createAutoBindPairs());
    }

    // Set up the prototype chain
    proxy.__proto__ = next;

    return mountedInstances;
  }

  /**
   * Returns the up-to-date proxy prototype.
   */
  function get() {
    return proxy;
  }

  return {
    update: update,
    get: get
  };
};

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteUnknownAutoBindMethods;
function shouldDeleteClassicInstanceMethod(component, name) {
  if (component.__reactAutoBindMap && component.__reactAutoBindMap.hasOwnProperty(name)) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component.__reactAutoBindPairs && component.__reactAutoBindPairs.indexOf(name) >= 0) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component[name].__reactBoundArguments !== null) {
    // It's a function bound to specific args, keep it
    return false;
  }

  // It's a cached bound method for a function
  // that was deleted by user, so we delete it from component.
  return true;
}

function shouldDeleteModernInstanceMethod(component, name) {
  var prototype = component.constructor.prototype;

  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);

  if (!prototypeDescriptor || !prototypeDescriptor.get) {
    // This is definitely not an autobinding getter
    return false;
  }

  if (prototypeDescriptor.get().length !== component[name].length) {
    // The length doesn't match, bail out
    return false;
  }

  // This seems like a method bound using an autobinding getter on the prototype
  // Hopefully we won't run into too many false positives.
  return true;
}

function shouldDeleteInstanceMethod(component, name) {
  var descriptor = Object.getOwnPropertyDescriptor(component, name);
  if (typeof descriptor.value !== 'function') {
    // Not a function, or something fancy: bail out
    return;
  }

  if (component.__reactAutoBindMap || component.__reactAutoBindPairs) {
    // Classic
    return shouldDeleteClassicInstanceMethod(component, name);
  } else {
    // Modern
    return shouldDeleteModernInstanceMethod(component, name);
  }
}

/**
 * Deletes autobound methods from the instance.
 *
 * For classic React classes, we only delete the methods that no longer exist in map.
 * This means the user actually deleted them in code.
 *
 * For modern classes, we delete methods that exist on prototype with the same length,
 * and which have getters on prototype, but are normal values on the instance.
 * This is usually an indication that an autobinding decorator is being used,
 * and the getter will re-generate the memoized handler on next access.
 */
function deleteUnknownAutoBindMethods(component) {
  var names = Object.getOwnPropertyNames(component);

  names.forEach(function (name) {
    if (shouldDeleteInstanceMethod(component, name)) {
      delete component[name];
    }
  });
}

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _supportsProtoAssignment = __webpack_require__(379);

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

var _createClassProxy = __webpack_require__(767);

var _createClassProxy2 = _interopRequireDefault(_createClassProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!(0, _supportsProtoAssignment2.default)()) {
  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
}

exports.default = _createClassProxy2.default;

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(59),
    root = __webpack_require__(40);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(815),
    hashDelete = __webpack_require__(816),
    hashGet = __webpack_require__(817),
    hashHas = __webpack_require__(818),
    hashSet = __webpack_require__(819);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(59),
    root = __webpack_require__(40);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(59),
    root = __webpack_require__(40);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(40);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(59),
    root = __webpack_require__(40);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 777:
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 778:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(787);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 780:
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(800),
    isArguments = __webpack_require__(182),
    isArray = __webpack_require__(41),
    isBuffer = __webpack_require__(401),
    isIndex = __webpack_require__(179),
    isTypedArray = __webpack_require__(403);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 782:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(380),
    arrayIncludes = __webpack_require__(779),
    arrayIncludesWith = __webpack_require__(780),
    arrayMap = __webpack_require__(382),
    baseUnary = __webpack_require__(391),
    cacheHas = __webpack_require__(392);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(383),
    isFlattenable = __webpack_require__(820);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(383),
    isArray = __webpack_require__(41);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 786:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(386),
    baseIsNaN = __webpack_require__(791),
    strictIndexOf = __webpack_require__(851);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(91),
    isObjectLike = __webpack_require__(74);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(381),
    equalArrays = __webpack_require__(395),
    equalByTag = __webpack_require__(806),
    equalObjects = __webpack_require__(807),
    getTag = __webpack_require__(812),
    isArray = __webpack_require__(41),
    isBuffer = __webpack_require__(401),
    isTypedArray = __webpack_require__(403);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(381),
    baseIsEqual = __webpack_require__(388);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 791:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(402),
    isMasked = __webpack_require__(823),
    isObject = __webpack_require__(93),
    toSource = __webpack_require__(400);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(91),
    isLength = __webpack_require__(183),
    isObjectLike = __webpack_require__(74);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(397),
    nativeKeys = __webpack_require__(836);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(790),
    getMatchData = __webpack_require__(809),
    matchesStrictComparable = __webpack_require__(399);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(388),
    get = __webpack_require__(858),
    hasIn = __webpack_require__(859),
    isKey = __webpack_require__(180),
    isStrictComparable = __webpack_require__(398),
    matchesStrictComparable = __webpack_require__(399),
    toKey = __webpack_require__(127);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 797:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(387);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(854),
    defineProperty = __webpack_require__(394),
    identity = __webpack_require__(181);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 800:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(90),
    arrayMap = __webpack_require__(382),
    isArray = __webpack_require__(41),
    isSymbol = __webpack_require__(129);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(384),
    baseAssignValue = __webpack_require__(385);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(40);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(390),
    isIterateeCall = __webpack_require__(821);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(389),
    isArrayLike = __webpack_require__(92),
    keys = __webpack_require__(130);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(90),
    Uint8Array = __webpack_require__(775),
    eq = __webpack_require__(128),
    equalArrays = __webpack_require__(395),
    mapToArray = __webpack_require__(834),
    setToArray = __webpack_require__(843);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(808);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(785),
    getSymbols = __webpack_require__(811),
    keys = __webpack_require__(130);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(398),
    keys = __webpack_require__(130);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(90);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(778),
    stubArray = __webpack_require__(863);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(771),
    Map = __webpack_require__(177),
    Promise = __webpack_require__(773),
    Set = __webpack_require__(774),
    WeakMap = __webpack_require__(776),
    baseGetTag = __webpack_require__(91),
    toSource = __webpack_require__(400);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 813:
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(393),
    isArguments = __webpack_require__(182),
    isArray = __webpack_require__(41),
    isIndex = __webpack_require__(179),
    isLength = __webpack_require__(183),
    toKey = __webpack_require__(127);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(126);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 816:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(126);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(126);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(126);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(90),
    isArguments = __webpack_require__(182),
    isArray = __webpack_require__(41);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(128),
    isArrayLike = __webpack_require__(92),
    isIndex = __webpack_require__(179),
    isObject = __webpack_require__(93);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 822:
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(803);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 824:
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(124);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(124);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(124);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(124);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(772),
    ListCache = __webpack_require__(123),
    Map = __webpack_require__(177);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(125);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(125);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(125);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(125);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 834:
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(861);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(839);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(396);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)(module)))

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 839:
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(777);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 841:
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 842:
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 843:
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(799),
    shortOut = __webpack_require__(845);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 845:
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(123);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 847:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 848:
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 849:
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(123),
    Map = __webpack_require__(177),
    MapCache = __webpack_require__(178);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 851:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(835);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(384),
    copyObject = __webpack_require__(802),
    createAssigner = __webpack_require__(804),
    isArrayLike = __webpack_require__(92),
    isPrototype = __webpack_require__(397),
    keys = __webpack_require__(130);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ 854:
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(783),
    baseFlatten = __webpack_require__(784),
    baseRest = __webpack_require__(390),
    isArrayLikeObject = __webpack_require__(860);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(805),
    findIndex = __webpack_require__(857);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(386),
    baseIteratee = __webpack_require__(389),
    toInteger = __webpack_require__(866);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(387);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(786),
    hasPath = __webpack_require__(814);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(92),
    isObjectLike = __webpack_require__(74);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(178);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(797),
    basePropertyDeep = __webpack_require__(798),
    isKey = __webpack_require__(180),
    toKey = __webpack_require__(127);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 863:
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 864:
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(867);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(865);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(93),
    isSymbol = __webpack_require__(129);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(801);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.RedBoxError = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _style = __webpack_require__(896);

var _style2 = _interopRequireDefault(_style);

var _errorStackParser = __webpack_require__(897);

var _errorStackParser2 = _interopRequireDefault(_errorStackParser);

var _objectAssign = __webpack_require__(15);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _lib = __webpack_require__(895);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RedBoxError = exports.RedBoxError = function (_get__2) {
  _inherits(RedBoxError, _get__2);

  function RedBoxError() {
    _classCallCheck(this, RedBoxError);

    return _possibleConstructorReturn(this, (RedBoxError.__proto__ || Object.getPrototypeOf(RedBoxError)).apply(this, arguments));
  }

  _createClass(RedBoxError, [{
    key: 'renderFrames',
    value: function renderFrames(frames) {
      var _props = this.props,
          filename = _props.filename,
          editorScheme = _props.editorScheme,
          useLines = _props.useLines,
          useColumns = _props.useColumns;

      var _get__3 = _get__('assign')({}, _get__('style'), this.props.style),
          frame = _get__3.frame,
          file = _get__3.file,
          linkToFile = _get__3.linkToFile;

      return frames.map(function (f, index) {
        var text = void 0;
        var url = void 0;

        if (index === 0 && filename && !_get__('isFilenameAbsolute')(f.fileName)) {
          url = _get__('makeUrl')(filename, editorScheme);
          text = _get__('makeLinkText')(filename);
        } else {
          var lines = useLines ? f.lineNumber : null;
          var columns = useColumns ? f.columnNumber : null;
          url = _get__('makeUrl')(f.fileName, editorScheme, lines, columns);
          text = _get__('makeLinkText')(f.fileName, lines, columns);
        }

        return _get__('React').createElement(
          'div',
          { style: frame, key: index },
          _get__('React').createElement(
            'div',
            null,
            f.functionName
          ),
          _get__('React').createElement(
            'div',
            { style: file },
            _get__('React').createElement(
              'a',
              { href: url, style: linkToFile },
              text
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          error = _props2.error,
          className = _props2.className;

      var _get__4 = _get__('assign')({}, _get__('style'), this.props.style),
          redbox = _get__4.redbox,
          message = _get__4.message,
          stack = _get__4.stack,
          frame = _get__4.frame;

      var frames = void 0;
      var parseError = void 0;
      try {
        frames = _get__('ErrorStackParser').parse(error);
      } catch (e) {
        parseError = new Error('Failed to parse stack trace. Stack trace information unavailable.');
      }

      if (parseError) {
        frames = _get__('React').createElement(
          'div',
          { style: frame, key: 0 },
          _get__('React').createElement(
            'div',
            null,
            parseError.message
          )
        );
      } else {
        frames = this.renderFrames(frames);
      }

      return _get__('React').createElement(
        'div',
        { style: redbox, className: className },
        _get__('React').createElement(
          'div',
          { style: message },
          error.name,
          ': ',
          error.message
        ),
        _get__('React').createElement(
          'div',
          { style: stack },
          frames
        )
      );
    }
  }]);

  return RedBoxError;
}(_get__('Component'));

// "Portal" component for actual RedBoxError component to
// render to (directly under body). Prevents bugs as in #27.


RedBoxError.propTypes = {
  error: _get__('PropTypes').instanceOf(Error).isRequired,
  filename: _get__('PropTypes').string,
  editorScheme: _get__('PropTypes').string,
  useLines: _get__('PropTypes').bool,
  useColumns: _get__('PropTypes').bool,
  style: _get__('PropTypes').object,
  className: _get__('PropTypes').string
};
RedBoxError.displayName = 'RedBoxError';
RedBoxError.defaultProps = {
  useLines: true,
  useColumns: true
};

var RedBox = function (_get__5) {
  _inherits(RedBox, _get__5);

  function RedBox() {
    _classCallCheck(this, RedBox);

    return _possibleConstructorReturn(this, (RedBox.__proto__ || Object.getPrototypeOf(RedBox)).apply(this, arguments));
  }

  _createClass(RedBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.el = document.createElement('div');
      document.body.appendChild(this.el);
      this.renderRedBoxError();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderRedBoxError();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _get__('ReactDOM').unmountComponentAtNode(this.el);
      document.body.removeChild(this.el);
      this.el = null;
    }
  }, {
    key: 'renderRedBoxError',
    value: function renderRedBoxError() {
      _get__('ReactDOM').render(_get__('React').createElement(_get__('RedBoxError'), this.props), this.el);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return RedBox;
}(_get__('Component'));

RedBox.propTypes = {
  error: _get__('PropTypes').instanceOf(Error).isRequired
};
RedBox.displayName = 'RedBox';
exports.default = RedBox;

var _RewiredData__ = Object.create(null);

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = _RewiredData__[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case 'PropTypes':
      return _react.PropTypes;

    case 'assign':
      return _objectAssign2.default;

    case 'style':
      return _style2.default;

    case 'isFilenameAbsolute':
      return _lib.isFilenameAbsolute;

    case 'makeUrl':
      return _lib.makeUrl;

    case 'makeLinkText':
      return _lib.makeLinkText;

    case 'ErrorStackParser':
      return _errorStackParser2.default;

    case 'Component':
      return _react.Component;

    case 'ReactDOM':
      return _reactDom2.default;

    case 'React':
      return _react2.default;

    case 'RedBoxError':
      return RedBoxError;
  }

  return undefined;
}

function _assign__(variableName, value) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return _RewiredData__[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      _RewiredData__[name] = variableName[name];
    });
  } else {
    if (value === undefined) {
      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      _RewiredData__[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  delete _RewiredData__[variableName];
}

function _with__(object) {
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      _RewiredData__[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = _RewiredData__[variableName];
      _RewiredData__[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

var _typeOfOriginalExport = typeof RedBox === 'undefined' ? 'undefined' : _typeof(RedBox);

function addNonEnumerableProperty(name, value) {
  Object.defineProperty(RedBox, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(RedBox)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

exports.__get__ = _get__;
exports.__GetDependency__ = _get__;
exports.__Rewire__ = _set__;
exports.__set__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = _RewireAPI__;

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var filenameWithoutLoaders = exports.filenameWithoutLoaders = function filenameWithoutLoaders() {
  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var index = filename.lastIndexOf('!');

  return index < 0 ? filename : filename.substr(index + 1);
};

var filenameHasLoaders = exports.filenameHasLoaders = function filenameHasLoaders(filename) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  return actualFilename !== filename;
};

var filenameHasSchema = exports.filenameHasSchema = function filenameHasSchema(filename) {
  return (/^[\w]+\:/.test(filename)
  );
};

var isFilenameAbsolute = exports.isFilenameAbsolute = function isFilenameAbsolute(filename) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  if (actualFilename.indexOf('/') === 0) {
    return true;
  }

  return false;
};

var makeUrl = exports.makeUrl = function makeUrl(filename, scheme, line, column) {
  var actualFilename = _get__('filenameWithoutLoaders')(filename);

  if (_get__('filenameHasSchema')(filename)) {
    return actualFilename;
  }

  var url = 'file://' + actualFilename;

  if (scheme) {
    url = scheme + '://open?url=' + url;

    if (line && actualFilename === filename) {
      url = url + '&line=' + line;

      if (column) {
        url = url + '&column=' + column;
      }
    }
  }

  return url;
};

var makeLinkText = exports.makeLinkText = function makeLinkText(filename, line, column) {
  var text = _get__('filenameWithoutLoaders')(filename);

  if (line && text === filename) {
    text = text + ':' + line;

    if (column) {
      text = text + ':' + column;
    }
  }

  return text;
};

var _RewiredData__ = Object.create(null);

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = _RewiredData__[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case 'filenameWithoutLoaders':
      return filenameWithoutLoaders;

    case 'filenameHasSchema':
      return filenameHasSchema;
  }

  return undefined;
}

function _assign__(variableName, value) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return _RewiredData__[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      _RewiredData__[name] = variableName[name];
    });
  } else {
    if (value === undefined) {
      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      _RewiredData__[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  delete _RewiredData__[variableName];
}

function _with__(object) {
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      _RewiredData__[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = _RewiredData__[variableName];
      _RewiredData__[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

exports.__get__ = _get__;
exports.__GetDependency__ = _get__;
exports.__Rewire__ = _set__;
exports.__set__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = _RewireAPI__;
exports.default = _RewireAPI__;

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DefaultExportValue = {
  redbox: {
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    position: 'fixed',
    padding: 10,
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    width: '100%',
    background: 'rgb(204, 0, 0)',
    color: 'white',
    zIndex: 2147483647,
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: 1.2,
    overflow: 'scroll'
  },
  message: {
    fontWeight: 'bold'
  },
  stack: {
    fontFamily: 'monospace',
    marginTop: '2em'
  },
  frame: {
    marginTop: '1em'
  },
  file: {
    fontSize: '0.8em',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  linkToFile: {
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.7)'
  }
};
exports.default = _DefaultExportValue;

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(898)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory(require('stackframe'));
    } else {
        root.ErrorStackParser = factory(root.StackFrame);
    }
}(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

    function _map(array, fn, thisArg) {
        if (typeof Array.prototype.map === 'function') {
            return array.map(fn, thisArg);
        } else {
            var output = new Array(array.length);
            for (var i = 0; i < array.length; i++) {
                output[i] = fn.call(thisArg, array[i]);
            }
            return output;
        }
    }

    function _filter(array, fn, thisArg) {
        if (typeof Array.prototype.filter === 'function') {
            return array.filter(fn, thisArg);
        } else {
            var output = [];
            for (var i = 0; i < array.length; i++) {
                if (fn.call(thisArg, array[i])) {
                    output.push(array[i]);
                }
            }
            return output;
        }
    }

    function _indexOf(array, target) {
        if (typeof Array.prototype.indexOf === 'function') {
            return array.indexOf(target);
        } else {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === target) {
                    return i;
                }
            }
            return -1;
        }
    }

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error('Cannot parse given Error object');
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return _map(filtered, function(line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return _map(filtered, function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame(line);
                } else {
                    var tokens = line.split('@');
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionName = tokens.join('@') || undefined;
                    return new StackFrame(functionName,
                        undefined,
                        locationParts[0],
                        locationParts[1],
                        locationParts[2],
                        line);
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(
                        new StackFrame(
                            match[3] || undefined,
                            undefined,
                            match[2],
                            match[1],
                            undefined,
                            lines[i]
                        )
                    );
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);

            return _map(filtered, function(line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = (tokens.shift() || '');
                var functionName = functionCall
                        .replace(/<anonymous function(: (\w+))?>/, '$2')
                        .replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                }
                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
                    undefined : argsRaw.split(',');
                return new StackFrame(
                    functionName,
                    args,
                    locationParts[0],
                    locationParts[1],
                    locationParts[2],
                    line);
            }, this);
        }
    };
}));



/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.StackFrame = factory();
    }
}(this, function () {
    'use strict';
    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
        if (functionName !== undefined) {
            this.setFunctionName(functionName);
        }
        if (args !== undefined) {
            this.setArgs(args);
        }
        if (fileName !== undefined) {
            this.setFileName(fileName);
        }
        if (lineNumber !== undefined) {
            this.setLineNumber(lineNumber);
        }
        if (columnNumber !== undefined) {
            this.setColumnNumber(columnNumber);
        }
        if (source !== undefined) {
            this.setSource(source);
        }
    }

    StackFrame.prototype = {
        getFunctionName: function () {
            return this.functionName;
        },
        setFunctionName: function (v) {
            this.functionName = String(v);
        },

        getArgs: function () {
            return this.args;
        },
        setArgs: function (v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
            }
            this.args = v;
        },

        // NOTE: Property name may be misleading as it includes the path,
        // but it somewhat mirrors V8's JavaScriptStackTraceApi
        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
        getFileName: function () {
            return this.fileName;
        },
        setFileName: function (v) {
            this.fileName = String(v);
        },

        getLineNumber: function () {
            return this.lineNumber;
        },
        setLineNumber: function (v) {
            if (!_isNumber(v)) {
                throw new TypeError('Line Number must be a Number');
            }
            this.lineNumber = Number(v);
        },

        getColumnNumber: function () {
            return this.columnNumber;
        },
        setColumnNumber: function (v) {
            if (!_isNumber(v)) {
                throw new TypeError('Column Number must be a Number');
            }
            this.columnNumber = Number(v);
        },

        getSource: function () {
            return this.source;
        },
        setSource: function (v) {
            this.source = String(v);
        },

        toString: function() {
            var functionName = this.getFunctionName() || '{anonymous}';
            var args = '(' + (this.getArgs() || []).join(',') + ')';
            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
            return functionName + args + fileName + lineNumber + columnNumber;
        }
    };

    return StackFrame;
}));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(40);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(90),
    getRawTag = __webpack_require__(810),
    objectToString = __webpack_require__(838);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(94);

var _promise2 = _interopRequireDefault(_promise);

var _patchReact = __webpack_require__(412);

var _patchReact2 = _interopRequireDefault(_patchReact);

var _evalScript = __webpack_require__(131);

var _evalScript2 = _interopRequireDefault(_evalScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    errorComponent = _window.__NEXT_DATA__.errorComponent;

var ErrorComponent = (0, _evalScript2.default)(errorComponent).default;

// apply patch first
(0, _patchReact2.default)(function (err) {
  console.error(err);

  _promise2.default.resolve().then(function () {
    onError(err);
  });
});

__webpack_require__(417);

var next = window.next = __webpack_require__(411);

var emitter = next.default(onError);

function onError(err) {
  // just show the debug screen but don't render ErrorComponent
  // so that the current component doesn't lose props
  next.render({ err: err, emitter: emitter });
}

var lastScroll = void 0;

emitter.on('before-reactdom-render', function (_ref) {
  var Component = _ref.Component;

  // Remember scroll when ErrorComponent is being rendered to later restore it
  if (!lastScroll && Component === ErrorComponent) {
    var _window2 = window,
        pageXOffset = _window2.pageXOffset,
        pageYOffset = _window2.pageYOffset;

    lastScroll = {
      x: pageXOffset,
      y: pageYOffset
    };
  }
});

emitter.on('after-reactdom-render', function (_ref2) {
  var Component = _ref2.Component;

  if (lastScroll && Component !== ErrorComponent) {
    // Restore scroll after ErrorComponent was replaced with a page component by HMR
    var _lastScroll = lastScroll,
        x = _lastScroll.x,
        y = _lastScroll.y;

    window.scroll(x, y);
    lastScroll = null;
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(402),
    isLength = __webpack_require__(183);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ })

},[913]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fTGlzdENhY2hlLmpzP2FjOGMyNmIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcz9hYzhjMjZiIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19nZXRNYXBEYXRhLmpzP2FjOGMyNmIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcz9hYzhjMjZiIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL190b0tleS5qcz9hYzhjMjZiIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2VxLmpzP2FjOGMyNmIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaXNTeW1ib2wuanM/YWM4YzI2YiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9rZXlzLmpzP2FjOGMyNmIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX01hcC5qcz9hYzhjMjZiIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19NYXBDYWNoZS5qcz9hYzhjMjZiIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19pc0luZGV4LmpzP2FjOGMyNmIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2lzS2V5LmpzP2FjOGMyNmIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaWRlbnRpdHkuanM/YWM4YzI2YiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcz9hYzhjMjZiIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2lzTGVuZ3RoLmpzP2FjOGMyNmIiLCJ3ZWJwYWNrOi8vLy4uL34vbmV4dC9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZW50cmllcy5qcz9hYzhjMjZiIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L21vZHVsZXMvc3VwcG9ydHNQcm90b0Fzc2lnbm1lbnQuanM/YWM4YzI2YiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fU2V0Q2FjaGUuanM/YWM4YzI2YiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fU3RhY2suanM/YWM4YzI2YiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYXJyYXlNYXAuanM/YWM4YzI2YiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzP2FjOGMyNmIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzP2FjOGMyNmIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VHZXQuanM/NWI0YWVlMiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanM/NWI0YWVlMiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19jYWNoZUhhcy5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19jYXN0UGF0aC5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19lcXVhbEFycmF5cy5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19mcmVlR2xvYmFsLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19yb290LmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX3RvU291cmNlLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaXNCdWZmZXIuanM/NWI0YWVlMiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaXNBcnJheS5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L25leHQvZGlzdC9jbGllbnQvaW5kZXguanM/NWI0YWVlMiIsIndlYnBhY2s6Ly8vLi4vfi9uZXh0L2Rpc3QvY2xpZW50L3BhdGNoLXJlYWN0LmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaG90LWxvYWRlci9wYXRjaC5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZW50cmllcy5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vd24ta2V5cy5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vZ2xvYmFsL3dpbmRvdy5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19nZXROYXRpdmUuanM/NWI0YWVlMiIsIndlYnBhY2s6Ly8vLi4vfi9uZXh0L2Rpc3QvY2xpZW50L2hlYWQtbWFuYWdlci5qcz81YjRhZWUyIiwid2VicGFjazovLy8uLi9+L25leHQvZGlzdC9saWIvYXBwLmpzPzViNGFlZTIiLCJ3ZWJwYWNrOi8vLy4uL34vbmV4dC9kaXN0L2xpYi9jc3MuanM/NWI0YWVlMiIsIndlYnBhY2s6Ly8vLi4vfi9uZXh0L2Rpc3QvbGliL2Vycm9yLWRlYnVnLmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vbmV4dC9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vbmV4dC9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWRlZXAtZm9yY2UtdXBkYXRlL2xpYi9pbmRleC5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWhvdC1sb2FkZXIvaW5kZXguanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1ob3QtbG9hZGVyL2xpYi9BcHBDb250YWluZXIuZGV2LmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaG90LWxvYWRlci9saWIvQXBwQ29udGFpbmVyLmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaG90LWxvYWRlci9saWIvQXBwQ29udGFpbmVyLnByb2QuanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1ob3QtbG9hZGVyL2xpYi9pbmRleC5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWhvdC1sb2FkZXIvbGliL3BhdGNoLmRldi5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LWhvdC1sb2FkZXIvbGliL3BhdGNoLmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtaG90LWxvYWRlci9saWIvcGF0Y2gucHJvZC5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L21vZHVsZXMvYmluZEF1dG9CaW5kTWV0aG9kcy5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L21vZHVsZXMvY3JlYXRlQ2xhc3NQcm94eS5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L21vZHVsZXMvY3JlYXRlUHJvdG90eXBlUHJveHkuanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9tb2R1bGVzL2RlbGV0ZVVua25vd25BdXRvQmluZE1ldGhvZHMuanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9tb2R1bGVzL2luZGV4LmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX0RhdGFWaWV3LmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX0hhc2guanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fUHJvbWlzZS5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19TZXQuanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fVWludDhBcnJheS5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19XZWFrTWFwLmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2FwcGx5LmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19hcnJheVNvbWUuanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUZsYXR0ZW4uanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUhhc0luLmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzPzVlODJkN2MiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcz81ZTgyZDdjIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanM/NWU4MmQ3YyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcz81MzIzYTYzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcz81MzIzYTYzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fY29weU9iamVjdC5qcz81MzIzYTYzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19jb3JlSnNEYXRhLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2NyZWF0ZUZpbmQuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcz81MzIzYTYzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19lcXVhbE9iamVjdHMuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcz81MzIzYTYzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19nZXRNYXRjaERhdGEuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2dldFN5bWJvbHMuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fZ2V0VGFnLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2dldFZhbHVlLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2hhc1BhdGguanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9faGFzaENsZWFyLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2hhc2hEZWxldGUuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9faGFzaEdldC5qcz81MzIzYTYzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19oYXNoSGFzLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2hhc2hTZXQuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcz81MzIzYTYzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qcz81MzIzYTYzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19pc0tleWFibGUuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9faXNNYXNrZWQuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcz81MzIzYTYzIiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzPzUzMjNhNjMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanM/NTMyM2E2MyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX25hdGl2ZUtleXMuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbm9kZVV0aWwuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fb3ZlckFyZy5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19vdmVyUmVzdC5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19zZXRUb0FycmF5LmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX3Nob3J0T3V0LmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fc3RhY2tHZXQuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fc3RhY2tIYXMuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fc3RhY2tTZXQuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19zdHJpbmdUb1BhdGguanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9hc3NpZ24uanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9jb25zdGFudC5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2RpZmZlcmVuY2UuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9maW5kLmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvZmluZEluZGV4LmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvZ2V0LmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaGFzSW4uanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL21lbW9pemUuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9wcm9wZXJ0eS5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL3N0dWJBcnJheS5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL3N0dWJGYWxzZS5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL3RvRmluaXRlLmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvdG9JbnRlZ2VyLmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvdG9OdW1iZXIuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC90b1N0cmluZy5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlZGJveC1yZWFjdC9saWIvaW5kZXguanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWRib3gtcmVhY3QvbGliL2xpYi5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlZGJveC1yZWFjdC9saWIvc3R5bGUuanM/ZDcyZGJmNiIsIndlYnBhY2s6Ly8vLi4vfi9yZWRib3gtcmVhY3Qvfi9lcnJvci1zdGFjay1wYXJzZXIvZXJyb3Itc3RhY2stcGFyc2VyLmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVkYm94LXJlYWN0L34vc3RhY2tmcmFtZS9zdGFja2ZyYW1lLmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX1N5bWJvbC5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlR2V0VGFnLmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vbmV4dC9kaXN0L2NsaWVudC9uZXh0LWRldi5qcz9kNzJkYmY2Iiwid2VicGFjazovLy8uLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzP2Q3MmRiZjYiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaXNPYmplY3QuanM/NGM1N2UwNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FB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O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDekJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDckNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDekJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUF3QixFQUFFOztBQUVqTTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvR0FBb0csd0RBQXdELFNBQVM7QUFDcks7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUNqU0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7QUM5TUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNB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RUE7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDM0RBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7QUM5WUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0I7Ozs7Ozs7O0FDM01BOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekIsb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztBQ3ZORDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSwyREFBMkQsVUFBVTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7O0FDMUdEOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDM0JBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2QkFBNkI7QUFDNUM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7QUN4RUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19nZXRNYXBEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL190b0tleS5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaXNTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2lzSW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19pc0tleS5qc1xuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2lkZW50aXR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaXNMZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDE4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2VudHJpZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L25leHQvfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2VudHJpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN1cHBvcnRzUHJvdG9Bc3NpZ25tZW50O1xudmFyIHggPSB7fTtcbnZhciB5ID0geyBzdXBwb3J0czogdHJ1ZSB9O1xudHJ5IHtcbiAgeC5fX3Byb3RvX18gPSB5O1xufSBjYXRjaCAoZXJyKSB7fVxuXG5mdW5jdGlvbiBzdXBwb3J0c1Byb3RvQXNzaWdubWVudCgpIHtcbiAgcmV0dXJuIHguc3VwcG9ydHMgfHwgZmFsc2U7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvbW9kdWxlcy9zdXBwb3J0c1Byb3RvQXNzaWdubWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fU2V0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDM4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX1N0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAzODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2FycmF5TWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAzODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2FycmF5UHVzaC5qc1xuLy8gbW9kdWxlIGlkID0gMzgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAzODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDM4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAzODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDM4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qc1xuLy8gbW9kdWxlIGlkID0gMzg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fY2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDM5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19lcXVhbEFycmF5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDM5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMzk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbmRlciA9IGV4cG9ydHMucm91dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcicpO1xuXG52YXIgX3JlZ2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2VuZXJhdG9yKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJyk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3luY1RvR2VuZXJhdG9yMik7XG5cbnZhciByZW5kZXIgPSBleHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMy5kZWZhdWx0KShfcmVnZW5lcmF0b3IyLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlKHByb3BzKSB7XG4gICAgdmFyIG9uRXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHJlbmRlckVycm9yQ29tcG9uZW50O1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3IyLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAwO1xuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICByZXR1cm4gZG9SZW5kZXIocHJvcHMpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA1O1xuICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFsnY2F0Y2gnXSgwKTtcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3IoX2NvbnRleHQudDApO1xuXG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSwgdGhpcywgW1swLCA1XV0pO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbmRlcihfeCkge1xuICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuXG52YXIgcmVuZGVyRXJyb3JDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjMuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yMi5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoZXJyKSB7XG4gICAgdmFyIHBhdGhuYW1lLCBxdWVyeSwgcHJvcHM7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcjIuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lLCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMztcbiAgICAgICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEVycm9yQ29tcG9uZW50LCB7IGVycjogZXJyLCBwYXRobmFtZTogcGF0aG5hbWUsIHF1ZXJ5OiBxdWVyeSB9KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHByb3BzID0gX2NvbnRleHQyLnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDY7XG4gICAgICAgICAgICByZXR1cm4gZG9SZW5kZXIoeyBDb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LCBwcm9wczogcHJvcHMsIGVycjogZXJyIH0pO1xuXG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyLCB0aGlzKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiByZW5kZXJFcnJvckNvbXBvbmVudChfeDMpIHtcbiAgICByZXR1cm4gX3JlZjMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxudmFyIGRvUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZjQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IzLmRlZmF1bHQpKF9yZWdlbmVyYXRvcjIuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKF9yZWY1KSB7XG4gICAgdmFyIENvbXBvbmVudCA9IF9yZWY1LkNvbXBvbmVudCxcbiAgICAgICAgcHJvcHMgPSBfcmVmNS5wcm9wcyxcbiAgICAgICAgZXJyID0gX3JlZjUuZXJyLFxuICAgICAgICBlbWl0dGVyID0gX3JlZjUuZW1pdHRlcjtcblxuICAgIHZhciBfcGF0aG5hbWUsIF9xdWVyeSwgYXBwUHJvcHM7XG5cbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yMi5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaWYgKCEoIXByb3BzICYmIENvbXBvbmVudCAmJiBDb21wb25lbnQgIT09IEVycm9yQ29tcG9uZW50ICYmIGxhc3RBcHBQcm9wcy5Db21wb25lbnQgPT09IEVycm9yQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmZXRjaCBwcm9wcyBpZiBFcnJvckNvbXBvbmVudCB3YXMgcmVwbGFjZWQgd2l0aCBhIHBhZ2UgY29tcG9uZW50IGJ5IEhNUlxuICAgICAgICAgICAgX3BhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lLCBfcXVlcnkgPSByb3V0ZXIucXVlcnk7XG4gICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDQ7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsIHsgZXJyOiBlcnIsIHBhdGhuYW1lOiBfcGF0aG5hbWUsIHF1ZXJ5OiBfcXVlcnkgfSk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBwcm9wcyA9IF9jb250ZXh0My5zZW50O1xuXG4gICAgICAgICAgY2FzZSA1OlxuXG4gICAgICAgICAgICBpZiAoZW1pdHRlcikge1xuICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoJ2JlZm9yZS1yZWFjdGRvbS1yZW5kZXInLCB7IENvbXBvbmVudDogQ29tcG9uZW50IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDb21wb25lbnQgPSBDb21wb25lbnQgfHwgbGFzdEFwcFByb3BzLkNvbXBvbmVudDtcbiAgICAgICAgICAgIHByb3BzID0gcHJvcHMgfHwgbGFzdEFwcFByb3BzLnByb3BzO1xuXG4gICAgICAgICAgICBhcHBQcm9wcyA9IHsgQ29tcG9uZW50OiBDb21wb25lbnQsIHByb3BzOiBwcm9wcywgZXJyOiBlcnIsIHJvdXRlcjogcm91dGVyLCBoZWFkTWFuYWdlcjogaGVhZE1hbmFnZXIgfTtcblxuICAgICAgICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LnJlbmRlcigoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKF9hcHAyLmRlZmF1bHQsIGFwcFByb3BzKSwgY29udGFpbmVyKTtcblxuICAgICAgICAgICAgaWYgKGVtaXR0ZXIpIHtcbiAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KCdhZnRlci1yZWFjdGRvbS1yZW5kZXInLCB7IENvbXBvbmVudDogQ29tcG9uZW50IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0QXBwUHJvcHMgPSBhcHBQcm9wcztcblxuICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTMsIHRoaXMpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRvUmVuZGVyKF94NCkge1xuICAgIHJldHVybiBfcmVmNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9ldmVudHMgPSByZXF1aXJlKCdldmVudHMnKTtcblxudmFyIF9oZWFkTWFuYWdlciA9IHJlcXVpcmUoJy4vaGVhZC1tYW5hZ2VyJyk7XG5cbnZhciBfaGVhZE1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVhZE1hbmFnZXIpO1xuXG52YXIgX2NzcyA9IHJlcXVpcmUoJy4uL2xpYi9jc3MnKTtcblxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKCcuLi9saWIvcm91dGVyJyk7XG5cbnZhciBfYXBwID0gcmVxdWlyZSgnLi4vbGliL2FwcCcpO1xuXG52YXIgX2FwcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcHApO1xuXG52YXIgX2V2YWxTY3JpcHQgPSByZXF1aXJlKCcuLi9saWIvZXZhbC1zY3JpcHQnKTtcblxudmFyIF9ldmFsU2NyaXB0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2YWxTY3JpcHQpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vbGliL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfd2luZG93ID0gd2luZG93LFxuICAgIF93aW5kb3ckX19ORVhUX0RBVEFfXyA9IF93aW5kb3cuX19ORVhUX0RBVEFfXyxcbiAgICBjb21wb25lbnQgPSBfd2luZG93JF9fTkVYVF9EQVRBX18uY29tcG9uZW50LFxuICAgIGVycm9yQ29tcG9uZW50ID0gX3dpbmRvdyRfX05FWFRfREFUQV9fLmVycm9yQ29tcG9uZW50LFxuICAgIHByb3BzID0gX3dpbmRvdyRfX05FWFRfREFUQV9fLnByb3BzLFxuICAgIGlkcyA9IF93aW5kb3ckX19ORVhUX0RBVEFfXy5pZHMsXG4gICAgZXJyID0gX3dpbmRvdyRfX05FWFRfREFUQV9fLmVycixcbiAgICBwYXRobmFtZSA9IF93aW5kb3ckX19ORVhUX0RBVEFfXy5wYXRobmFtZSxcbiAgICBxdWVyeSA9IF93aW5kb3ckX19ORVhUX0RBVEFfXy5xdWVyeTtcblxuXG52YXIgQ29tcG9uZW50ID0gKDAsIF9ldmFsU2NyaXB0Mi5kZWZhdWx0KShjb21wb25lbnQpLmRlZmF1bHQ7XG52YXIgRXJyb3JDb21wb25lbnQgPSAoMCwgX2V2YWxTY3JpcHQyLmRlZmF1bHQpKGVycm9yQ29tcG9uZW50KS5kZWZhdWx0O1xudmFyIGxhc3RBcHBQcm9wcyA9IHZvaWQgMDtcblxudmFyIHJvdXRlciA9IGV4cG9ydHMucm91dGVyID0gKDAsIF9yb3V0ZXIuY3JlYXRlUm91dGVyKShwYXRobmFtZSwgcXVlcnksIHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gIEVycm9yQ29tcG9uZW50OiBFcnJvckNvbXBvbmVudCxcbiAgZXJyOiBlcnJcbn0pO1xuXG52YXIgaGVhZE1hbmFnZXIgPSBuZXcgX2hlYWRNYW5hZ2VyMi5kZWZhdWx0KCk7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fbmV4dCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob25FcnJvcikge1xuICB2YXIgZW1pdHRlciA9IG5ldyBfZXZlbnRzLkV2ZW50RW1pdHRlcigpO1xuICBpZiAoaWRzICYmIGlkcy5sZW5ndGgpICgwLCBfY3NzLnJlaHlkcmF0ZSkoaWRzKTtcblxuICByb3V0ZXIuc3Vic2NyaWJlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIENvbXBvbmVudCA9IF9yZWYuQ29tcG9uZW50LFxuICAgICAgICBwcm9wcyA9IF9yZWYucHJvcHMsXG4gICAgICAgIGVyciA9IF9yZWYuZXJyO1xuXG4gICAgcmVuZGVyKHsgQ29tcG9uZW50OiBDb21wb25lbnQsIHByb3BzOiBwcm9wcywgZXJyOiBlcnIsIGVtaXR0ZXI6IGVtaXR0ZXIgfSwgb25FcnJvcik7XG4gIH0pO1xuXG4gIHJlbmRlcih7IENvbXBvbmVudDogQ29tcG9uZW50LCBwcm9wczogcHJvcHMsIGVycjogZXJyLCBlbWl0dGVyOiBlbWl0dGVyIH0sIG9uRXJyb3IpO1xuXG4gIHJldHVybiBlbWl0dGVyO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L25leHQvZGlzdC9jbGllbnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXknKTtcblxudmFyIF9zbGljZWRUb0FycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NsaWNlZFRvQXJyYXkyKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzJyk7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKTtcblxudmFyIF9lbnRyaWVzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9lbnRyaWVzJyk7XG5cbnZhciBfZW50cmllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbnRyaWVzKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcGF0Y2hlZCA9IGZhbHNlOyAvLyBtb25rZXlwYXRjaCBSZWFjdCBmb3IgZml4aW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjQ2MVxuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQWxkcmVkY3ovNGQ2M2IwYTkwNDliMDBmNTQ0MzlmODc4MGJlN2YwZDhcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGFuZGxlRXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZ1bmN0aW9uICgpIHt9O1xuXG4gIGlmIChwYXRjaGVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBpcyBhbHJlYWR5IG1vbmtleXBhdGNoZWQnKTtcbiAgfVxuXG4gIHBhdGNoZWQgPSB0cnVlO1xuXG4gIHZhciBjcmVhdGVFbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQ7XG5cblxuICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gV2UgbmVlZCB0byBnZXQgdGhlIHByb3RvdHlwZSB3aGljaCBoYXMgdGhlIHJlbmRlciBtZXRob2QuXG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRvIGhhdmUgcmVuZGVyIGluc2lkZSBhIGRlZXBlciBwcm90b3R5cGUgZHVlIHRvXG4gICAgICAvLyBjbGFzcyBleHRlbmRpbmcuXG4gICAgICB2YXIgcHJvdG90eXBlV2l0aFJlbmRlciA9IGdldFJlbmRlclByb3RvdHlwZShDb21wb25lbnQpO1xuICAgICAgdmFyIF9Db21wb25lbnQgPSBDb21wb25lbnQsXG4gICAgICAgICAgcHJvdG90eXBlID0gX0NvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgICAgIC8vIGFzc3VtZXMgaXQncyBhIGNsYXNzIGNvbXBvbmVudCBpZiByZW5kZXIgbWV0aG9kIGV4aXN0cy5cblxuICAgICAgdmFyIGlzQ2xhc3NDb21wb25lbnQgPSBCb29sZWFuKHByb3RvdHlwZVdpdGhSZW5kZXIpIHx8XG4gICAgICAvLyBzdWJjbGFzcyBvZiBSZWFjdC5Db21wb25lbnQgb3IgUHVyZUNvbXBvbmVudCB3aXRoIG5vIHJlbmRlciBtZXRob2QuXG4gICAgICAvLyBUaGVyZSdzIG5vIHJlbmRlciBtZXRob2QgaW4gcHJvdG90eXBlXG4gICAgICAvLyB3aGVuIGl0J3MgY3JlYXRlZCB3aXRoIGNsYXNzLXByb3BlcnRpZXMuXG4gICAgICBwcm90b3R5cGUgaW5zdGFuY2VvZiBfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50IHx8IHByb3RvdHlwZSBpbnN0YW5jZW9mIF9yZWFjdDIuZGVmYXVsdC5QdXJlQ29tcG9uZW50O1xuXG4gICAgICB2YXIgZHluYW1pY1dyYXBwZXIgPSB3aXRoV3JhcE93blJlbmRlcjtcblxuICAgICAgaWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKHByb3RvdHlwZVdpdGhSZW5kZXIpIHtcbiAgICAgICAgICAvLyBTb21ldGltZXMgcmVuZGVyIG1ldGhvZCBpcyBjcmVhdGVkIHdpdGggb25seSBhIGdldHRlci5cbiAgICAgICAgICAvLyBJbiB0aGF0IGNhc2Ugd2UgY2FuJ3Qgb3ZlcnJpZGUgaXQgd2l0aCBhIHByb3RvdHlwZS4gV2UgbmVlZCB0b1xuICAgICAgICAgIC8vIGRvIGl0IGR5bmFtaWNhbGx5LlxuICAgICAgICAgIGlmIChjYW5PdmVycmlkZVJlbmRlcihwcm90b3R5cGVXaXRoUmVuZGVyKSkge1xuICAgICAgICAgICAgcHJvdG90eXBlV2l0aFJlbmRlci5yZW5kZXIgPSB3cmFwUmVuZGVyKHByb3RvdHlwZVdpdGhSZW5kZXIucmVuZGVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHluYW1pY1dyYXBwZXIgPSB3aXRoV3JhcFJlbmRlckFsd2F5cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3cmFwIHRoZSByZW5kZXIgbWV0aG9kIGluIHJ1bnRpbWUgd2hlbiB0aGUgY29tcG9uZW50IGluaXRpYWxpemVkXG4gICAgICAgIC8vIGZvciBjbGFzcy1wcm9wZXJ0aWVzLlxuICAgICAgICBDb21wb25lbnQgPSB3cmFwKENvbXBvbmVudCwgZHluYW1pY1dyYXBwZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3RhdGVsZXNzIGNvbXBvbmVudFxuICAgICAgICBDb21wb25lbnQgPSB3cmFwUmVuZGVyKENvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5jYWxsLmFwcGx5KGNyZWF0ZUVsZW1lbnQsIFt0aGlzLCBDb21wb25lbnRdLmNvbmNhdChyZXN0KSk7XG4gIH07XG5cbiAgdmFyIGNvbXBvbmVudFByb3RvdHlwZSA9IF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQucHJvdG90eXBlO1xuICB2YXIgZm9yY2VVcGRhdGUgPSBjb21wb25lbnRQcm90b3R5cGUuZm9yY2VVcGRhdGU7XG5cblxuICBjb21wb25lbnRQcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlciA9IHdyYXBSZW5kZXIodGhpcy5yZW5kZXIpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcmNlVXBkYXRlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHdyYXBSZW5kZXIocmVuZGVyKSB7XG4gICAgcmV0dXJuIHdyYXAocmVuZGVyLCB3aXRoSGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2l0aEhhbmRsZUVycm9yKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHdpdGhXcmFwT3duUmVuZGVyKGZuKSB7XG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgaWYgKHRoaXMucmVuZGVyICYmIHRoaXMuaGFzT3duUHJvcGVydHkoJ3JlbmRlcicpKSB7XG4gICAgICB0aGlzLnJlbmRlciA9IHdyYXBSZW5kZXIodGhpcy5yZW5kZXIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gd2l0aFdyYXBSZW5kZXJBbHdheXMoZm4pIHtcbiAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNSA+IDEgPyBfbGVuNSAtIDEgOiAwKSwgX2tleTUgPSAxOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICBhcmdzW19rZXk1IC0gMV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBpZiAodGhpcy5yZW5kZXIpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncmVuZGVyJywgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHdyYXBSZW5kZXIodGhpcy5yZW5kZXIpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG5mdW5jdGlvbiB3cmFwKGZuLCBhcm91bmQpIHtcbiAgaWYgKGZuLl9fd3JhcHBlZCkge1xuICAgIHJldHVybiBmbi5fX3dyYXBwZWQ7XG4gIH1cblxuICB2YXIgX2ZuID0gZnVuY3Rpb24gX2ZuKCkge1xuICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW42KSwgX2tleTYgPSAwOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyb3VuZC5jYWxsLmFwcGx5KGFyb3VuZCwgW3RoaXMsIGZuXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKCgwLCBfZW50cmllczIuZGVmYXVsdCkoKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzMi5kZWZhdWx0KShmbikpKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIF9zdGVwJHZhbHVlID0gKDAsIF9zbGljZWRUb0FycmF5My5kZWZhdWx0KShfc3RlcC52YWx1ZSwgMiksXG4gICAgICAgICAgayA9IF9zdGVwJHZhbHVlWzBdLFxuICAgICAgICAgIGQgPSBfc3RlcCR2YWx1ZVsxXTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2ZuLCBrLCBkKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9mbi5fX3dyYXBwZWQgPSBmbi5fX3dyYXBwZWQgPSBfZm47XG5cbiAgcmV0dXJuIF9mbjtcbn1cblxuZnVuY3Rpb24gZ2V0UmVuZGVyUHJvdG90eXBlKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG8gPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKHByb3RvLmhhc093blByb3BlcnR5KCdyZW5kZXInKSkgcmV0dXJuIHByb3RvO1xuICAgIHByb3RvID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkocHJvdG8pO1xuICAgIGlmICghcHJvdG8pIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbk92ZXJyaWRlUmVuZGVyKHByb3RvdHlwZSkge1xuICB2YXIgZGVzY3JpcHRvciA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShwcm90b3R5cGUsICdyZW5kZXInKTtcbiAgaWYgKCFkZXNjcmlwdG9yKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZGVzY3JpcHRvci53cml0YWJsZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L25leHQvZGlzdC9jbGllbnQvcGF0Y2gtcmVhY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3BhdGNoJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LWhvdC1sb2FkZXIvcGF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDQxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmVudHJpZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2VudHJpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDQyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0Mjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA0Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBpc0VudW0gICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNFbnRyaWVzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KGl0KVxuICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGkgICAgICA9IDBcbiAgICAgICwgcmVzdWx0ID0gW11cbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSl7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbnZhciBnT1BOICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgUmVmbGVjdCAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5SZWZsZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBSZWZsZWN0ICYmIFJlZmxlY3Qub3duS2V5cyB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSBnT1BOLmYoYW5PYmplY3QoaXQpKVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgcmV0dXJuIGdldFN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vd24ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0NjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRlbnRyaWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KXtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qc1xuLy8gbW9kdWxlIGlkID0gNDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG52YXIgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG93bktleXMgICAgICAgID0gcmVxdWlyZSgnLi9fb3duLWtleXMnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QRCAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KXtcbiAgICB2YXIgTyAgICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgICAsIGdldERlc2MgPSBnT1BELmZcbiAgICAgICwga2V5cyAgICA9IG93bktleXMoTylcbiAgICAgICwgcmVzdWx0ICA9IHt9XG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShrZXlzLmxlbmd0aCA+IGkpY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXkgPSBrZXlzW2krK10sIGdldERlc2MoTywga2V5KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQ3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHNlbGY7XG59IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0ge307XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2dsb2JhbC93aW5kb3cuanNcbi8vIG1vZHVsZSBpZCA9IDUyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZScpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgREVGQVVMVF9USVRMRSA9ICcnO1xuXG52YXIgRE9NQXR0cmlidXRlTmFtZXMgPSB7XG4gIGFjY2VwdENoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCcsXG4gIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgaHRtbEZvcjogJ2ZvcicsXG4gIGh0dHBFcXVpdjogJ2h0dHAtZXF1aXYnXG59O1xuXG52YXIgSGVhZE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhlYWRNYW5hZ2VyKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEhlYWRNYW5hZ2VyKTtcblxuICAgIHRoaXMudXBkYXRlUHJvbWlzZSA9IG51bGw7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShIZWFkTWFuYWdlciwgW3tcbiAgICBrZXk6ICd1cGRhdGVIZWFkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlSGVhZChoZWFkKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMudXBkYXRlUHJvbWlzZSA9IF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByb21pc2UgIT09IF90aGlzLnVwZGF0ZVByb21pc2UpIHJldHVybjtcblxuICAgICAgICBfdGhpcy51cGRhdGVQcm9taXNlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuZG9VcGRhdGVIZWFkKGhlYWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZG9VcGRhdGVIZWFkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9VcGRhdGVIZWFkKGhlYWQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdGFncyA9IHt9O1xuICAgICAgaGVhZC5mb3JFYWNoKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHZhciBjb21wb25lbnRzID0gdGFnc1toLnR5cGVdIHx8IFtdO1xuICAgICAgICBjb21wb25lbnRzLnB1c2goaCk7XG4gICAgICAgIHRhZ3NbaC50eXBlXSA9IGNvbXBvbmVudHM7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy51cGRhdGVUaXRsZSh0YWdzLnRpdGxlID8gdGFncy50aXRsZVswXSA6IG51bGwpO1xuXG4gICAgICB2YXIgdHlwZXMgPSBbJ21ldGEnLCAnYmFzZScsICdsaW5rJywgJ3N0eWxlJywgJ3NjcmlwdCddO1xuICAgICAgdHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBfdGhpczIudXBkYXRlRWxlbWVudHModHlwZSwgdGFnc1t0eXBlXSB8fCBbXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVUaXRsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVRpdGxlKGNvbXBvbmVudCkge1xuICAgICAgdmFyIHRpdGxlID0gdm9pZCAwO1xuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBjb21wb25lbnQucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgdGl0bGUgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gY2hpbGRyZW4gOiBjaGlsZHJlbi5qb2luKCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gREVGQVVMVF9USVRMRTtcbiAgICAgIH1cbiAgICAgIGlmICh0aXRsZSAhPT0gZG9jdW1lbnQudGl0bGUpIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRWxlbWVudHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlLCBjb21wb25lbnRzKSB7XG4gICAgICB2YXIgaGVhZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgIHZhciBvbGRUYWdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaGVhZEVsLnF1ZXJ5U2VsZWN0b3JBbGwodHlwZSArICcubmV4dC1oZWFkJykpO1xuICAgICAgdmFyIG5ld1RhZ3MgPSBjb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkuZmlsdGVyKGZ1bmN0aW9uIChuZXdUYWcpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG9sZFRhZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgb2xkVGFnID0gb2xkVGFnc1tpXTtcbiAgICAgICAgICBpZiAob2xkVGFnLmlzRXF1YWxOb2RlKG5ld1RhZykpIHtcbiAgICAgICAgICAgIG9sZFRhZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBvbGRUYWdzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KTtcbiAgICAgIH0pO1xuICAgICAgbmV3VGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBoZWFkRWwuYXBwZW5kQ2hpbGQodCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhlYWRNYW5hZ2VyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBIZWFkTWFuYWdlcjtcblxuXG5mdW5jdGlvbiByZWFjdEVsZW1lbnRUb0RPTShfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAodmFyIHAgaW4gcHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KHApKSBjb250aW51ZTtcbiAgICBpZiAocCA9PT0gJ2NoaWxkcmVuJyB8fCBwID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSBjb250aW51ZTtcblxuICAgIHZhciBhdHRyID0gRE9NQXR0cmlidXRlTmFtZXNbcF0gfHwgcC50b0xvd2VyQ2FzZSgpO1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wc1twXSk7XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0gcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XG5cbiAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgZWwudGV4dENvbnRlbnQgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gY2hpbGRyZW4gOiBjaGlsZHJlbi5qb2luKCcnKTtcbiAgfVxuICByZXR1cm4gZWw7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9uZXh0L2Rpc3QvY2xpZW50L2hlYWQtbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNjQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RIb3RMb2FkZXIgPSByZXF1aXJlKCdyZWFjdC1ob3QtbG9hZGVyJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFscyA9IHJlcXVpcmUoJy4vc2hhbGxvdy1lcXVhbHMnKTtcblxudmFyIF9zaGFsbG93RXF1YWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbHMpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRXJyb3JEZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBudWxsIDogcmVxdWlyZSgnLi9lcnJvci1kZWJ1ZycpLmRlZmF1bHQ7XG5cbnZhciBBcHAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShBcHAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFwcCgpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBBcHApO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChBcHAuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEFwcCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoQXBwLCBbe1xuICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBoZWFkTWFuYWdlciA9IHRoaXMucHJvcHMuaGVhZE1hbmFnZXI7XG5cbiAgICAgIHJldHVybiB7IGhlYWRNYW5hZ2VyOiBoZWFkTWFuYWdlciB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIENvbXBvbmVudCA9IF9wcm9wcy5Db21wb25lbnQsXG4gICAgICAgICAgcHJvcHMgPSBfcHJvcHMucHJvcHMsXG4gICAgICAgICAgZXJyID0gX3Byb3BzLmVycixcbiAgICAgICAgICByb3V0ZXIgPSBfcHJvcHMucm91dGVyO1xuXG4gICAgICB2YXIgY29udGFpbmVyUHJvcHMgPSB7IENvbXBvbmVudDogQ29tcG9uZW50LCBwcm9wczogcHJvcHMsIHJvdXRlcjogcm91dGVyIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgY29udGFpbmVyUHJvcHMpLFxuICAgICAgICBFcnJvckRlYnVnICYmIGVyciA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEVycm9yRGVidWcsIHsgZXJyb3I6IGVyciB9KSA6IG51bGxcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBBcHA7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5BcHAuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIGhlYWRNYW5hZ2VyOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcblxudmFyIENvbnRhaW5lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShDb250YWluZXIsIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQ29udGFpbmVyKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoQ29udGFpbmVyLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShDb250YWluZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKENvbnRhaW5lciwgW3tcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAvLyBuZWVkIHRoaXMgY2hlY2sgbm90IHRvIHJlcmVuZGVyIGNvbXBvbmVudCB3aGljaCBoYXMgYWxyZWFkeSB0aHJvd24gYW4gZXJyb3JcbiAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWxzMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBDb21wb25lbnQgPSBfcHJvcHMyLkNvbXBvbmVudCxcbiAgICAgICAgICBwcm9wcyA9IF9wcm9wczIucHJvcHMsXG4gICAgICAgICAgcm91dGVyID0gX3Byb3BzMi5yb3V0ZXI7XG5cbiAgICAgIHZhciB1cmwgPSBjcmVhdGVVcmwocm91dGVyKTtcblxuICAgICAgLy8gaW5jbHVkZXMgQXBwQ29udGFpbmVyIHdoaWNoIGJ5cGFzc2VzIHNob3VsZENvbXBvbmVudFVwZGF0ZSBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nYWVhcm9uL3JlYWN0LWhvdC1sb2FkZXIvaXNzdWVzLzQ0MlxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RIb3RMb2FkZXIuQXBwQ29udGFpbmVyLFxuICAgICAgICB7IGVycm9yUmVwb3J0ZXI6IEVycm9yRGVidWcgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBwcm9wcywgeyB1cmw6IHVybCB9KSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDb250YWluZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKSB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IHJvdXRlci5xdWVyeSxcbiAgICBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLFxuICAgIGJhY2s6IGZ1bmN0aW9uIGJhY2soKSB7XG4gICAgICByZXR1cm4gcm91dGVyLmJhY2soKTtcbiAgICB9LFxuICAgIHB1c2g6IGZ1bmN0aW9uIHB1c2godXJsLCBhcykge1xuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpO1xuICAgIH0sXG4gICAgcHVzaFRvOiBmdW5jdGlvbiBwdXNoVG8oaHJlZiwgYXMpIHtcbiAgICAgICgwLCBfdXRpbHMud2FybikoJ1dhcm5pbmc6IFxcJ3VybC5wdXNoVG8oKVxcJyBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIFxcJ3VybC5wdXNoKClcXCcgaW5zdGVhZC4nKTtcbiAgICAgIHZhciBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiBudWxsO1xuICAgICAgdmFyIHB1c2hVcmwgPSBhcyB8fCBocmVmO1xuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKTtcbiAgICB9LFxuICAgIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UodXJsLCBhcykge1xuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpO1xuICAgIH0sXG4gICAgcmVwbGFjZVRvOiBmdW5jdGlvbiByZXBsYWNlVG8oaHJlZiwgYXMpIHtcbiAgICAgICgwLCBfdXRpbHMud2FybikoJ1dhcm5pbmc6IFxcJ3VybC5yZXBsYWNlVG8oKVxcJyBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIFxcJ3VybC5yZXBsYWNlKClcXCcgaW5zdGVhZC4nKTtcbiAgICAgIHZhciByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiBudWxsO1xuICAgICAgdmFyIHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmO1xuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKTtcbiAgICB9XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9uZXh0L2Rpc3QvbGliL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gNjUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5Jyk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zbGljZWRUb0FycmF5Mik7XG5cbnZhciBfZW50cmllcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZW50cmllcycpO1xuXG52YXIgX2VudHJpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW50cmllcyk7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvcicpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjc3MgPSByZXF1aXJlKCdnbGFtb3InKTtcbi8vIE5lZWRlZCBiZWNhdXNlIG9mIHRoZSBtdXRhdGlvbiBiZWxvd1xuZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCdnbGFtb3InKV07XG5cbnZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbnZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xudmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG50cnkge1xuICBmb3IgKHZhciBfaXRlcmF0b3IgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KSgoMCwgX2VudHJpZXMyLmRlZmF1bHQpKGNzcykpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgdmFyIF9zdGVwJHZhbHVlID0gKDAsIF9zbGljZWRUb0FycmF5My5kZWZhdWx0KShfc3RlcC52YWx1ZSwgMiksXG4gICAgICAgIGsgPSBfc3RlcCR2YWx1ZVswXSxcbiAgICAgICAgdiA9IF9zdGVwJHZhbHVlWzFdO1xuXG4gICAgaWYgKHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjc3Nba10gPSAoMCwgX3V0aWxzLmRlcHJlY2F0ZWQpKHYsICdXYXJuaW5nOiBcXCduZXh0L2Nzc1xcJyBpcyBkZXByZWNhdGVkLiBQbGVhc2UgcmVmZXIgdG8gdGhlIG1pZ3JhdGlvbiBndWlkZTogaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy93aWtpL01pZ3JhdGluZy1mcm9tLW5leHQtY3NzJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9zZSBzdHlsZSBhcyBkZWZhdWx0IGFuZCB0aGUgd2hvbGUgb2JqZWN0IGFzIHByb3BlcnRpZXNcbiAgICogc28gaXQgY2FuIGJlIHVzZWQgYXMgZm9sbG93czpcbiAgICpcbiAgICogaW1wb3J0IGNzcywgeyBtZXJnZSB9IGZyb20gJ25leHQvY3NzJ1xuICAgKiBjc3MoeyBjb2xvcjogJ3JlZCcgfSlcbiAgICogbWVyZ2UoeyBjb2xvcjogJ2dyZWVuJyB9KVxuICAgKiBjc3MubWVyZ2UoeyBjb2xvcjogJ2JsdWUnIH0pXG4gICAqL1xufSBjYXRjaCAoZXJyKSB7XG4gIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG59IGZpbmFsbHkge1xuICB0cnkge1xuICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgfVxuICB9XG59XG5cbmNzcy5kZWZhdWx0ID0gY3NzLnN0eWxlO1xuKDAsIF9rZXlzMi5kZWZhdWx0KShjc3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ICE9PSAnZGVmYXVsdCcpIHtcbiAgICBjc3MuZGVmYXVsdFtrZXldID0gY3NzW2tleV07XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L25leHQvZGlzdC9saWIvY3NzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfYW5zaUh0bWwgPSByZXF1aXJlKCdhbnNpLWh0bWwnKTtcblxudmFyIF9hbnNpSHRtbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbnNpSHRtbCk7XG5cbnZhciBfaGVhZCA9IHJlcXVpcmUoJy4vaGVhZCcpO1xuXG52YXIgX2hlYWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVhZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBlcnJvciA9IF9yZWYuZXJyb3IsXG4gICAgICBfcmVmJGVycm9yID0gX3JlZi5lcnJvcixcbiAgICAgIG5hbWUgPSBfcmVmJGVycm9yLm5hbWUsXG4gICAgICBtZXNzYWdlID0gX3JlZiRlcnJvci5tZXNzYWdlLFxuICAgICAgbW9kdWxlID0gX3JlZiRlcnJvci5tb2R1bGU7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IHN0eWxlOiBzdHlsZXMuZXJyb3JEZWJ1ZyB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX2hlYWQyLmRlZmF1bHQsXG4gICAgICBudWxsLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ21ldGEnLCB7IG5hbWU6ICd2aWV3cG9ydCcsIGNvbnRlbnQ6ICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyB9KVxuICAgICksXG4gICAgbW9kdWxlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgc3R5bGU6IHN0eWxlcy5oZWFkaW5nIH0sXG4gICAgICAnRXJyb3IgaW4gJyxcbiAgICAgIG1vZHVsZS5yYXdSZXF1ZXN0XG4gICAgKSA6IG51bGwsXG4gICAgbmFtZSA9PT0gJ01vZHVsZUJ1aWxkRXJyb3InID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3ByZScsIHsgc3R5bGU6IHN0eWxlcy5tZXNzYWdlLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6ICgwLCBfYW5zaUh0bWwyLmRlZmF1bHQpKGVuY29kZUh0bWwobWVzc2FnZSkpIH0gfSkgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChTdGFja1RyYWNlLCB7IGVycm9yOiBlcnJvciB9KVxuICApO1xufTtcblxudmFyIFN0YWNrVHJhY2UgPSBmdW5jdGlvbiBTdGFja1RyYWNlKF9yZWYyKSB7XG4gIHZhciBfcmVmMiRlcnJvciA9IF9yZWYyLmVycm9yLFxuICAgICAgbmFtZSA9IF9yZWYyJGVycm9yLm5hbWUsXG4gICAgICBtZXNzYWdlID0gX3JlZjIkZXJyb3IubWVzc2FnZSxcbiAgICAgIHN0YWNrID0gX3JlZjIkZXJyb3Iuc3RhY2s7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBudWxsLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IHN0eWxlOiBzdHlsZXMuaGVhZGluZyB9LFxuICAgICAgbmFtZSAmJiBtZXNzYWdlICYmIG5hbWUgKyAnOiAnICsgbWVzc2FnZVxuICAgICksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAncHJlJyxcbiAgICAgIHsgc3R5bGU6IHN0eWxlcy5tZXNzYWdlIH0sXG4gICAgICBzdGFja1xuICAgIClcbiAgKTtcbn07XG5cbnZhciBzdHlsZXMgPSB7XG4gIGVycm9yRGVidWc6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2E2MDA0YycsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogOTk5OVxuICB9LFxuXG4gIG1lc3NhZ2U6IHtcbiAgICBmb250RmFtaWx5OiAnXCJTRiBNb25vXCIsIFwiUm9ib3RvIE1vbm9cIiwgXCJGaXJhIE1vbm9cIiwgY29uc29sYXMsIG1lbmxvLXJlZ3VsYXIsIG1vbm9zcGFjZScsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICBjb2xvcjogJyNmYmU3ZjEnLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCdcbiAgfSxcblxuICBoZWFkaW5nOiB7XG4gICAgZm9udEZhbWlseTogJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsXG4gICAgZm9udFNpemU6ICcxNXB4JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgY29sb3I6ICcjZmY4NGJmJyxcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4J1xuICB9XG59O1xuXG52YXIgZW5jb2RlSHRtbCA9IGZ1bmN0aW9uIGVuY29kZUh0bWwoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn07XG5cbi8vIHNlZSBjb2xvciBkZWZpbml0aW9ucyBvZiBiYWJlbC1jb2RlLWZyYW1lOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2JhYmVsLWNvZGUtZnJhbWUvc3JjL2luZGV4LmpzXG5cbl9hbnNpSHRtbDIuZGVmYXVsdC5zZXRDb2xvcnMoe1xuICByZXNldDogWydmZmYnLCAnYTYwMDRjJ10sXG4gIGRhcmtncmV5OiAnZTU0NTkwJyxcbiAgeWVsbG93OiAnZWU4Y2JiJyxcbiAgZ3JlZW46ICdmMmEyYzcnLFxuICBtYWdlbnRhOiAnZmJlN2YxJyxcbiAgYmx1ZTogJ2ZmZicsXG4gIGN5YW46ICdlZjhiYjknLFxuICByZWQ6ICdmZmYnXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L25leHQvZGlzdC9saWIvZXJyb3ItZGVidWcuanNcbi8vIG1vZHVsZSBpZCA9IDY1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vbmV4dC9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9uZXh0L34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZGVlcEZvcmNlVXBkYXRlO1xuZnVuY3Rpb24gdHJhdmVyc2VSZW5kZXJlZENoaWxkcmVuKGludGVybmFsSW5zdGFuY2UsIGNhbGxiYWNrLCBhcmd1bWVudCkge1xuICBjYWxsYmFjayhpbnRlcm5hbEluc3RhbmNlLCBhcmd1bWVudCk7XG5cbiAgaWYgKGludGVybmFsSW5zdGFuY2UuX3JlbmRlcmVkQ29tcG9uZW50KSB7XG4gICAgdHJhdmVyc2VSZW5kZXJlZENoaWxkcmVuKGludGVybmFsSW5zdGFuY2UuX3JlbmRlcmVkQ29tcG9uZW50LCBjYWxsYmFjaywgYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGtleSBpbiBpbnRlcm5hbEluc3RhbmNlLl9yZW5kZXJlZENoaWxkcmVuKSB7XG4gICAgICBpZiAoaW50ZXJuYWxJbnN0YW5jZS5fcmVuZGVyZWRDaGlsZHJlbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRyYXZlcnNlUmVuZGVyZWRDaGlsZHJlbihpbnRlcm5hbEluc3RhbmNlLl9yZW5kZXJlZENoaWxkcmVuW2tleV0sIGNhbGxiYWNrLCBhcmd1bWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFBlbmRpbmdGb3JjZVVwZGF0ZShpbnRlcm5hbEluc3RhbmNlKSB7XG4gIGlmIChpbnRlcm5hbEluc3RhbmNlLl9wZW5kaW5nRm9yY2VVcGRhdGUgPT09IGZhbHNlKSB7XG4gICAgaW50ZXJuYWxJbnN0YW5jZS5fcGVuZGluZ0ZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JjZVVwZGF0ZUlmUGVuZGluZyhpbnRlcm5hbEluc3RhbmNlKSB7XG4gIGlmIChpbnRlcm5hbEluc3RhbmNlLl9wZW5kaW5nRm9yY2VVcGRhdGUgPT09IHRydWUpIHtcbiAgICB2YXIgcHVibGljSW5zdGFuY2UgPSBpbnRlcm5hbEluc3RhbmNlLl9pbnN0YW5jZTtcbiAgICB2YXIgdXBkYXRlciA9IHB1YmxpY0luc3RhbmNlLnVwZGF0ZXI7XG5cbiAgICBpZiAodHlwZW9mIHB1YmxpY0luc3RhbmNlLmZvcmNlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwdWJsaWNJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlciAmJiB0eXBlb2YgdXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHB1YmxpY0luc3RhbmNlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVlcEZvcmNlVXBkYXRlKGluc3RhbmNlKSB7XG4gIHZhciBpbnRlcm5hbEluc3RhbmNlID0gaW5zdGFuY2UuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZTtcbiAgdHJhdmVyc2VSZW5kZXJlZENoaWxkcmVuKGludGVybmFsSW5zdGFuY2UsIHNldFBlbmRpbmdGb3JjZVVwZGF0ZSk7XG4gIHRyYXZlcnNlUmVuZGVyZWRDaGlsZHJlbihpbnRlcm5hbEluc3RhbmNlLCBmb3JjZVVwZGF0ZUlmUGVuZGluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtZGVlcC1mb3JjZS11cGRhdGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtaG90LWxvYWRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGRlZXBGb3JjZVVwZGF0ZSA9IHJlcXVpcmUoJ3JlYWN0LWRlZXAtZm9yY2UtdXBkYXRlJyk7XG52YXIgUmVkYm94ID0gcmVxdWlyZSgncmVkYm94LXJlYWN0JykuZGVmYXVsdDtcbnZhciBDb21wb25lbnQgPSBSZWFjdC5Db21wb25lbnQ7XG5cbnZhciBBcHBDb250YWluZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQXBwQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBcHBDb250YWluZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwQ29udGFpbmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBcHBDb250YWluZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBcHBDb250YWluZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHsgZXJyb3I6IG51bGwgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXBwQ29udGFpbmVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodHlwZW9mIF9fUkVBQ1RfSE9UX0xPQURFUl9fID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWFjdCBIb3QgTG9hZGVyOiBJdCBhcHBlYXJzIHRoYXQgXCJyZWFjdC1ob3QtbG9hZGVyL3BhdGNoXCIgJyArICdkaWQgbm90IHJ1biBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGFwcCBzdGFydGVkLiBNYWtlIHN1cmUgdGhhdCBpdCAnICsgJ3J1bnMgYmVmb3JlIGFueSBvdGhlciBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHVzZSBXZWJwYWNrLCAnICsgJ3lvdSBjYW4gYWRkIFwicmVhY3QtaG90LWxvYWRlci9wYXRjaFwiIGFzIHRoZSB2ZXJ5IGZpcnN0IGl0ZW0gdG8gdGhlICcgKyAnXCJlbnRyeVwiIGFycmF5IGluIGl0cyBjb25maWcuIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gYWRkICcgKyAncmVxdWlyZShcInJlYWN0LWhvdC1sb2FkZXIvcGF0Y2hcIikgYXMgdGhlIHZlcnkgZmlyc3QgbGluZSAnICsgJ2luIHRoZSBhcHBsaWNhdGlvbiBjb2RlLCBiZWZvcmUgYW55IG90aGVyIGltcG9ydHMuJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICAvLyBIb3QgcmVsb2FkIGlzIGhhcHBlbmluZy5cbiAgICAgIC8vIFJldHJ5IHJlbmRlcmluZyFcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgfSk7XG4gICAgICAvLyBGb3JjZS11cGRhdGUgdGhlIHdob2xlIHRyZWUsIGluY2x1ZGluZ1xuICAgICAgLy8gY29tcG9uZW50cyB0aGF0IHJlZnVzZSB0byB1cGRhdGUuXG4gICAgICBkZWVwRm9yY2VVcGRhdGUodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGdvaW5nIHRvIGJlY29tZSBvZmZpY2lhbCBpbiBSZWFjdCAxNS54LlxuICAgIC8vIEluIDE1LjAsIGl0IG9ubHkgY2F0Y2hlcyBlcnJvcnMgb24gaW5pdGlhbCBtb3VudC5cbiAgICAvLyBMYXRlciBpdCB3aWxsIHdvcmsgZm9yIHVwZGF0ZXMgYXMgd2VsbDpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC82MDIwXG5cbiAgfSwge1xuICAgIGtleTogJ3Vuc3RhYmxlX2hhbmRsZUVycm9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdGFibGVfaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgZXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5lcnJvclJlcG9ydGVyLCB7IGVycm9yOiBlcnJvciB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuY29tcG9uZW50LCB0aGlzLnByb3BzLnByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFwcENvbnRhaW5lcjtcbn0oQ29tcG9uZW50KTtcblxuQXBwQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBmdW5jdGlvbiBjb21wb25lbnQocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdQYXNzaW5nIFwiY29tcG9uZW50XCIgcHJvcCB0byA8QXBwQ29udGFpbmVyIC8+IGlzIGRlcHJlY2F0ZWQuICcgKyAnUmVwbGFjZSA8QXBwQ29udGFpbmVyIGNvbXBvbmVudD17QXBwfSAvPiB3aXRoIDxBcHBDb250YWluZXI+PEFwcCAvPjwvQXBwQ29udGFpbmVyPi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuICBwcm9wczogZnVuY3Rpb24gcHJvcHMoX3Byb3BzKSB7XG4gICAgaWYgKF9wcm9wcy5wcm9wcykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUGFzc2luZyBcInByb3BzXCIgcHJvcCB0byA8QXBwQ29udGFpbmVyIC8+IGlzIGRlcHJlY2F0ZWQuICcgKyAnUmVwbGFjZSA8QXBwQ29udGFpbmVyIGNvbXBvbmVudD17QXBwfSBwcm9wcz17eyBteVByb3A6IG15VmFsdWUgfX0gLz4gJyArICd3aXRoIDxBcHBDb250YWluZXI+PEFwcCBteVByb3A9e215VmFsdWV9IC8+PC9BcHBDb250YWluZXI+LicpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sXG4gIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihwcm9wcykge1xuICAgIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbikgIT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBcImNoaWxkcmVuXCIgc3VwcGxpZWQgdG8gQXBwQ29udGFpbmVyLiAnICsgJ0V4cGVjdGVkIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgd2l0aCB5b3VyIGFwcOKAmXMgcm9vdCBjb21wb25lbnQsIGUuZy4gPEFwcCAvPi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5BcHBDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvclJlcG9ydGVyOiBSZWRib3hcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwQ29udGFpbmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtaG90LWxvYWRlci9saWIvQXBwQ29udGFpbmVyLmRldi5qc1xuLy8gbW9kdWxlIGlkID0gNzUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKCFtb2R1bGUuaG90IHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL0FwcENvbnRhaW5lci5wcm9kJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vQXBwQ29udGFpbmVyLmRldicpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtaG90LWxvYWRlci9saWIvQXBwQ29udGFpbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDb21wb25lbnQgPSBSZWFjdC5Db21wb25lbnQ7XG5cbnZhciBBcHBDb250YWluZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQXBwQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBcHBDb250YWluZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFwcENvbnRhaW5lci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFwcENvbnRhaW5lcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFwcENvbnRhaW5lciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5jb21wb25lbnQsIHRoaXMucHJvcHMucHJvcHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXBwQ29udGFpbmVyO1xufShDb21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcENvbnRhaW5lcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LWhvdC1sb2FkZXIvbGliL0FwcENvbnRhaW5lci5wcm9kLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQXBwQ29udGFpbmVyID0gcmVxdWlyZSgnLi9BcHBDb250YWluZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3YXJuQWJvdXRJbmNvcnJlY3RVc2FnZShhcmcpIHtcbiAgaWYgKHRoaXMgJiYgdGhpcy5jYWxsYmFjaykge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgSG90IExvYWRlcjogVGhlIFdlYnBhY2sgbG9hZGVyIGlzIG5vdyBleHBvcnRlZCBzZXBhcmF0ZWx5LiAnICsgJ0lmIHlvdSB1c2UgQmFiZWwsIHdlIHJlY29tbWVuZCB0aGF0IHlvdSByZW1vdmUgXCJyZWFjdC1ob3QtbG9hZGVyXCIgJyArICdmcm9tIHRoZSBcImxvYWRlcnNcIiBzZWN0aW9uIG9mIHlvdXIgV2VicGFjayBjb25maWd1cmF0aW9uIGFsdG9nZXRoZXIsICcgKyAnYW5kIGluc3RlYWQgYWRkIFwicmVhY3QtaG90LWxvYWRlci9iYWJlbFwiIHRvIHRoZSBcInBsdWdpbnNcIiBzZWN0aW9uICcgKyAnb2YgeW91ciAuYmFiZWxyYyBmaWxlLiAnICsgJ0lmIHlvdSBwcmVmZXIgbm90IHRvIHVzZSBCYWJlbCwgcmVwbGFjZSBcInJlYWN0LWhvdC1sb2FkZXJcIiBvciAnICsgJ1wicmVhY3QtaG90XCIgd2l0aCBcInJlYWN0LWhvdC1sb2FkZXIvd2VicGFja1wiIGluIHRoZSBcImxvYWRlcnNcIiBzZWN0aW9uICcgKyAnb2YgeW91ciBXZWJwYWNrIGNvbmZpZ3VyYXRpb24uJyk7XG4gIH0gZWxzZSBpZiAoYXJnICYmIGFyZy50eXBlcyAmJiBhcmcudHlwZXMuSWZTdGF0ZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IEhvdCBMb2FkZXI6IFRoZSBCYWJlbCBwbHVnaW4gaXMgZXhwb3J0ZWQgc2VwYXJhdGVseS4gJyArICdSZXBsYWNlIFwicmVhY3QtaG90LWxvYWRlclwiIHdpdGggXCJyZWFjdC1ob3QtbG9hZGVyL2JhYmVsXCIgJyArICdpbiB0aGUgXCJwbHVnaW5zXCIgc2VjdGlvbiBvZiB5b3VyIC5iYWJlbHJjIGZpbGUuICcgKyAnV2hpbGUgd2UgcmVjb21tZW5kIHRoZSBhYm92ZSwgaWYgeW91IHByZWZlciBub3QgdG8gdXNlIEJhYmVsLCAnICsgJ3lvdSBtYXkgcmVtb3ZlIFwicmVhY3QtaG90LWxvYWRlclwiIGZyb20gdGhlIFwicGx1Z2luc1wiIHNlY3Rpb24gb2YgJyArICd5b3VyIC5iYWJlbHJjIGZpbGUgYWx0b2dldGhlciwgYW5kIGluc3RlYWQgYWRkICcgKyAnXCJyZWFjdC1ob3QtbG9hZGVyL3dlYnBhY2tcIiB0byB0aGUgXCJsb2FkZXJzXCIgc2VjdGlvbiBvZiB5b3VyIFdlYnBhY2sgJyArICdjb25maWd1cmF0aW9uLicpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgSG90IExvYWRlciBkb2VzIG5vdCBoYXZlIGEgZGVmYXVsdCBleHBvcnQuICcgKyAnSWYgeW91IHVzZSB0aGUgaW1wb3J0IHN0YXRlbWVudCwgbWFrZSBzdXJlIHRvIGluY2x1ZGUgdGhlICcgKyAnY3VybHkgYnJhY2VzOiBpbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtaG90LWxvYWRlclwiLiAnICsgJ0lmIHlvdSB1c2UgQ29tbW9uSlMsIG1ha2Ugc3VyZSB0byByZWFkIHRoZSBuYW1lZCBleHBvcnQ6ICcgKyAncmVxdWlyZShcInJlYWN0LWhvdC1sb2FkZXJcIikuQXBwQ29udGFpbmVyLicpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5BcHBDb250YWluZXIgPSBBcHBDb250YWluZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1ob3QtbG9hZGVyL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjcmVhdGVQcm94eSA9IHJlcXVpcmUoJ3JlYWN0LXByb3h5JykuZGVmYXVsdDtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCdnbG9iYWwnKTtcblxudmFyIENvbXBvbmVudE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50TWFwKHVzZVdlYWtNYXApIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50TWFwKTtcblxuICAgIGlmICh1c2VXZWFrTWFwKSB7XG4gICAgICB0aGlzLndtID0gbmV3IFdlYWtNYXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbG90cyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb21wb25lbnRNYXAsIFt7XG4gICAga2V5OiAnZ2V0U2xvdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNsb3QodHlwZSkge1xuICAgICAgdmFyIGtleSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgIGlmICghdGhpcy5zbG90c1trZXldKSB7XG4gICAgICAgIHRoaXMuc2xvdHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc2xvdHNba2V5XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQodHlwZSkge1xuICAgICAgaWYgKHRoaXMud20pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud20uZ2V0KHR5cGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2xvdCA9IHRoaXMuZ2V0U2xvdCh0eXBlKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xvdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2xvdFtpXS5rZXkgPT09IHR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gc2xvdFtpXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldCh0eXBlLCB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMud20pIHtcbiAgICAgICAgdGhpcy53bS5zZXQodHlwZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNsb3QgPSB0aGlzLmdldFNsb3QodHlwZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xvdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzbG90W2ldLmtleSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgc2xvdFtpXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzbG90LnB1c2goeyBrZXk6IHR5cGUsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXModHlwZSkge1xuICAgICAgaWYgKHRoaXMud20pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud20uaGFzKHR5cGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2xvdCA9IHRoaXMuZ2V0U2xvdCh0eXBlKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xvdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2xvdFtpXS5rZXkgPT09IHR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb21wb25lbnRNYXA7XG59KCk7XG5cbnZhciBwcm94aWVzQnlJRCA9IHZvaWQgMDtcbnZhciBkaWRXYXJuQWJvdXRJRCA9IHZvaWQgMDtcbnZhciBoYXNDcmVhdGVkRWxlbWVudHNCeVR5cGUgPSB2b2lkIDA7XG52YXIgaWRzQnlUeXBlID0gdm9pZCAwO1xuXG52YXIgaG9va3MgPSB7XG4gIHJlZ2lzdGVyOiBmdW5jdGlvbiByZWdpc3Rlcih0eXBlLCB1bmlxdWVMb2NhbE5hbWUsIGZpbGVOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdW5pcXVlTG9jYWxOYW1lIHx8ICFmaWxlTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHVuaXF1ZUxvY2FsTmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGZpbGVOYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaWQgPSBmaWxlTmFtZSArICcjJyArIHVuaXF1ZUxvY2FsTmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItdGVtcGxhdGVcbiAgICBpZiAoIWlkc0J5VHlwZS5oYXModHlwZSkgJiYgaGFzQ3JlYXRlZEVsZW1lbnRzQnlUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRJRFtpZF0pIHtcbiAgICAgICAgZGlkV2FybkFib3V0SURbaWRdID0gdHJ1ZTtcbiAgICAgICAgdmFyIGJhc2VOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZWFjdCBIb3QgTG9hZGVyOiAnICsgdW5pcXVlTG9jYWxOYW1lICsgJyBpbiAnICsgZmlsZU5hbWUgKyAnIHdpbGwgbm90IGhvdCByZWxvYWQgJyArICgnY29ycmVjdGx5IGJlY2F1c2UgJyArIGJhc2VOYW1lICsgJyB1c2VzIDwnICsgdW5pcXVlTG9jYWxOYW1lICsgJyAvPiBkdXJpbmcgJykgKyAoJ21vZHVsZSBkZWZpbml0aW9uLiBGb3IgaG90IHJlbG9hZGluZyB0byB3b3JrLCBtb3ZlICcgKyB1bmlxdWVMb2NhbE5hbWUgKyAnICcpICsgKCdpbnRvIGEgc2VwYXJhdGUgZmlsZSBhbmQgaW1wb3J0IGl0IGZyb20gJyArIGJhc2VOYW1lICsgJy4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVtZW1iZXIgdGhlIElELlxuICAgIGlkc0J5VHlwZS5zZXQodHlwZSwgaWQpO1xuXG4gICAgLy8gV2UgdXNlIFJlYWN0IFByb3h5IHRvIGdlbmVyYXRlIGNsYXNzZXMgdGhhdCBiZWhhdmUgYWxtb3N0XG4gICAgLy8gdGhlIHNhbWUgd2F5IGFzIHRoZSBvcmlnaW5hbCBjbGFzc2VzIGJ1dCBhcmUgdXBkYXRhYmxlIHdpdGhcbiAgICAvLyBuZXcgdmVyc2lvbnMgd2l0aG91dCBkZXN0cm95aW5nIG9yaWdpbmFsIGluc3RhbmNlcy5cbiAgICBpZiAoIXByb3hpZXNCeUlEW2lkXSkge1xuICAgICAgcHJveGllc0J5SURbaWRdID0gY3JlYXRlUHJveHkodHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3hpZXNCeUlEW2lkXS51cGRhdGUodHlwZSk7XG4gICAgfVxuICB9LFxuICByZXNldDogZnVuY3Rpb24gcmVzZXQodXNlV2Vha01hcCkge1xuICAgIHByb3hpZXNCeUlEID0ge307XG4gICAgZGlkV2FybkFib3V0SUQgPSB7fTtcbiAgICBoYXNDcmVhdGVkRWxlbWVudHNCeVR5cGUgPSBuZXcgQ29tcG9uZW50TWFwKHVzZVdlYWtNYXApO1xuICAgIGlkc0J5VHlwZSA9IG5ldyBDb21wb25lbnRNYXAodXNlV2Vha01hcCk7XG4gIH1cbn07XG5cbmhvb2tzLnJlc2V0KHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVR5cGUodHlwZSkge1xuICAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgY29tcG9zaXRlIGNvbXBvbmVudHNcbiAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBoYXNDcmVhdGVkRWxlbWVudHNCeVR5cGUuc2V0KHR5cGUsIHRydWUpO1xuXG4gIC8vIFdoZW4gYXZhaWxhYmxlLCBnaXZlIHByb3h5IGNsYXNzIHRvIFJlYWN0IGluc3RlYWQgb2YgdGhlIHJlYWwgY2xhc3MuXG4gIHZhciBpZCA9IGlkc0J5VHlwZS5nZXQodHlwZSk7XG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHZhciBwcm94eSA9IHByb3hpZXNCeUlEW2lkXTtcbiAgaWYgKCFwcm94eSkge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgcmV0dXJuIHByb3h5LmdldCgpO1xufVxuXG52YXIgY3JlYXRlRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQ7XG5mdW5jdGlvbiBwYXRjaGVkQ3JlYXRlRWxlbWVudCh0eXBlKSB7XG4gIC8vIFRyaWNrIFJlYWN0IGludG8gcmVuZGVyaW5nIGEgcHJveHkgc28gdGhhdFxuICAvLyBpdHMgc3RhdGUgaXMgcHJlc2VydmVkIHdoZW4gdGhlIGNsYXNzIGNoYW5nZXMuXG4gIC8vIFRoaXMgd2lsbCB1cGRhdGUgdGhlIHByb3h5IGlmIGl0J3MgZm9yIGEga25vd24gdHlwZS5cbiAgdmFyIHJlc29sdmVkVHlwZSA9IHJlc29sdmVUeXBlKHR5cGUpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBbcmVzb2x2ZWRUeXBlXS5jb25jYXQoYXJncykpO1xufVxucGF0Y2hlZENyZWF0ZUVsZW1lbnQuaXNQYXRjaGVkQnlSZWFjdEhvdExvYWRlciA9IHRydWU7XG5cbmZ1bmN0aW9uIHBhdGNoZWRDcmVhdGVGYWN0b3J5KHR5cGUpIHtcbiAgLy8gUGF0Y2ggUmVhY3QuY3JlYXRlRmFjdG9yeSB0byB1c2UgcGF0Y2hlZCBjcmVhdGVFbGVtZW50XG4gIC8vIGJlY2F1c2UgdGhlIG9yaWdpbmFsIGltcGxlbWVudGF0aW9uIHVzZXMgdGhlIGludGVybmFsLFxuICAvLyB1bnBhdGNoZWQgUmVhY3RFbGVtZW50LmNyZWF0ZUVsZW1lbnRcbiAgdmFyIGZhY3RvcnkgPSBwYXRjaGVkQ3JlYXRlRWxlbWVudC5iaW5kKG51bGwsIHR5cGUpO1xuICBmYWN0b3J5LnR5cGUgPSB0eXBlO1xuICByZXR1cm4gZmFjdG9yeTtcbn1cbnBhdGNoZWRDcmVhdGVGYWN0b3J5LmlzUGF0Y2hlZEJ5UmVhY3RIb3RMb2FkZXIgPSB0cnVlO1xuXG5pZiAodHlwZW9mIGdsb2JhbC5fX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgUmVhY3QuY3JlYXRlRWxlbWVudCA9IHBhdGNoZWRDcmVhdGVFbGVtZW50O1xuICBSZWFjdC5jcmVhdGVGYWN0b3J5ID0gcGF0Y2hlZENyZWF0ZUZhY3Rvcnk7XG4gIGdsb2JhbC5fX1JFQUNUX0hPVF9MT0FERVJfXyA9IGhvb2tzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtaG90LWxvYWRlci9saWIvcGF0Y2guZGV2LmpzXG4vLyBtb2R1bGUgaWQgPSA3NTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIW1vZHVsZS5ob3QgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcGF0Y2gucHJvZCcpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3BhdGNoLmRldicpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtaG90LWxvYWRlci9saWIvcGF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDc1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiBub29wICovXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LWhvdC1sb2FkZXIvbGliL3BhdGNoLnByb2QuanNcbi8vIG1vZHVsZSBpZCA9IDc1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBiaW5kQXV0b0JpbmRNZXRob2RzO1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgUmVhY3Qgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIE9yaWdpbmFsOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvNjUwOGIxYWQyNzNhNmYzNzFlOGQ5MGFlNjc2ZTUzOTAxOTk0NjFiNC9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2NsYXNzL1JlYWN0Q2xhc3MuanMjTDY1MC1MNzEzXG4gKi9cblxuZnVuY3Rpb24gYmluZEF1dG9CaW5kTWV0aG9kKGNvbXBvbmVudCwgbWV0aG9kKSB7XG4gIHZhciBib3VuZE1ldGhvZCA9IG1ldGhvZC5iaW5kKGNvbXBvbmVudCk7XG5cbiAgYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQ29udGV4dCA9IGNvbXBvbmVudDtcbiAgYm91bmRNZXRob2QuX19yZWFjdEJvdW5kTWV0aG9kID0gbWV0aG9kO1xuICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBudWxsO1xuXG4gIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lLFxuICAgICAgX2JpbmQgPSBib3VuZE1ldGhvZC5iaW5kO1xuXG4gIGJvdW5kTWV0aG9kLmJpbmQgPSBmdW5jdGlvbiAobmV3VGhpcykge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBpZiAobmV3VGhpcyAhPT0gY29tcG9uZW50ICYmIG5ld1RoaXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybignYmluZCgpOiBSZWFjdCBjb21wb25lbnQgbWV0aG9kcyBtYXkgb25seSBiZSBib3VuZCB0byB0aGUgJyArICdjb21wb25lbnQgaW5zdGFuY2UuIFNlZSAnICsgY29tcG9uZW50TmFtZSk7XG4gICAgfSBlbHNlIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybignYmluZCgpOiBZb3UgYXJlIGJpbmRpbmcgYSBjb21wb25lbnQgbWV0aG9kIHRvIHRoZSBjb21wb25lbnQuICcgKyAnUmVhY3QgZG9lcyB0aGlzIGZvciB5b3UgYXV0b21hdGljYWxseSBpbiBhIGhpZ2gtcGVyZm9ybWFuY2UgJyArICd3YXksIHNvIHlvdSBjYW4gc2FmZWx5IHJlbW92ZSB0aGlzIGNhbGwuIFNlZSAnICsgY29tcG9uZW50TmFtZSk7XG4gICAgICByZXR1cm4gYm91bmRNZXRob2Q7XG4gICAgfVxuXG4gICAgdmFyIHJlYm91bmRNZXRob2QgPSBfYmluZC5hcHBseShib3VuZE1ldGhvZCwgYXJndW1lbnRzKTtcbiAgICByZWJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZENvbnRleHQgPSBjb21wb25lbnQ7XG4gICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgcmV0dXJuIHJlYm91bmRNZXRob2Q7XG4gIH07XG5cbiAgcmV0dXJuIGJvdW5kTWV0aG9kO1xufVxuXG5mdW5jdGlvbiBiaW5kQXV0b0JpbmRNZXRob2RzRnJvbU1hcChjb21wb25lbnQpIHtcbiAgZm9yICh2YXIgYXV0b0JpbmRLZXkgaW4gY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZE1hcCkge1xuICAgIGlmICghY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZE1hcC5oYXNPd25Qcm9wZXJ0eShhdXRvQmluZEtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUd2Vhazogc2tpcCBtZXRob2RzIHRoYXQgYXJlIGFscmVhZHkgYm91bmQuXG4gICAgLy8gVGhpcyBpcyB0byBwcmVzZXJ2ZSBtZXRob2QgcmVmZXJlbmNlIGluIGNhc2UgaXQgaXMgdXNlZFxuICAgIC8vIGFzIGEgc3Vic2NyaXB0aW9uIGhhbmRsZXIgdGhhdCBuZWVkcyB0byBiZSBkZXRhY2hlZCBsYXRlci5cbiAgICBpZiAoY29tcG9uZW50Lmhhc093blByb3BlcnR5KGF1dG9CaW5kS2V5KSAmJiBjb21wb25lbnRbYXV0b0JpbmRLZXldLl9fcmVhY3RCb3VuZENvbnRleHQgPT09IGNvbXBvbmVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIG1ldGhvZCA9IGNvbXBvbmVudC5fX3JlYWN0QXV0b0JpbmRNYXBbYXV0b0JpbmRLZXldO1xuICAgIGNvbXBvbmVudFthdXRvQmluZEtleV0gPSBiaW5kQXV0b0JpbmRNZXRob2QoY29tcG9uZW50LCBtZXRob2QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZHMoY29tcG9uZW50KSB7XG4gIGlmIChjb21wb25lbnQuX19yZWFjdEF1dG9CaW5kUGFpcnMpIHtcbiAgICBiaW5kQXV0b0JpbmRNZXRob2RzRnJvbUFycmF5KGNvbXBvbmVudCk7XG4gIH0gZWxzZSBpZiAoY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZE1hcCkge1xuICAgIGJpbmRBdXRvQmluZE1ldGhvZHNGcm9tTWFwKGNvbXBvbmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZEF1dG9CaW5kTWV0aG9kc0Zyb21BcnJheShjb21wb25lbnQpIHtcbiAgdmFyIHBhaXJzID0gY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZFBhaXJzO1xuXG4gIGlmICghcGFpcnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgdmFyIGF1dG9CaW5kS2V5ID0gcGFpcnNbaV07XG5cbiAgICBpZiAoY29tcG9uZW50Lmhhc093blByb3BlcnR5KGF1dG9CaW5kS2V5KSAmJiBjb21wb25lbnRbYXV0b0JpbmRLZXldLl9fcmVhY3RCb3VuZENvbnRleHQgPT09IGNvbXBvbmVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIG1ldGhvZCA9IHBhaXJzW2kgKyAxXTtcblxuICAgIGNvbXBvbmVudFthdXRvQmluZEtleV0gPSBiaW5kQXV0b0JpbmRNZXRob2QoY29tcG9uZW50LCBtZXRob2QpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9tb2R1bGVzL2JpbmRBdXRvQmluZE1ldGhvZHMuanNcbi8vIG1vZHVsZSBpZCA9IDc2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ2xhc3NQcm94eTtcblxudmFyIF9maW5kID0gcmVxdWlyZSgnbG9kYXNoL2ZpbmQnKTtcblxudmFyIF9maW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZpbmQpO1xuXG52YXIgX2NyZWF0ZVByb3RvdHlwZVByb3h5ID0gcmVxdWlyZSgnLi9jcmVhdGVQcm90b3R5cGVQcm94eScpO1xuXG52YXIgX2NyZWF0ZVByb3RvdHlwZVByb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByb3RvdHlwZVByb3h5KTtcblxudmFyIF9iaW5kQXV0b0JpbmRNZXRob2RzID0gcmVxdWlyZSgnLi9iaW5kQXV0b0JpbmRNZXRob2RzJyk7XG5cbnZhciBfYmluZEF1dG9CaW5kTWV0aG9kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQXV0b0JpbmRNZXRob2RzKTtcblxudmFyIF9kZWxldGVVbmtub3duQXV0b0JpbmRNZXRob2RzID0gcmVxdWlyZSgnLi9kZWxldGVVbmtub3duQXV0b0JpbmRNZXRob2RzJyk7XG5cbnZhciBfZGVsZXRlVW5rbm93bkF1dG9CaW5kTWV0aG9kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxldGVVbmtub3duQXV0b0JpbmRNZXRob2RzKTtcblxudmFyIF9zdXBwb3J0c1Byb3RvQXNzaWdubWVudCA9IHJlcXVpcmUoJy4vc3VwcG9ydHNQcm90b0Fzc2lnbm1lbnQnKTtcblxudmFyIF9zdXBwb3J0c1Byb3RvQXNzaWdubWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdXBwb3J0c1Byb3RvQXNzaWdubWVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIgUkVTRVJWRURfU1RBVElDUyA9IFsnbGVuZ3RoJywgJ2Rpc3BsYXlOYW1lJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2NhbGxlcicsICdwcm90b3R5cGUnLCAndG9TdHJpbmcnXTtcblxuZnVuY3Rpb24gaXNFcXVhbERlc2NyaXB0b3IoYSwgYikge1xuICBpZiAoIWEgJiYgIWIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoIWEgfHwgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gIHJldHVybiBkaXNwbGF5TmFtZSAmJiBkaXNwbGF5TmFtZSAhPT0gJ1JlYWN0Q29tcG9uZW50JyA/IGRpc3BsYXlOYW1lIDogJ1Vua25vd24nO1xufVxuXG4vLyBUaGlzIHdhcyBvcmlnaW5hbGx5IGEgV2Vha01hcCBidXQgd2UgaGFkIGlzc3VlcyB3aXRoIFJlYWN0IE5hdGl2ZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nYWVhcm9uL3JlYWN0LXByb3h5L2lzc3Vlcy81MCNpc3N1ZWNvbW1lbnQtMTkyOTI4MDY2XG52YXIgYWxsUHJveGllcyA9IFtdO1xuZnVuY3Rpb24gZmluZFByb3h5KENvbXBvbmVudCkge1xuICB2YXIgcGFpciA9ICgwLCBfZmluZDIuZGVmYXVsdCkoYWxsUHJveGllcywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAxKTtcblxuICAgIHZhciBrZXkgPSBfcmVmMlswXTtcbiAgICByZXR1cm4ga2V5ID09PSBDb21wb25lbnQ7XG4gIH0pO1xuICByZXR1cm4gcGFpciA/IHBhaXJbMV0gOiBudWxsO1xufVxuZnVuY3Rpb24gYWRkUHJveHkoQ29tcG9uZW50LCBwcm94eSkge1xuICBhbGxQcm94aWVzLnB1c2goW0NvbXBvbmVudCwgcHJveHldKTtcbn1cblxuZnVuY3Rpb24gcHJveHlDbGFzcyhJbml0aWFsQ29tcG9uZW50KSB7XG4gIC8vIFByZXZlbnQgZG91YmxlIHdyYXBwaW5nLlxuICAvLyBHaXZlbiBhIHByb3h5IGNsYXNzLCByZXR1cm4gdGhlIGV4aXN0aW5nIHByb3h5IG1hbmFnaW5nIGl0LlxuICB2YXIgZXhpc3RpbmdQcm94eSA9IGZpbmRQcm94eShJbml0aWFsQ29tcG9uZW50KTtcbiAgaWYgKGV4aXN0aW5nUHJveHkpIHtcbiAgICByZXR1cm4gZXhpc3RpbmdQcm94eTtcbiAgfVxuXG4gIHZhciBDdXJyZW50Q29tcG9uZW50ID0gdW5kZWZpbmVkO1xuICB2YXIgUHJveHlDb21wb25lbnQgPSB1bmRlZmluZWQ7XG4gIHZhciBzYXZlZERlc2NyaXB0b3JzID0ge307XG5cbiAgZnVuY3Rpb24gaW5zdGFudGlhdGUoZmFjdG9yeSwgY29udGV4dCwgcGFyYW1zKSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IGZhY3RvcnkoKTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50LmFwcGx5KGNvbnRleHQsIHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBOYXRpdmUgRVM2IGNsYXNzIGluc3RhbnRpYXRpb25cbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShjb21wb25lbnQsIFtudWxsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHBhcmFtcykpKSkoKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhpbnN0YW5jZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaWYgKFJFU0VSVkVEX1NUQVRJQ1MuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGV4dFtrZXldID0gaW5zdGFuY2Vba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKEluaXRpYWxDb21wb25lbnQpO1xuICB0cnkge1xuICAgIC8vIENyZWF0ZSBhIHByb3h5IGNvbnN0cnVjdG9yIHdpdGggbWF0Y2hpbmcgbmFtZVxuICAgIFByb3h5Q29tcG9uZW50ID0gbmV3IEZ1bmN0aW9uKCdmYWN0b3J5JywgJ2luc3RhbnRpYXRlJywgJ3JldHVybiBmdW5jdGlvbiAnICsgZGlzcGxheU5hbWUgKyAnKCkge1xcbiAgICAgICAgIHJldHVybiBpbnN0YW50aWF0ZShmYWN0b3J5LCB0aGlzLCBhcmd1bWVudHMpO1xcbiAgICAgIH0nKShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQ3VycmVudENvbXBvbmVudDtcbiAgICB9LCBpbnN0YW50aWF0ZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFNvbWUgZW52aXJvbm1lbnRzIG1heSBmb3JiaWQgZHluYW1pYyBldmFsdWF0aW9uXG4gICAgUHJveHlDb21wb25lbnQgPSBmdW5jdGlvbiBQcm94eUNvbXBvbmVudCgpIHtcbiAgICAgIHJldHVybiBpbnN0YW50aWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBDdXJyZW50Q29tcG9uZW50O1xuICAgICAgfSwgdGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG4gIHRyeSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFByb3h5Q29tcG9uZW50LCAnbmFtZScsIHtcbiAgICAgIHZhbHVlOiBkaXNwbGF5TmFtZVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgLy8gUHJveHkgdG9TdHJpbmcoKSB0byB0aGUgY3VycmVudCBjb25zdHJ1Y3RvclxuICBQcm94eUNvbXBvbmVudC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBDdXJyZW50Q29tcG9uZW50LnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgdmFyIHByb3RvdHlwZVByb3h5ID0gdW5kZWZpbmVkO1xuICBpZiAoSW5pdGlhbENvbXBvbmVudC5wcm90b3R5cGUgJiYgSW5pdGlhbENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgIC8vIFBvaW50IHByb3h5IGNvbnN0cnVjdG9yIHRvIHRoZSBwcm94eSBwcm90b3R5cGVcbiAgICBwcm90b3R5cGVQcm94eSA9ICgwLCBfY3JlYXRlUHJvdG90eXBlUHJveHkyLmRlZmF1bHQpKCk7XG4gICAgUHJveHlDb21wb25lbnQucHJvdG90eXBlID0gcHJvdG90eXBlUHJveHkuZ2V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoTmV4dENvbXBvbmVudCkge1xuICAgIGlmICh0eXBlb2YgTmV4dENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIGNvbnN0cnVjdG9yLicpO1xuICAgIH1cbiAgICBpZiAoTmV4dENvbXBvbmVudCA9PT0gQ3VycmVudENvbXBvbmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgcHJveHkgY3ljbGVzXG4gICAgdmFyIGV4aXN0aW5nUHJveHkgPSBmaW5kUHJveHkoTmV4dENvbXBvbmVudCk7XG4gICAgaWYgKGV4aXN0aW5nUHJveHkpIHtcbiAgICAgIHJldHVybiB1cGRhdGUoZXhpc3RpbmdQcm94eS5fX2dldEN1cnJlbnQoKSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZSB0aGUgbmV4dCBjb25zdHJ1Y3RvciBzbyB3ZSBjYWxsIGl0XG4gICAgdmFyIFByZXZpb3VzQ29tcG9uZW50ID0gQ3VycmVudENvbXBvbmVudDtcbiAgICBDdXJyZW50Q29tcG9uZW50ID0gTmV4dENvbXBvbmVudDtcblxuICAgIC8vIFRyeSB0byBpbmZlciBkaXNwbGF5TmFtZVxuICAgIGRpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUoTmV4dENvbXBvbmVudCk7XG4gICAgUHJveHlDb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFByb3h5Q29tcG9uZW50LCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IGRpc3BsYXlOYW1lXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAvLyBTZXQgdXAgdGhlIHNhbWUgcHJvdG90eXBlIGZvciBpbmhlcml0ZWQgc3RhdGljc1xuICAgIFByb3h5Q29tcG9uZW50Ll9fcHJvdG9fXyA9IE5leHRDb21wb25lbnQuX19wcm90b19fO1xuXG4gICAgLy8gQ29weSBvdmVyIHN0YXRpYyBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFkZGVkIGF0IHJ1bnRpbWVcbiAgICBpZiAoUHJldmlvdXNDb21wb25lbnQpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFByZXZpb3VzQ29tcG9uZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKFJFU0VSVkVEX1NUQVRJQ1MuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJldkRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByZXZpb3VzQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICB2YXIgc2F2ZWREZXNjcmlwdG9yID0gc2F2ZWREZXNjcmlwdG9yc1trZXldO1xuXG4gICAgICAgIGlmICghaXNFcXVhbERlc2NyaXB0b3IocHJldkRlc2NyaXB0b3IsIHNhdmVkRGVzY3JpcHRvcikpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmV4dENvbXBvbmVudCwga2V5LCBwcmV2RGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvcHkgbmV3bHkgZGVmaW5lZCBzdGF0aWMgbWV0aG9kcyBhbmQgcHJvcGVydGllc1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE5leHRDb21wb25lbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKFJFU0VSVkVEX1NUQVRJQ1MuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkRlc2NyaXB0b3IgPSBQcmV2aW91c0NvbXBvbmVudCAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByZXZpb3VzQ29tcG9uZW50LCBrZXkpO1xuICAgICAgdmFyIHNhdmVkRGVzY3JpcHRvciA9IHNhdmVkRGVzY3JpcHRvcnNba2V5XTtcblxuICAgICAgLy8gU2tpcCByZWRlZmluZWQgZGVzY3JpcHRvcnNcbiAgICAgIGlmIChwcmV2RGVzY3JpcHRvciAmJiBzYXZlZERlc2NyaXB0b3IgJiYgIWlzRXF1YWxEZXNjcmlwdG9yKHNhdmVkRGVzY3JpcHRvciwgcHJldkRlc2NyaXB0b3IpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZXh0Q29tcG9uZW50LCBrZXksIHByZXZEZXNjcmlwdG9yKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFByb3h5Q29tcG9uZW50LCBrZXksIHByZXZEZXNjcmlwdG9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldkRlc2NyaXB0b3IgJiYgIXNhdmVkRGVzY3JpcHRvcikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJveHlDb21wb25lbnQsIGtleSwgcHJldkRlc2NyaXB0b3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0RGVzY3JpcHRvciA9IF9leHRlbmRzKHt9LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5leHRDb21wb25lbnQsIGtleSksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHNhdmVkRGVzY3JpcHRvcnNba2V5XSA9IG5leHREZXNjcmlwdG9yO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFByb3h5Q29tcG9uZW50LCBrZXksIG5leHREZXNjcmlwdG9yKTtcbiAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBzdGF0aWMgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBubyBsb25nZXIgZGVmaW5lZFxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFByb3h5Q29tcG9uZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChSRVNFUlZFRF9TVEFUSUNTLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFNraXAgc3RhdGljcyB0aGF0IGV4aXN0IG9uIHRoZSBuZXh0IGNsYXNzXG4gICAgICBpZiAoTmV4dENvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFNraXAgbm9uLWNvbmZpZ3VyYWJsZSBzdGF0aWNzXG4gICAgICB2YXIgcHJveHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihQcm94eUNvbXBvbmVudCwga2V5KTtcbiAgICAgIGlmIChwcm94eURlc2NyaXB0b3IgJiYgIXByb3h5RGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkRlc2NyaXB0b3IgPSBQcmV2aW91c0NvbXBvbmVudCAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByZXZpb3VzQ29tcG9uZW50LCBrZXkpO1xuICAgICAgdmFyIHNhdmVkRGVzY3JpcHRvciA9IHNhdmVkRGVzY3JpcHRvcnNba2V5XTtcblxuICAgICAgLy8gU2tpcCByZWRlZmluZWQgZGVzY3JpcHRvcnNcbiAgICAgIGlmIChwcmV2RGVzY3JpcHRvciAmJiBzYXZlZERlc2NyaXB0b3IgJiYgIWlzRXF1YWxEZXNjcmlwdG9yKHNhdmVkRGVzY3JpcHRvciwgcHJldkRlc2NyaXB0b3IpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIFByb3h5Q29tcG9uZW50W2tleV07XG4gICAgfSk7XG5cbiAgICBpZiAocHJvdG90eXBlUHJveHkpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgcHJvdG90eXBlIHByb3h5IHdpdGggbmV3IG1ldGhvZHNcbiAgICAgIHZhciBtb3VudGVkSW5zdGFuY2VzID0gcHJvdG90eXBlUHJveHkudXBkYXRlKE5leHRDb21wb25lbnQucHJvdG90eXBlKTtcblxuICAgICAgLy8gU2V0IHVwIHRoZSBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBzbyBhY2Nlc3NpbmcgdGhlIHN0YXRpY3Mgd29ya1xuICAgICAgUHJveHlDb21wb25lbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTmV4dENvbXBvbmVudDtcblxuICAgICAgLy8gV2UgbWlnaHQgaGF2ZSBhZGRlZCBuZXcgbWV0aG9kcyB0aGF0IG5lZWQgdG8gYmUgYXV0by1ib3VuZFxuICAgICAgbW91bnRlZEluc3RhbmNlcy5mb3JFYWNoKF9iaW5kQXV0b0JpbmRNZXRob2RzMi5kZWZhdWx0KTtcbiAgICAgIG1vdW50ZWRJbnN0YW5jZXMuZm9yRWFjaChfZGVsZXRlVW5rbm93bkF1dG9CaW5kTWV0aG9kczIuZGVmYXVsdCk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gUHJveHlDb21wb25lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIHJldHVybiBDdXJyZW50Q29tcG9uZW50O1xuICB9XG5cbiAgdXBkYXRlKEluaXRpYWxDb21wb25lbnQpO1xuXG4gIHZhciBwcm94eSA9IHsgZ2V0OiBnZXQsIHVwZGF0ZTogdXBkYXRlIH07XG4gIGFkZFByb3h5KFByb3h5Q29tcG9uZW50LCBwcm94eSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3h5LCAnX19nZXRDdXJyZW50Jywge1xuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBnZXRDdXJyZW50XG4gIH0pO1xuXG4gIHJldHVybiBwcm94eTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFsbGJhY2soQ29tcG9uZW50KSB7XG4gIHZhciBDdXJyZW50Q29tcG9uZW50ID0gQ29tcG9uZW50O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ3VycmVudENvbXBvbmVudDtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKE5leHRDb21wb25lbnQpIHtcbiAgICAgIEN1cnJlbnRDb21wb25lbnQgPSBOZXh0Q29tcG9uZW50O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3NQcm94eShDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5fX3Byb3RvX18gJiYgKDAsIF9zdXBwb3J0c1Byb3RvQXNzaWdubWVudDIuZGVmYXVsdCkoKSA/IHByb3h5Q2xhc3MoQ29tcG9uZW50KSA6IGNyZWF0ZUZhbGxiYWNrKENvbXBvbmVudCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9tb2R1bGVzL2NyZWF0ZUNsYXNzUHJveHkuanNcbi8vIG1vZHVsZSBpZCA9IDc2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcm90b3R5cGVQcm94eTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvYXNzaWduJyk7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbnZhciBfZGlmZmVyZW5jZSA9IHJlcXVpcmUoJ2xvZGFzaC9kaWZmZXJlbmNlJyk7XG5cbnZhciBfZGlmZmVyZW5jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaWZmZXJlbmNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3JlYXRlUHJvdG90eXBlUHJveHkoKSB7XG4gIHZhciBwcm94eSA9IHt9O1xuICB2YXIgY3VycmVudCA9IG51bGw7XG4gIHZhciBtb3VudGVkSW5zdGFuY2VzID0gW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm94aWVkIHRvU3RyaW5nKCkgbWV0aG9kIHBvaW50aW5nIHRvIHRoZSBjdXJyZW50IHZlcnNpb24ncyB0b1N0cmluZygpLlxuICAgKi9cbiAgZnVuY3Rpb24gcHJveHlUb1N0cmluZyhuYW1lKSB7XG4gICAgLy8gV3JhcCB0byBhbHdheXMgY2FsbCB0aGUgY3VycmVudCB2ZXJzaW9uXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50W25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50W25hbWVdLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJzxtZXRob2Qgd2FzIGRlbGV0ZWQ+JztcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm94aWVkIG1ldGhvZCB0aGF0IGNhbGxzIHRoZSBjdXJyZW50IHZlcnNpb24sIHdoZW5ldmVyIGF2YWlsYWJsZS5cbiAgICovXG4gIGZ1bmN0aW9uIHByb3h5TWV0aG9kKG5hbWUpIHtcbiAgICAvLyBXcmFwIHRvIGFsd2F5cyBjYWxsIHRoZSBjdXJyZW50IHZlcnNpb25cbiAgICB2YXIgcHJveGllZE1ldGhvZCA9IGZ1bmN0aW9uIHByb3hpZWRNZXRob2QoKSB7XG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRbbmFtZV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ29weSBwcm9wZXJ0aWVzIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiwgaWYgYW55XG4gICAgKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHByb3hpZWRNZXRob2QsIGN1cnJlbnRbbmFtZV0pO1xuICAgIHByb3hpZWRNZXRob2QudG9TdHJpbmcgPSBwcm94eVRvU3RyaW5nKG5hbWUpO1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJveGllZE1ldGhvZCwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBuYW1lXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICByZXR1cm4gcHJveGllZE1ldGhvZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdWdtZW50cyB0aGUgb3JpZ2luYWwgY29tcG9uZW50RGlkTW91bnQgd2l0aCBpbnN0YW5jZSB0cmFja2luZy5cbiAgICovXG4gIGZ1bmN0aW9uIHByb3hpZWRDb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBtb3VudGVkSW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50LmNvbXBvbmVudERpZE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY3VycmVudC5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuICBwcm94aWVkQ29tcG9uZW50RGlkTW91bnQudG9TdHJpbmcgPSBwcm94eVRvU3RyaW5nKCdjb21wb25lbnREaWRNb3VudCcpO1xuXG4gIC8qKlxuICAgKiBBdWdtZW50cyB0aGUgb3JpZ2luYWwgY29tcG9uZW50V2lsbFVubW91bnQgd2l0aCBpbnN0YW5jZSB0cmFja2luZy5cbiAgICovXG4gIGZ1bmN0aW9uIHByb3hpZWRDb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgaW5kZXggPSBtb3VudGVkSW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gICAgLy8gVW5sZXNzIHdlJ3JlIGluIGEgd2VpcmQgZW52aXJvbm1lbnQgd2l0aG91dCBjb21wb25lbnREaWRNb3VudFxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIG1vdW50ZWRJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50LmNvbXBvbmVudFdpbGxVbm1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY3VycmVudC5jb21wb25lbnRXaWxsVW5tb3VudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuICBwcm94aWVkQ29tcG9uZW50V2lsbFVubW91bnQudG9TdHJpbmcgPSBwcm94eVRvU3RyaW5nKCdjb21wb25lbnRXaWxsVW5tb3VudCcpO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGEgcHJvcGVydHkgb24gdGhlIHByb3h5LlxuICAgKi9cbiAgZnVuY3Rpb24gZGVmaW5lUHJveHlQcm9wZXJ0eShuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3h5LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGEgcHJvcGVydHksIGF0dGVtcHRpbmcgdG8ga2VlcCB0aGUgb3JpZ2luYWwgZGVzY3JpcHRvciBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZGVmaW5lUHJveHlQcm9wZXJ0eVdpdGhWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBfcmVmID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjdXJyZW50LCBuYW1lKSB8fCB7fTtcblxuICAgIHZhciBfcmVmJGVudW1lcmFibGUgPSBfcmVmLmVudW1lcmFibGU7XG4gICAgdmFyIGVudW1lcmFibGUgPSBfcmVmJGVudW1lcmFibGUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRlbnVtZXJhYmxlO1xuICAgIHZhciBfcmVmJHdyaXRhYmxlID0gX3JlZi53cml0YWJsZTtcbiAgICB2YXIgd3JpdGFibGUgPSBfcmVmJHdyaXRhYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZiR3cml0YWJsZTtcblxuXG4gICAgZGVmaW5lUHJveHlQcm9wZXJ0eShuYW1lLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBlbnVtZXJhYmxlLFxuICAgICAgd3JpdGFibGU6IHdyaXRhYmxlLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBhdXRvLWJpbmQgbWFwIG1pbWlja2luZyB0aGUgb3JpZ2luYWwgbWFwLCBidXQgZGlyZWN0ZWQgYXQgcHJveHkuXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVBdXRvQmluZE1hcCgpIHtcbiAgICBpZiAoIWN1cnJlbnQuX19yZWFjdEF1dG9CaW5kTWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIF9fcmVhY3RBdXRvQmluZE1hcCA9IHt9O1xuICAgIGZvciAodmFyIG5hbWUgaW4gY3VycmVudC5fX3JlYWN0QXV0b0JpbmRNYXApIHtcbiAgICAgIGlmICh0eXBlb2YgcHJveHlbbmFtZV0gPT09ICdmdW5jdGlvbicgJiYgY3VycmVudC5fX3JlYWN0QXV0b0JpbmRNYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgX19yZWFjdEF1dG9CaW5kTWFwW25hbWVdID0gcHJveHlbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9fcmVhY3RBdXRvQmluZE1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGF1dG8tYmluZCBtYXAgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBtYXAsIGJ1dCBkaXJlY3RlZCBhdCBwcm94eS5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUF1dG9CaW5kUGFpcnMoKSB7XG4gICAgdmFyIF9fcmVhY3RBdXRvQmluZFBhaXJzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnQuX19yZWFjdEF1dG9CaW5kUGFpcnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHZhciBuYW1lID0gY3VycmVudC5fX3JlYWN0QXV0b0JpbmRQYWlyc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSBwcm94eVtuYW1lXTtcblxuICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX19yZWFjdEF1dG9CaW5kUGFpcnMucHVzaChuYW1lLCBtZXRob2QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfX3JlYWN0QXV0b0JpbmRQYWlycztcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSB1cGRhdGVkIHByb3RvdHlwZS5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZShuZXh0KSB7XG4gICAgLy8gU2F2ZSBjdXJyZW50IHNvdXJjZSBvZiB0cnV0aFxuICAgIGN1cnJlbnQgPSBuZXh0O1xuXG4gICAgLy8gRmluZCBjaGFuZ2VkIHByb3BlcnR5IG5hbWVzXG4gICAgdmFyIGN1cnJlbnROYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpO1xuICAgIHZhciBwcmV2aW91c05hbWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm94eSk7XG4gICAgdmFyIHJlbW92ZWROYW1lcyA9ICgwLCBfZGlmZmVyZW5jZTIuZGVmYXVsdCkocHJldmlvdXNOYW1lLCBjdXJyZW50TmFtZXMpO1xuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgdGhhdCBhcmUgbm8gbG9uZ2VyIHRoZXJlXG4gICAgcmVtb3ZlZE5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGRlbGV0ZSBwcm94eVtuYW1lXTtcbiAgICB9KTtcblxuICAgIC8vIENvcHkgZXZlcnkgZGVzY3JpcHRvclxuICAgIGN1cnJlbnROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY3VycmVudCwgbmFtZSk7XG4gICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRnVuY3Rpb25zIHJlcXVpcmUgYWRkaXRpb25hbCB3cmFwcGluZyBzbyB0aGV5IGNhbiBiZSBib3VuZCBsYXRlclxuICAgICAgICBkZWZpbmVQcm94eVByb3BlcnR5V2l0aFZhbHVlKG5hbWUsIHByb3h5TWV0aG9kKG5hbWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyIHZhbHVlcyBjYW4gYmUgY29waWVkIGRpcmVjdGx5XG4gICAgICAgIGRlZmluZVByb3h5UHJvcGVydHkobmFtZSwgZGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUcmFjayBtb3VudGluZyBhbmQgdW5tb3VudGluZ1xuICAgIGRlZmluZVByb3h5UHJvcGVydHlXaXRoVmFsdWUoJ2NvbXBvbmVudERpZE1vdW50JywgcHJveGllZENvbXBvbmVudERpZE1vdW50KTtcbiAgICBkZWZpbmVQcm94eVByb3BlcnR5V2l0aFZhbHVlKCdjb21wb25lbnRXaWxsVW5tb3VudCcsIHByb3hpZWRDb21wb25lbnRXaWxsVW5tb3VudCk7XG5cbiAgICBpZiAoY3VycmVudC5oYXNPd25Qcm9wZXJ0eSgnX19yZWFjdEF1dG9CaW5kTWFwJykpIHtcbiAgICAgIGRlZmluZVByb3h5UHJvcGVydHlXaXRoVmFsdWUoJ19fcmVhY3RBdXRvQmluZE1hcCcsIGNyZWF0ZUF1dG9CaW5kTWFwKCkpO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KCdfX3JlYWN0QXV0b0JpbmRQYWlycycpKSB7XG4gICAgICBkZWZpbmVQcm94eVByb3BlcnR5V2l0aFZhbHVlKCdfX3JlYWN0QXV0b0JpbmRQYWlycycsIGNyZWF0ZUF1dG9CaW5kUGFpcnMoKSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAgICBwcm94eS5fX3Byb3RvX18gPSBuZXh0O1xuXG4gICAgcmV0dXJuIG1vdW50ZWRJbnN0YW5jZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXAtdG8tZGF0ZSBwcm94eSBwcm90b3R5cGUuXG4gICAqL1xuICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICBnZXQ6IGdldFxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L21vZHVsZXMvY3JlYXRlUHJvdG90eXBlUHJveHkuanNcbi8vIG1vZHVsZSBpZCA9IDc2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkZWxldGVVbmtub3duQXV0b0JpbmRNZXRob2RzO1xuZnVuY3Rpb24gc2hvdWxkRGVsZXRlQ2xhc3NpY0luc3RhbmNlTWV0aG9kKGNvbXBvbmVudCwgbmFtZSkge1xuICBpZiAoY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZE1hcCAmJiBjb21wb25lbnQuX19yZWFjdEF1dG9CaW5kTWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgLy8gSXQncyBhIGtub3duIGF1dG9ib3VuZCBmdW5jdGlvbiwga2VlcCBpdFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb21wb25lbnQuX19yZWFjdEF1dG9CaW5kUGFpcnMgJiYgY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZFBhaXJzLmluZGV4T2YobmFtZSkgPj0gMCkge1xuICAgIC8vIEl0J3MgYSBrbm93biBhdXRvYm91bmQgZnVuY3Rpb24sIGtlZXAgaXRcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoY29tcG9uZW50W25hbWVdLl9fcmVhY3RCb3VuZEFyZ3VtZW50cyAhPT0gbnVsbCkge1xuICAgIC8vIEl0J3MgYSBmdW5jdGlvbiBib3VuZCB0byBzcGVjaWZpYyBhcmdzLCBrZWVwIGl0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gSXQncyBhIGNhY2hlZCBib3VuZCBtZXRob2QgZm9yIGEgZnVuY3Rpb25cbiAgLy8gdGhhdCB3YXMgZGVsZXRlZCBieSB1c2VyLCBzbyB3ZSBkZWxldGUgaXQgZnJvbSBjb21wb25lbnQuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzaG91bGREZWxldGVNb2Rlcm5JbnN0YW5jZU1ldGhvZChjb21wb25lbnQsIG5hbWUpIHtcbiAgdmFyIHByb3RvdHlwZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbiAgdmFyIHByb3RvdHlwZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgbmFtZSk7XG5cbiAgaWYgKCFwcm90b3R5cGVEZXNjcmlwdG9yIHx8ICFwcm90b3R5cGVEZXNjcmlwdG9yLmdldCkge1xuICAgIC8vIFRoaXMgaXMgZGVmaW5pdGVseSBub3QgYW4gYXV0b2JpbmRpbmcgZ2V0dGVyXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHByb3RvdHlwZURlc2NyaXB0b3IuZ2V0KCkubGVuZ3RoICE9PSBjb21wb25lbnRbbmFtZV0ubGVuZ3RoKSB7XG4gICAgLy8gVGhlIGxlbmd0aCBkb2Vzbid0IG1hdGNoLCBiYWlsIG91dFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRoaXMgc2VlbXMgbGlrZSBhIG1ldGhvZCBib3VuZCB1c2luZyBhbiBhdXRvYmluZGluZyBnZXR0ZXIgb24gdGhlIHByb3RvdHlwZVxuICAvLyBIb3BlZnVsbHkgd2Ugd29uJ3QgcnVuIGludG8gdG9vIG1hbnkgZmFsc2UgcG9zaXRpdmVzLlxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkRGVsZXRlSW5zdGFuY2VNZXRob2QoY29tcG9uZW50LCBuYW1lKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb21wb25lbnQsIG5hbWUpO1xuICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBOb3QgYSBmdW5jdGlvbiwgb3Igc29tZXRoaW5nIGZhbmN5OiBiYWlsIG91dFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb21wb25lbnQuX19yZWFjdEF1dG9CaW5kTWFwIHx8IGNvbXBvbmVudC5fX3JlYWN0QXV0b0JpbmRQYWlycykge1xuICAgIC8vIENsYXNzaWNcbiAgICByZXR1cm4gc2hvdWxkRGVsZXRlQ2xhc3NpY0luc3RhbmNlTWV0aG9kKGNvbXBvbmVudCwgbmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTW9kZXJuXG4gICAgcmV0dXJuIHNob3VsZERlbGV0ZU1vZGVybkluc3RhbmNlTWV0aG9kKGNvbXBvbmVudCwgbmFtZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWxldGVzIGF1dG9ib3VuZCBtZXRob2RzIGZyb20gdGhlIGluc3RhbmNlLlxuICpcbiAqIEZvciBjbGFzc2ljIFJlYWN0IGNsYXNzZXMsIHdlIG9ubHkgZGVsZXRlIHRoZSBtZXRob2RzIHRoYXQgbm8gbG9uZ2VyIGV4aXN0IGluIG1hcC5cbiAqIFRoaXMgbWVhbnMgdGhlIHVzZXIgYWN0dWFsbHkgZGVsZXRlZCB0aGVtIGluIGNvZGUuXG4gKlxuICogRm9yIG1vZGVybiBjbGFzc2VzLCB3ZSBkZWxldGUgbWV0aG9kcyB0aGF0IGV4aXN0IG9uIHByb3RvdHlwZSB3aXRoIHRoZSBzYW1lIGxlbmd0aCxcbiAqIGFuZCB3aGljaCBoYXZlIGdldHRlcnMgb24gcHJvdG90eXBlLCBidXQgYXJlIG5vcm1hbCB2YWx1ZXMgb24gdGhlIGluc3RhbmNlLlxuICogVGhpcyBpcyB1c3VhbGx5IGFuIGluZGljYXRpb24gdGhhdCBhbiBhdXRvYmluZGluZyBkZWNvcmF0b3IgaXMgYmVpbmcgdXNlZCxcbiAqIGFuZCB0aGUgZ2V0dGVyIHdpbGwgcmUtZ2VuZXJhdGUgdGhlIG1lbW9pemVkIGhhbmRsZXIgb24gbmV4dCBhY2Nlc3MuXG4gKi9cbmZ1bmN0aW9uIGRlbGV0ZVVua25vd25BdXRvQmluZE1ldGhvZHMoY29tcG9uZW50KSB7XG4gIHZhciBuYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbXBvbmVudCk7XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChzaG91bGREZWxldGVJbnN0YW5jZU1ldGhvZChjb21wb25lbnQsIG5hbWUpKSB7XG4gICAgICBkZWxldGUgY29tcG9uZW50W25hbWVdO1xuICAgIH1cbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9tb2R1bGVzL2RlbGV0ZVVua25vd25BdXRvQmluZE1ldGhvZHMuanNcbi8vIG1vZHVsZSBpZCA9IDc2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3VwcG9ydHNQcm90b0Fzc2lnbm1lbnQgPSByZXF1aXJlKCcuL3N1cHBvcnRzUHJvdG9Bc3NpZ25tZW50Jyk7XG5cbnZhciBfc3VwcG9ydHNQcm90b0Fzc2lnbm1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3VwcG9ydHNQcm90b0Fzc2lnbm1lbnQpO1xuXG52YXIgX2NyZWF0ZUNsYXNzUHJveHkgPSByZXF1aXJlKCcuL2NyZWF0ZUNsYXNzUHJveHknKTtcblxudmFyIF9jcmVhdGVDbGFzc1Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzUHJveHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5pZiAoISgwLCBfc3VwcG9ydHNQcm90b0Fzc2lnbm1lbnQyLmRlZmF1bHQpKCkpIHtcbiAgY29uc29sZS53YXJuKCdUaGlzIEphdmFTY3JpcHQgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCBfX3Byb3RvX18uICcgKyAnVGhpcyBtZWFucyB0aGF0IHJlYWN0LXByb3h5IGlzIHVuYWJsZSB0byBwcm94eSBSZWFjdCBjb21wb25lbnRzLiAnICsgJ0ZlYXR1cmVzIHRoYXQgcmVseSBvbiByZWFjdC1wcm94eSwgc3VjaCBhcyByZWFjdC10cmFuc2Zvcm0taG1yLCAnICsgJ3dpbGwgbm90IGZ1bmN0aW9uIGFzIGV4cGVjdGVkLicpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfY3JlYXRlQ2xhc3NQcm94eTIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L21vZHVsZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDc3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDc3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNzczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDc3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fVWludDhBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNzc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19XZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA3NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYXBwbHkuanNcbi8vIG1vZHVsZSBpZCA9IDc3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gNzc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanNcbi8vIG1vZHVsZSBpZCA9IDc4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3ODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19hcnJheVNvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDc4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLmRpZmZlcmVuY2VgIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGV4Y2x1ZGluZyBtdWx0aXBsZSBhcnJheXMgb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBleGNsdWRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlRGlmZmVyZW5jZShhcnJheSwgdmFsdWVzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgdmFsdWVzTGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcblxuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgdmFsdWVzID0gYXJyYXlNYXAodmFsdWVzLCBiYXNlVW5hcnkoaXRlcmF0ZWUpKTtcbiAgfVxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgfVxuICBlbHNlIGlmICh2YWx1ZXMubGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgdmFsdWVzID0gbmV3IFNldENhY2hlKHZhbHVlcyk7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID09IG51bGwgPyB2YWx1ZSA6IGl0ZXJhdGVlKHZhbHVlKTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciB2YWx1ZXNJbmRleCA9IHZhbHVlc0xlbmd0aDtcbiAgICAgIHdoaWxlICh2YWx1ZXNJbmRleC0tKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbdmFsdWVzSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyh2YWx1ZXMsIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VEaWZmZXJlbmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDc4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNGbGF0dGVuYWJsZSA9IHJlcXVpcmUoJy4vX2lzRmxhdHRlbmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRoIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nIGZsYXR0ZW5pbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZWRpY2F0ZT1pc0ZsYXR0ZW5hYmxlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTdHJpY3RdIFJlc3RyaWN0IHRvIHZhbHVlcyB0aGF0IHBhc3MgYHByZWRpY2F0ZWAgY2hlY2tzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IGlzRmxhdHRlbmFibGUpO1xuICByZXN1bHQgfHwgKHJlc3VsdCA9IFtdKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAoZGVwdGggPiAwICYmIHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmxhdHRlbiBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgICAgYmFzZUZsYXR0ZW4odmFsdWUsIGRlcHRoIC0gMSwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlRmxhdHRlbi5qc1xuLy8gbW9kdWxlIGlkID0gNzg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUhhc0luLmpzXG4vLyBtb2R1bGUgaWQgPSA3ODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3ODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDc4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDc4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlSXNNYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNzkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fYmFzZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3OTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDc5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDc5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50JyksXG4gICAgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDc5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gODAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gODAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19jb3B5T2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDgwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYF8uZmluZGAgb3IgYF8uZmluZExhc3RgIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaW5kSW5kZXhGdW5jIFRoZSBmdW5jdGlvbiB0byBmaW5kIHRoZSBjb2xsZWN0aW9uIGluZGV4LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZmluZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmluZChmaW5kSW5kZXhGdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGZyb21JbmRleCkge1xuICAgIHZhciBpdGVyYWJsZSA9IE9iamVjdChjb2xsZWN0aW9uKTtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICB2YXIgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKTtcbiAgICAgIGNvbGxlY3Rpb24gPSBrZXlzKGNvbGxlY3Rpb24pO1xuICAgICAgcHJlZGljYXRlID0gZnVuY3Rpb24oa2V5KSB7IHJldHVybiBpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKTsgfTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gZmluZEluZGV4RnVuYyhjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGZyb21JbmRleCk7XG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyBpdGVyYWJsZVtpdGVyYXRlZSA/IGNvbGxlY3Rpb25baW5kZXhdIDogaW5kZXhdIDogdW5kZWZpbmVkO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUZpbmQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19jcmVhdGVGaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19lcXVhbE9iamVjdHMuanNcbi8vIG1vZHVsZSBpZCA9IDgwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19nZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2dldFN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDgxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDgxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19oYXNQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDgxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9faGFzaEhhcy5qc1xuLy8gbW9kdWxlIGlkID0gODE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcHJlYWRhYmxlU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGZsYXR0ZW5hYmxlIGBhcmd1bWVudHNgIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmbGF0dGVuYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0ZsYXR0ZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHxcbiAgICAhIShzcHJlYWRhYmxlU3ltYm9sICYmIHZhbHVlICYmIHZhbHVlW3NwcmVhZGFibGVTeW1ib2xdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gODIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gODIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDgyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA4MjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDgyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDgyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDgyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA4Mjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDgzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qc1xuLy8gbW9kdWxlIGlkID0gODM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fbm9kZVV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDgzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDgzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fb3ZlclJlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDg0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzXG4vLyBtb2R1bGUgaWQgPSA4NDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDg0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VTZXRUb1N0cmluZycpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fc2hvcnRPdXQuanNcbi8vIG1vZHVsZSBpZCA9IDg0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDg0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19zdGFja0RlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX3N0YWNrR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL19zdGFja1NldC5qc1xuLy8gbW9kdWxlIGlkID0gODUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gODUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVMZWFkaW5nRG90ID0gL15cXC4vLFxuICAgIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChyZUxlYWRpbmdEb3QudGVzdChzdHJpbmcpKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA4NTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgdG8gdGhlXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC5cbiAqIFN1YnNlcXVlbnQgc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YCBhbmQgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BPYmplY3QuYXNzaWduYF0oaHR0cHM6Ly9tZG4uaW8vT2JqZWN0L2Fzc2lnbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEwLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5hc3NpZ25JblxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gQmFyKCkge1xuICogICB0aGlzLmMgPSAzO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYiA9IDI7XG4gKiBCYXIucHJvdG90eXBlLmQgPSA0O1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAwIH0sIG5ldyBGb28sIG5ldyBCYXIpO1xuICogLy8gPT4geyAnYSc6IDEsICdjJzogMyB9XG4gKi9cbnZhciBhc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSkge1xuICBpZiAoaXNQcm90b3R5cGUoc291cmNlKSB8fCBpc0FycmF5TGlrZShzb3VyY2UpKSB7XG4gICAgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA4NTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc3RhbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2NvbnN0YW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4NTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgYGFycmF5YCB2YWx1ZXMgbm90IGluY2x1ZGVkIGluIHRoZSBvdGhlciBnaXZlbiBhcnJheXNcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuIFRoZSBvcmRlciBhbmQgcmVmZXJlbmNlcyBvZiByZXN1bHQgdmFsdWVzIGFyZVxuICogZGV0ZXJtaW5lZCBieSB0aGUgZmlyc3QgYXJyYXkuXG4gKlxuICogKipOb3RlOioqIFVubGlrZSBgXy5wdWxsQWxsYCwgdGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsuLi5BcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBleGNsdWRlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICogQHNlZSBfLndpdGhvdXQsIF8ueG9yXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGlmZmVyZW5jZShbMiwgMV0sIFsyLCAzXSk7XG4gKiAvLyA9PiBbMV1cbiAqL1xudmFyIGRpZmZlcmVuY2UgPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheSwgdmFsdWVzKSB7XG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdChhcnJheSlcbiAgICA/IGJhc2VEaWZmZXJlbmNlKGFycmF5LCBiYXNlRmxhdHRlbih2YWx1ZXMsIDEsIGlzQXJyYXlMaWtlT2JqZWN0LCB0cnVlKSlcbiAgICA6IFtdO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZmVyZW5jZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvZGlmZmVyZW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gODU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBjcmVhdGVGaW5kID0gcmVxdWlyZSgnLi9fY3JlYXRlRmluZCcpLFxuICAgIGZpbmRJbmRleCA9IHJlcXVpcmUoJy4vZmluZEluZGV4Jyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAsIHJldHVybmluZyB0aGUgZmlyc3QgZWxlbWVudFxuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGludm9rZWQgd2l0aCB0aHJlZVxuICogYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2Zyb21JbmRleD0wXSBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWF0Y2hlZCBlbGVtZW50LCBlbHNlIGB1bmRlZmluZWRgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdwZWJibGVzJywgJ2FnZSc6IDEsICAnYWN0aXZlJzogdHJ1ZSB9XG4gKiBdO1xuICpcbiAqIF8uZmluZCh1c2VycywgZnVuY3Rpb24obykgeyByZXR1cm4gby5hZ2UgPCA0MDsgfSk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdiYXJuZXknXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgeyAnYWdlJzogMSwgJ2FjdGl2ZSc6IHRydWUgfSk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdwZWJibGVzJ1xuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgWydhY3RpdmUnLCBmYWxzZV0pO1xuICogLy8gPT4gb2JqZWN0IGZvciAnZnJlZCdcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gb2JqZWN0IGZvciAnYmFybmV5J1xuICovXG52YXIgZmluZCA9IGNyZWF0ZUZpbmQoZmluZEluZGV4KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9maW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA4NTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uZmluZGAgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0XG4gKiBlbGVtZW50IGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvciBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcm9tSW5kZXg9MF0gVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZvdW5kIGVsZW1lbnQsIGVsc2UgYC0xYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogXy5maW5kSW5kZXgodXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8udXNlciA9PSAnYmFybmV5JzsgfSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCB7ICd1c2VyJzogJ2ZyZWQnLCAnYWN0aXZlJzogZmFsc2UgfSk7XG4gKiAvLyA9PiAxXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maW5kSW5kZXgodXNlcnMsIFsnYWN0aXZlJywgZmFsc2VdKTtcbiAqIC8vID0+IDBcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCAnYWN0aXZlJyk7XG4gKiAvLyA9PiAyXG4gKi9cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIoZnJvbUluZGV4KTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGluZGV4ID0gbmF0aXZlTWF4KGxlbmd0aCArIGluZGV4LCAwKTtcbiAgfVxuICByZXR1cm4gYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyksIGluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2ZpbmRJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC1wcm94eS9+L2xvZGFzaC9oYXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL21lbW9pemUuanNcbi8vIG1vZHVsZSBpZCA9IDg2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL3Byb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL3N0dWJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL3N0dWJGYWxzZS5qc1xuLy8gbW9kdWxlIGlkID0gODY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9GaW5pdGUoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9GaW5pdGUoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0Zpbml0ZSgnMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMDtcbiAgfVxuICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBJTkZJTklUWSB8fCB2YWx1ZSA9PT0gLUlORklOSVRZKSB7XG4gICAgdmFyIHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKTtcbiAgICByZXR1cm4gc2lnbiAqIE1BWF9JTlRFR0VSO1xuICB9XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB2YWx1ZSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9GaW5pdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL3RvRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHRvRmluaXRlID0gcmVxdWlyZSgnLi90b0Zpbml0ZScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSW50ZWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvdG9JbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA4NjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL3RvTnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4Njdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL3RvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4Njhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5fX1Jld2lyZUFQSV9fID0gZXhwb3J0cy5fX1Jlc2V0RGVwZW5kZW5jeV9fID0gZXhwb3J0cy5fX3NldF9fID0gZXhwb3J0cy5fX1Jld2lyZV9fID0gZXhwb3J0cy5fX0dldERlcGVuZGVuY3lfXyA9IGV4cG9ydHMuX19nZXRfXyA9IGV4cG9ydHMuUmVkQm94RXJyb3IgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3N0eWxlID0gcmVxdWlyZSgnLi9zdHlsZS5qcycpO1xuXG52YXIgX3N0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlKTtcblxudmFyIF9lcnJvclN0YWNrUGFyc2VyID0gcmVxdWlyZSgnZXJyb3Itc3RhY2stcGFyc2VyJyk7XG5cbnZhciBfZXJyb3JTdGFja1BhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lcnJvclN0YWNrUGFyc2VyKTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbnZhciBfbGliID0gcmVxdWlyZSgnLi9saWInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVkQm94RXJyb3IgPSBleHBvcnRzLlJlZEJveEVycm9yID0gZnVuY3Rpb24gKF9nZXRfXzIpIHtcbiAgX2luaGVyaXRzKFJlZEJveEVycm9yLCBfZ2V0X18yKTtcblxuICBmdW5jdGlvbiBSZWRCb3hFcnJvcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVkQm94RXJyb3IpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZWRCb3hFcnJvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlZEJveEVycm9yKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVkQm94RXJyb3IsIFt7XG4gICAga2V5OiAncmVuZGVyRnJhbWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRnJhbWVzKGZyYW1lcykge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZmlsZW5hbWUgPSBfcHJvcHMuZmlsZW5hbWUsXG4gICAgICAgICAgZWRpdG9yU2NoZW1lID0gX3Byb3BzLmVkaXRvclNjaGVtZSxcbiAgICAgICAgICB1c2VMaW5lcyA9IF9wcm9wcy51c2VMaW5lcyxcbiAgICAgICAgICB1c2VDb2x1bW5zID0gX3Byb3BzLnVzZUNvbHVtbnM7XG5cbiAgICAgIHZhciBfZ2V0X18zID0gX2dldF9fKCdhc3NpZ24nKSh7fSwgX2dldF9fKCdzdHlsZScpLCB0aGlzLnByb3BzLnN0eWxlKSxcbiAgICAgICAgICBmcmFtZSA9IF9nZXRfXzMuZnJhbWUsXG4gICAgICAgICAgZmlsZSA9IF9nZXRfXzMuZmlsZSxcbiAgICAgICAgICBsaW5rVG9GaWxlID0gX2dldF9fMy5saW5rVG9GaWxlO1xuXG4gICAgICByZXR1cm4gZnJhbWVzLm1hcChmdW5jdGlvbiAoZiwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHRleHQgPSB2b2lkIDA7XG4gICAgICAgIHZhciB1cmwgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIGZpbGVuYW1lICYmICFfZ2V0X18oJ2lzRmlsZW5hbWVBYnNvbHV0ZScpKGYuZmlsZU5hbWUpKSB7XG4gICAgICAgICAgdXJsID0gX2dldF9fKCdtYWtlVXJsJykoZmlsZW5hbWUsIGVkaXRvclNjaGVtZSk7XG4gICAgICAgICAgdGV4dCA9IF9nZXRfXygnbWFrZUxpbmtUZXh0JykoZmlsZW5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBsaW5lcyA9IHVzZUxpbmVzID8gZi5saW5lTnVtYmVyIDogbnVsbDtcbiAgICAgICAgICB2YXIgY29sdW1ucyA9IHVzZUNvbHVtbnMgPyBmLmNvbHVtbk51bWJlciA6IG51bGw7XG4gICAgICAgICAgdXJsID0gX2dldF9fKCdtYWtlVXJsJykoZi5maWxlTmFtZSwgZWRpdG9yU2NoZW1lLCBsaW5lcywgY29sdW1ucyk7XG4gICAgICAgICAgdGV4dCA9IF9nZXRfXygnbWFrZUxpbmtUZXh0JykoZi5maWxlTmFtZSwgbGluZXMsIGNvbHVtbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9nZXRfXygnUmVhY3QnKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgc3R5bGU6IGZyYW1lLCBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgX2dldF9fKCdSZWFjdCcpLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBmLmZ1bmN0aW9uTmFtZVxuICAgICAgICAgICksXG4gICAgICAgICAgX2dldF9fKCdSZWFjdCcpLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgc3R5bGU6IGZpbGUgfSxcbiAgICAgICAgICAgIF9nZXRfXygnUmVhY3QnKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgIHsgaHJlZjogdXJsLCBzdHlsZTogbGlua1RvRmlsZSB9LFxuICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGVycm9yID0gX3Byb3BzMi5lcnJvcixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMyLmNsYXNzTmFtZTtcblxuICAgICAgdmFyIF9nZXRfXzQgPSBfZ2V0X18oJ2Fzc2lnbicpKHt9LCBfZ2V0X18oJ3N0eWxlJyksIHRoaXMucHJvcHMuc3R5bGUpLFxuICAgICAgICAgIHJlZGJveCA9IF9nZXRfXzQucmVkYm94LFxuICAgICAgICAgIG1lc3NhZ2UgPSBfZ2V0X180Lm1lc3NhZ2UsXG4gICAgICAgICAgc3RhY2sgPSBfZ2V0X180LnN0YWNrLFxuICAgICAgICAgIGZyYW1lID0gX2dldF9fNC5mcmFtZTtcblxuICAgICAgdmFyIGZyYW1lcyA9IHZvaWQgMDtcbiAgICAgIHZhciBwYXJzZUVycm9yID0gdm9pZCAwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZnJhbWVzID0gX2dldF9fKCdFcnJvclN0YWNrUGFyc2VyJykucGFyc2UoZXJyb3IpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBwYXJzZUVycm9yID0gbmV3IEVycm9yKCdGYWlsZWQgdG8gcGFyc2Ugc3RhY2sgdHJhY2UuIFN0YWNrIHRyYWNlIGluZm9ybWF0aW9uIHVuYXZhaWxhYmxlLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyc2VFcnJvcikge1xuICAgICAgICBmcmFtZXMgPSBfZ2V0X18oJ1JlYWN0JykuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiBmcmFtZSwga2V5OiAwIH0sXG4gICAgICAgICAgX2dldF9fKCdSZWFjdCcpLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBwYXJzZUVycm9yLm1lc3NhZ2VcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcmFtZXMgPSB0aGlzLnJlbmRlckZyYW1lcyhmcmFtZXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2dldF9fKCdSZWFjdCcpLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiByZWRib3gsIGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICAgIF9nZXRfXygnUmVhY3QnKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgc3R5bGU6IG1lc3NhZ2UgfSxcbiAgICAgICAgICBlcnJvci5uYW1lLFxuICAgICAgICAgICc6ICcsXG4gICAgICAgICAgZXJyb3IubWVzc2FnZVxuICAgICAgICApLFxuICAgICAgICBfZ2V0X18oJ1JlYWN0JykuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiBzdGFjayB9LFxuICAgICAgICAgIGZyYW1lc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWRCb3hFcnJvcjtcbn0oX2dldF9fKCdDb21wb25lbnQnKSk7XG5cbi8vIFwiUG9ydGFsXCIgY29tcG9uZW50IGZvciBhY3R1YWwgUmVkQm94RXJyb3IgY29tcG9uZW50IHRvXG4vLyByZW5kZXIgdG8gKGRpcmVjdGx5IHVuZGVyIGJvZHkpLiBQcmV2ZW50cyBidWdzIGFzIGluICMyNy5cblxuXG5SZWRCb3hFcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBfZ2V0X18oJ1Byb3BUeXBlcycpLmluc3RhbmNlT2YoRXJyb3IpLmlzUmVxdWlyZWQsXG4gIGZpbGVuYW1lOiBfZ2V0X18oJ1Byb3BUeXBlcycpLnN0cmluZyxcbiAgZWRpdG9yU2NoZW1lOiBfZ2V0X18oJ1Byb3BUeXBlcycpLnN0cmluZyxcbiAgdXNlTGluZXM6IF9nZXRfXygnUHJvcFR5cGVzJykuYm9vbCxcbiAgdXNlQ29sdW1uczogX2dldF9fKCdQcm9wVHlwZXMnKS5ib29sLFxuICBzdHlsZTogX2dldF9fKCdQcm9wVHlwZXMnKS5vYmplY3QsXG4gIGNsYXNzTmFtZTogX2dldF9fKCdQcm9wVHlwZXMnKS5zdHJpbmdcbn07XG5SZWRCb3hFcnJvci5kaXNwbGF5TmFtZSA9ICdSZWRCb3hFcnJvcic7XG5SZWRCb3hFcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIHVzZUxpbmVzOiB0cnVlLFxuICB1c2VDb2x1bW5zOiB0cnVlXG59O1xuXG52YXIgUmVkQm94ID0gZnVuY3Rpb24gKF9nZXRfXzUpIHtcbiAgX2luaGVyaXRzKFJlZEJveCwgX2dldF9fNSk7XG5cbiAgZnVuY3Rpb24gUmVkQm94KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWRCb3gpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZWRCb3guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWRCb3gpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZWRCb3gsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICB0aGlzLnJlbmRlclJlZEJveEVycm9yKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5yZW5kZXJSZWRCb3hFcnJvcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBfZ2V0X18oJ1JlYWN0RE9NJykudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLmVsKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJSZWRCb3hFcnJvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJlZEJveEVycm9yKCkge1xuICAgICAgX2dldF9fKCdSZWFjdERPTScpLnJlbmRlcihfZ2V0X18oJ1JlYWN0JykuY3JlYXRlRWxlbWVudChfZ2V0X18oJ1JlZEJveEVycm9yJyksIHRoaXMucHJvcHMpLCB0aGlzLmVsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVkQm94O1xufShfZ2V0X18oJ0NvbXBvbmVudCcpKTtcblxuUmVkQm94LnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IF9nZXRfXygnUHJvcFR5cGVzJykuaW5zdGFuY2VPZihFcnJvcikuaXNSZXF1aXJlZFxufTtcblJlZEJveC5kaXNwbGF5TmFtZSA9ICdSZWRCb3gnO1xuZXhwb3J0cy5kZWZhdWx0ID0gUmVkQm94O1xuXG52YXIgX1Jld2lyZWREYXRhX18gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG52YXIgSU5URU5USU9OQUxfVU5ERUZJTkVEID0gJ19fSU5URU5USU9OQUxfVU5ERUZJTkVEX18nO1xudmFyIF9SZXdpcmVBUElfXyA9IHt9O1xuXG4oZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBhZGRQcm9wZXJ0eVRvQVBJT2JqZWN0KG5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9SZXdpcmVBUElfXywgbmFtZSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fZ2V0X18nLCBfZ2V0X18pO1xuICBhZGRQcm9wZXJ0eVRvQVBJT2JqZWN0KCdfX0dldERlcGVuZGVuY3lfXycsIF9nZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fUmV3aXJlX18nLCBfc2V0X18pO1xuICBhZGRQcm9wZXJ0eVRvQVBJT2JqZWN0KCdfX3NldF9fJywgX3NldF9fKTtcbiAgYWRkUHJvcGVydHlUb0FQSU9iamVjdCgnX19yZXNldF9fJywgX3Jlc2V0X18pO1xuICBhZGRQcm9wZXJ0eVRvQVBJT2JqZWN0KCdfX1Jlc2V0RGVwZW5kZW5jeV9fJywgX3Jlc2V0X18pO1xuICBhZGRQcm9wZXJ0eVRvQVBJT2JqZWN0KCdfX3dpdGhfXycsIF93aXRoX18pO1xufSkoKTtcblxuZnVuY3Rpb24gX2dldF9fKHZhcmlhYmxlTmFtZSkge1xuICBpZiAoX1Jld2lyZWREYXRhX18gPT09IHVuZGVmaW5lZCB8fCBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gX2dldF9vcmlnaW5hbF9fKHZhcmlhYmxlTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHZhbHVlID0gX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXTtcblxuICAgIGlmICh2YWx1ZSA9PT0gSU5URU5USU9OQUxfVU5ERUZJTkVEKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRfb3JpZ2luYWxfXyh2YXJpYWJsZU5hbWUpIHtcbiAgc3dpdGNoICh2YXJpYWJsZU5hbWUpIHtcbiAgICBjYXNlICdQcm9wVHlwZXMnOlxuICAgICAgcmV0dXJuIF9yZWFjdC5Qcm9wVHlwZXM7XG5cbiAgICBjYXNlICdhc3NpZ24nOlxuICAgICAgcmV0dXJuIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQ7XG5cbiAgICBjYXNlICdzdHlsZSc6XG4gICAgICByZXR1cm4gX3N0eWxlMi5kZWZhdWx0O1xuXG4gICAgY2FzZSAnaXNGaWxlbmFtZUFic29sdXRlJzpcbiAgICAgIHJldHVybiBfbGliLmlzRmlsZW5hbWVBYnNvbHV0ZTtcblxuICAgIGNhc2UgJ21ha2VVcmwnOlxuICAgICAgcmV0dXJuIF9saWIubWFrZVVybDtcblxuICAgIGNhc2UgJ21ha2VMaW5rVGV4dCc6XG4gICAgICByZXR1cm4gX2xpYi5tYWtlTGlua1RleHQ7XG5cbiAgICBjYXNlICdFcnJvclN0YWNrUGFyc2VyJzpcbiAgICAgIHJldHVybiBfZXJyb3JTdGFja1BhcnNlcjIuZGVmYXVsdDtcblxuICAgIGNhc2UgJ0NvbXBvbmVudCc6XG4gICAgICByZXR1cm4gX3JlYWN0LkNvbXBvbmVudDtcblxuICAgIGNhc2UgJ1JlYWN0RE9NJzpcbiAgICAgIHJldHVybiBfcmVhY3REb20yLmRlZmF1bHQ7XG5cbiAgICBjYXNlICdSZWFjdCc6XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0O1xuXG4gICAgY2FzZSAnUmVkQm94RXJyb3InOlxuICAgICAgcmV0dXJuIFJlZEJveEVycm9yO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gX2Fzc2lnbl9fKHZhcmlhYmxlTmFtZSwgdmFsdWUpIHtcbiAgaWYgKF9SZXdpcmVkRGF0YV9fID09PSB1bmRlZmluZWQgfHwgX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIF9zZXRfb3JpZ2luYWxfXyh2YXJpYWJsZU5hbWUsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9zZXRfb3JpZ2luYWxfXyh2YXJpYWJsZU5hbWUsIF92YWx1ZSkge1xuICBzd2l0Y2ggKHZhcmlhYmxlTmFtZSkge31cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBfdXBkYXRlX29wZXJhdGlvbl9fKG9wZXJhdGlvbiwgdmFyaWFibGVOYW1lLCBwcmVmaXgpIHtcbiAgdmFyIG9sZFZhbHVlID0gX2dldF9fKHZhcmlhYmxlTmFtZSk7XG5cbiAgdmFyIG5ld1ZhbHVlID0gb3BlcmF0aW9uID09PSAnKysnID8gb2xkVmFsdWUgKyAxIDogb2xkVmFsdWUgLSAxO1xuXG4gIF9hc3NpZ25fXyh2YXJpYWJsZU5hbWUsIG5ld1ZhbHVlKTtcblxuICByZXR1cm4gcHJlZml4ID8gbmV3VmFsdWUgOiBvbGRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gX3NldF9fKHZhcmlhYmxlTmFtZSwgdmFsdWUpIHtcbiAgaWYgKCh0eXBlb2YgdmFyaWFibGVOYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YXJpYWJsZU5hbWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyh2YXJpYWJsZU5hbWUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF9SZXdpcmVkRGF0YV9fW25hbWVdID0gdmFyaWFibGVOYW1lW25hbWVdO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdID0gSU5URU5USU9OQUxfVU5ERUZJTkVEO1xuICAgIH0gZWxzZSB7XG4gICAgICBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9yZXNldF9fKHZhcmlhYmxlTmFtZSk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVzZXRfXyh2YXJpYWJsZU5hbWUpIHtcbiAgZGVsZXRlIF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV07XG59XG5cbmZ1bmN0aW9uIF93aXRoX18ob2JqZWN0KSB7XG4gIHZhciByZXdpcmVkVmFyaWFibGVOYW1lcyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gIHZhciBwcmV2aW91c1ZhbHVlcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHJld2lyZWRWYXJpYWJsZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHZhcmlhYmxlTmFtZSkge1xuICAgICAgX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9IHByZXZpb3VzVmFsdWVzW3ZhcmlhYmxlTmFtZV07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV3aXJlZFZhcmlhYmxlTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAodmFyaWFibGVOYW1lKSB7XG4gICAgICBwcmV2aW91c1ZhbHVlc1t2YXJpYWJsZU5hbWVdID0gX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXTtcbiAgICAgIF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV0gPSBvYmplY3RbdmFyaWFibGVOYW1lXTtcbiAgICB9KTtcbiAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcblxuICAgIGlmICghIXJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzdWx0LnRoZW4ocmVzZXQpLmNhdGNoKHJlc2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzZXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG52YXIgX3R5cGVPZk9yaWdpbmFsRXhwb3J0ID0gdHlwZW9mIFJlZEJveCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoUmVkQm94KTtcblxuZnVuY3Rpb24gYWRkTm9uRW51bWVyYWJsZVByb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWRCb3gsIG5hbWUsIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5pZiAoKF90eXBlT2ZPcmlnaW5hbEV4cG9ydCA9PT0gJ29iamVjdCcgfHwgX3R5cGVPZk9yaWdpbmFsRXhwb3J0ID09PSAnZnVuY3Rpb24nKSAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKFJlZEJveCkpIHtcbiAgYWRkTm9uRW51bWVyYWJsZVByb3BlcnR5KCdfX2dldF9fJywgX2dldF9fKTtcbiAgYWRkTm9uRW51bWVyYWJsZVByb3BlcnR5KCdfX0dldERlcGVuZGVuY3lfXycsIF9nZXRfXyk7XG4gIGFkZE5vbkVudW1lcmFibGVQcm9wZXJ0eSgnX19SZXdpcmVfXycsIF9zZXRfXyk7XG4gIGFkZE5vbkVudW1lcmFibGVQcm9wZXJ0eSgnX19zZXRfXycsIF9zZXRfXyk7XG4gIGFkZE5vbkVudW1lcmFibGVQcm9wZXJ0eSgnX19yZXNldF9fJywgX3Jlc2V0X18pO1xuICBhZGROb25FbnVtZXJhYmxlUHJvcGVydHkoJ19fUmVzZXREZXBlbmRlbmN5X18nLCBfcmVzZXRfXyk7XG4gIGFkZE5vbkVudW1lcmFibGVQcm9wZXJ0eSgnX193aXRoX18nLCBfd2l0aF9fKTtcbiAgYWRkTm9uRW51bWVyYWJsZVByb3BlcnR5KCdfX1Jld2lyZUFQSV9fJywgX1Jld2lyZUFQSV9fKTtcbn1cblxuZXhwb3J0cy5fX2dldF9fID0gX2dldF9fO1xuZXhwb3J0cy5fX0dldERlcGVuZGVuY3lfXyA9IF9nZXRfXztcbmV4cG9ydHMuX19SZXdpcmVfXyA9IF9zZXRfXztcbmV4cG9ydHMuX19zZXRfXyA9IF9zZXRfXztcbmV4cG9ydHMuX19SZXNldERlcGVuZGVuY3lfXyA9IF9yZXNldF9fO1xuZXhwb3J0cy5fX1Jld2lyZUFQSV9fID0gX1Jld2lyZUFQSV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVkYm94LXJlYWN0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgZmlsZW5hbWVXaXRob3V0TG9hZGVycyA9IGV4cG9ydHMuZmlsZW5hbWVXaXRob3V0TG9hZGVycyA9IGZ1bmN0aW9uIGZpbGVuYW1lV2l0aG91dExvYWRlcnMoKSB7XG4gIHZhciBmaWxlbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG5cbiAgdmFyIGluZGV4ID0gZmlsZW5hbWUubGFzdEluZGV4T2YoJyEnKTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gZmlsZW5hbWUgOiBmaWxlbmFtZS5zdWJzdHIoaW5kZXggKyAxKTtcbn07XG5cbnZhciBmaWxlbmFtZUhhc0xvYWRlcnMgPSBleHBvcnRzLmZpbGVuYW1lSGFzTG9hZGVycyA9IGZ1bmN0aW9uIGZpbGVuYW1lSGFzTG9hZGVycyhmaWxlbmFtZSkge1xuICB2YXIgYWN0dWFsRmlsZW5hbWUgPSBfZ2V0X18oJ2ZpbGVuYW1lV2l0aG91dExvYWRlcnMnKShmaWxlbmFtZSk7XG5cbiAgcmV0dXJuIGFjdHVhbEZpbGVuYW1lICE9PSBmaWxlbmFtZTtcbn07XG5cbnZhciBmaWxlbmFtZUhhc1NjaGVtYSA9IGV4cG9ydHMuZmlsZW5hbWVIYXNTY2hlbWEgPSBmdW5jdGlvbiBmaWxlbmFtZUhhc1NjaGVtYShmaWxlbmFtZSkge1xuICByZXR1cm4gKC9eW1xcd10rXFw6Ly50ZXN0KGZpbGVuYW1lKVxuICApO1xufTtcblxudmFyIGlzRmlsZW5hbWVBYnNvbHV0ZSA9IGV4cG9ydHMuaXNGaWxlbmFtZUFic29sdXRlID0gZnVuY3Rpb24gaXNGaWxlbmFtZUFic29sdXRlKGZpbGVuYW1lKSB7XG4gIHZhciBhY3R1YWxGaWxlbmFtZSA9IF9nZXRfXygnZmlsZW5hbWVXaXRob3V0TG9hZGVycycpKGZpbGVuYW1lKTtcblxuICBpZiAoYWN0dWFsRmlsZW5hbWUuaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgbWFrZVVybCA9IGV4cG9ydHMubWFrZVVybCA9IGZ1bmN0aW9uIG1ha2VVcmwoZmlsZW5hbWUsIHNjaGVtZSwgbGluZSwgY29sdW1uKSB7XG4gIHZhciBhY3R1YWxGaWxlbmFtZSA9IF9nZXRfXygnZmlsZW5hbWVXaXRob3V0TG9hZGVycycpKGZpbGVuYW1lKTtcblxuICBpZiAoX2dldF9fKCdmaWxlbmFtZUhhc1NjaGVtYScpKGZpbGVuYW1lKSkge1xuICAgIHJldHVybiBhY3R1YWxGaWxlbmFtZTtcbiAgfVxuXG4gIHZhciB1cmwgPSAnZmlsZTovLycgKyBhY3R1YWxGaWxlbmFtZTtcblxuICBpZiAoc2NoZW1lKSB7XG4gICAgdXJsID0gc2NoZW1lICsgJzovL29wZW4/dXJsPScgKyB1cmw7XG5cbiAgICBpZiAobGluZSAmJiBhY3R1YWxGaWxlbmFtZSA9PT0gZmlsZW5hbWUpIHtcbiAgICAgIHVybCA9IHVybCArICcmbGluZT0nICsgbGluZTtcblxuICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICB1cmwgPSB1cmwgKyAnJmNvbHVtbj0nICsgY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG52YXIgbWFrZUxpbmtUZXh0ID0gZXhwb3J0cy5tYWtlTGlua1RleHQgPSBmdW5jdGlvbiBtYWtlTGlua1RleHQoZmlsZW5hbWUsIGxpbmUsIGNvbHVtbikge1xuICB2YXIgdGV4dCA9IF9nZXRfXygnZmlsZW5hbWVXaXRob3V0TG9hZGVycycpKGZpbGVuYW1lKTtcblxuICBpZiAobGluZSAmJiB0ZXh0ID09PSBmaWxlbmFtZSkge1xuICAgIHRleHQgPSB0ZXh0ICsgJzonICsgbGluZTtcblxuICAgIGlmIChjb2x1bW4pIHtcbiAgICAgIHRleHQgPSB0ZXh0ICsgJzonICsgY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufTtcblxudmFyIF9SZXdpcmVkRGF0YV9fID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxudmFyIElOVEVOVElPTkFMX1VOREVGSU5FRCA9ICdfX0lOVEVOVElPTkFMX1VOREVGSU5FRF9fJztcbnZhciBfUmV3aXJlQVBJX18gPSB7fTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gYWRkUHJvcGVydHlUb0FQSU9iamVjdChuYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfUmV3aXJlQVBJX18sIG5hbWUsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBhZGRQcm9wZXJ0eVRvQVBJT2JqZWN0KCdfX2dldF9fJywgX2dldF9fKTtcbiAgYWRkUHJvcGVydHlUb0FQSU9iamVjdCgnX19HZXREZXBlbmRlbmN5X18nLCBfZ2V0X18pO1xuICBhZGRQcm9wZXJ0eVRvQVBJT2JqZWN0KCdfX1Jld2lyZV9fJywgX3NldF9fKTtcbiAgYWRkUHJvcGVydHlUb0FQSU9iamVjdCgnX19zZXRfXycsIF9zZXRfXyk7XG4gIGFkZFByb3BlcnR5VG9BUElPYmplY3QoJ19fcmVzZXRfXycsIF9yZXNldF9fKTtcbiAgYWRkUHJvcGVydHlUb0FQSU9iamVjdCgnX19SZXNldERlcGVuZGVuY3lfXycsIF9yZXNldF9fKTtcbiAgYWRkUHJvcGVydHlUb0FQSU9iamVjdCgnX193aXRoX18nLCBfd2l0aF9fKTtcbn0pKCk7XG5cbmZ1bmN0aW9uIF9nZXRfXyh2YXJpYWJsZU5hbWUpIHtcbiAgaWYgKF9SZXdpcmVkRGF0YV9fID09PSB1bmRlZmluZWQgfHwgX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIF9nZXRfb3JpZ2luYWxfXyh2YXJpYWJsZU5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB2YWx1ZSA9IF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV07XG5cbiAgICBpZiAodmFsdWUgPT09IElOVEVOVElPTkFMX1VOREVGSU5FRCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0X29yaWdpbmFsX18odmFyaWFibGVOYW1lKSB7XG4gIHN3aXRjaCAodmFyaWFibGVOYW1lKSB7XG4gICAgY2FzZSAnZmlsZW5hbWVXaXRob3V0TG9hZGVycyc6XG4gICAgICByZXR1cm4gZmlsZW5hbWVXaXRob3V0TG9hZGVycztcblxuICAgIGNhc2UgJ2ZpbGVuYW1lSGFzU2NoZW1hJzpcbiAgICAgIHJldHVybiBmaWxlbmFtZUhhc1NjaGVtYTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NpZ25fXyh2YXJpYWJsZU5hbWUsIHZhbHVlKSB7XG4gIGlmIChfUmV3aXJlZERhdGFfXyA9PT0gdW5kZWZpbmVkIHx8IF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBfc2V0X29yaWdpbmFsX18odmFyaWFibGVOYW1lLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfc2V0X29yaWdpbmFsX18odmFyaWFibGVOYW1lLCBfdmFsdWUpIHtcbiAgc3dpdGNoICh2YXJpYWJsZU5hbWUpIHt9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gX3VwZGF0ZV9vcGVyYXRpb25fXyhvcGVyYXRpb24sIHZhcmlhYmxlTmFtZSwgcHJlZml4KSB7XG4gIHZhciBvbGRWYWx1ZSA9IF9nZXRfXyh2YXJpYWJsZU5hbWUpO1xuXG4gIHZhciBuZXdWYWx1ZSA9IG9wZXJhdGlvbiA9PT0gJysrJyA/IG9sZFZhbHVlICsgMSA6IG9sZFZhbHVlIC0gMTtcblxuICBfYXNzaWduX18odmFyaWFibGVOYW1lLCBuZXdWYWx1ZSk7XG5cbiAgcmV0dXJuIHByZWZpeCA/IG5ld1ZhbHVlIDogb2xkVmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9zZXRfXyh2YXJpYWJsZU5hbWUsIHZhbHVlKSB7XG4gIGlmICgodHlwZW9mIHZhcmlhYmxlTmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFyaWFibGVOYW1lKSkgPT09ICdvYmplY3QnKSB7XG4gICAgT2JqZWN0LmtleXModmFyaWFibGVOYW1lKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBfUmV3aXJlZERhdGFfX1tuYW1lXSA9IHZhcmlhYmxlTmFtZVtuYW1lXTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9IElOVEVOVElPTkFMX1VOREVGSU5FRDtcbiAgICB9IGVsc2Uge1xuICAgICAgX1Jld2lyZWREYXRhX19bdmFyaWFibGVOYW1lXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfcmVzZXRfXyh2YXJpYWJsZU5hbWUpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gX3Jlc2V0X18odmFyaWFibGVOYW1lKSB7XG4gIGRlbGV0ZSBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdO1xufVxuXG5mdW5jdGlvbiBfd2l0aF9fKG9iamVjdCkge1xuICB2YXIgcmV3aXJlZFZhcmlhYmxlTmFtZXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICB2YXIgcHJldmlvdXNWYWx1ZXMgPSB7fTtcblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICByZXdpcmVkVmFyaWFibGVOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYWJsZU5hbWUpIHtcbiAgICAgIF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV0gPSBwcmV2aW91c1ZhbHVlc1t2YXJpYWJsZU5hbWVdO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHJld2lyZWRWYXJpYWJsZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHZhcmlhYmxlTmFtZSkge1xuICAgICAgcHJldmlvdXNWYWx1ZXNbdmFyaWFibGVOYW1lXSA9IF9SZXdpcmVkRGF0YV9fW3ZhcmlhYmxlTmFtZV07XG4gICAgICBfUmV3aXJlZERhdGFfX1t2YXJpYWJsZU5hbWVdID0gb2JqZWN0W3ZhcmlhYmxlTmFtZV07XG4gICAgfSk7XG4gICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrKCk7XG5cbiAgICBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlc3VsdC50aGVuKHJlc2V0KS5jYXRjaChyZXNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuZXhwb3J0cy5fX2dldF9fID0gX2dldF9fO1xuZXhwb3J0cy5fX0dldERlcGVuZGVuY3lfXyA9IF9nZXRfXztcbmV4cG9ydHMuX19SZXdpcmVfXyA9IF9zZXRfXztcbmV4cG9ydHMuX19zZXRfXyA9IF9zZXRfXztcbmV4cG9ydHMuX19SZXNldERlcGVuZGVuY3lfXyA9IF9yZXNldF9fO1xuZXhwb3J0cy5fX1Jld2lyZUFQSV9fID0gX1Jld2lyZUFQSV9fO1xuZXhwb3J0cy5kZWZhdWx0ID0gX1Jld2lyZUFQSV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVkYm94LXJlYWN0L2xpYi9saWIuanNcbi8vIG1vZHVsZSBpZCA9IDg5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX0RlZmF1bHRFeHBvcnRWYWx1ZSA9IHtcbiAgcmVkYm94OiB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIHRvcDogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgYm90dG9tOiAnMHB4JyxcbiAgICByaWdodDogJzBweCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kOiAncmdiKDIwNCwgMCwgMCknLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHpJbmRleDogMjE0NzQ4MzY0NyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICBvdmVyZmxvdzogJ3Njcm9sbCdcbiAgfSxcbiAgbWVzc2FnZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICB9LFxuICBzdGFjazoge1xuICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuICAgIG1hcmdpblRvcDogJzJlbSdcbiAgfSxcbiAgZnJhbWU6IHtcbiAgICBtYXJnaW5Ub3A6ICcxZW0nXG4gIH0sXG4gIGZpbGU6IHtcbiAgICBmb250U2l6ZTogJzAuOGVtJyxcbiAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSdcbiAgfSxcbiAgbGlua1RvRmlsZToge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknXG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfRGVmYXVsdEV4cG9ydFZhbHVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVkYm94LXJlYWN0L2xpYi9zdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gODk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8vIFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbiAoVU1EKSB0byBzdXBwb3J0IEFNRCwgQ29tbW9uSlMvTm9kZS5qcywgUmhpbm8sIGFuZCBicm93c2Vycy5cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoJ2Vycm9yLXN0YWNrLXBhcnNlcicsIFsnc3RhY2tmcmFtZSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnc3RhY2tmcmFtZScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LkVycm9yU3RhY2tQYXJzZXIgPSBmYWN0b3J5KHJvb3QuU3RhY2tGcmFtZSk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyKFN0YWNrRnJhbWUpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgRklSRUZPWF9TQUZBUklfU1RBQ0tfUkVHRVhQID0gLyhefEApXFxTK1xcOlxcZCsvO1xuICAgIHZhciBDSFJPTUVfSUVfU1RBQ0tfUkVHRVhQID0gL15cXHMqYXQgLiooXFxTK1xcOlxcZCt8XFwobmF0aXZlXFwpKS9tO1xuICAgIHZhciBTQUZBUklfTkFUSVZFX0NPREVfUkVHRVhQID0gL14oZXZhbEApPyhcXFtuYXRpdmUgY29kZVxcXSk/JC87XG5cbiAgICBmdW5jdGlvbiBfbWFwKGFycmF5LCBmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5tYXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZm4sIHRoaXNBcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9IG5ldyBBcnJheShhcnJheS5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG91dHB1dFtpXSA9IGZuLmNhbGwodGhpc0FyZywgYXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9maWx0ZXIoYXJyYXksIGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgQXJyYXkucHJvdG90eXBlLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmbiwgdGhpc0FyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuLmNhbGwodGhpc0FyZywgYXJyYXlbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGFycmF5W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luZGV4T2YoYXJyYXksIHRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlbiBhbiBFcnJvciBvYmplY3QsIGV4dHJhY3QgdGhlIG1vc3QgaW5mb3JtYXRpb24gZnJvbSBpdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3Igb2JqZWN0XG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fSBvZiBTdGFja0ZyYW1lc1xuICAgICAgICAgKi9cbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJHBhcnNlKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLnN0YWNrdHJhY2UgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlcnJvclsnb3BlcmEjc291cmNlbG9jJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYShlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnN0YWNrICYmIGVycm9yLnN0YWNrLm1hdGNoKENIUk9NRV9JRV9TVEFDS19SRUdFWFApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VWOE9ySUUoZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRkZPclNhZmFyaShlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHBhcnNlIGdpdmVuIEVycm9yIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFNlcGFyYXRlIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzIGZyb20gYSBzdHJpbmcgb2YgdGhlIGZvcm06IChVUkk6TGluZTpDb2x1bW4pXG4gICAgICAgIGV4dHJhY3RMb2NhdGlvbjogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkZXh0cmFjdExvY2F0aW9uKHVybExpa2UpIHtcbiAgICAgICAgICAgIC8vIEZhaWwtZmFzdCBidXQgcmV0dXJuIGxvY2F0aW9ucyBsaWtlIFwiKG5hdGl2ZSlcIlxuICAgICAgICAgICAgaWYgKHVybExpa2UuaW5kZXhPZignOicpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbdXJsTGlrZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZWdFeHAgPSAvKC4rPykoPzpcXDooXFxkKykpPyg/OlxcOihcXGQrKSk/JC87XG4gICAgICAgICAgICB2YXIgcGFydHMgPSByZWdFeHAuZXhlYyh1cmxMaWtlLnJlcGxhY2UoL1tcXChcXCldL2csICcnKSk7XG4gICAgICAgICAgICByZXR1cm4gW3BhcnRzWzFdLCBwYXJ0c1syXSB8fCB1bmRlZmluZWQsIHBhcnRzWzNdIHx8IHVuZGVmaW5lZF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VWOE9ySUU6IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJHBhcnNlVjhPcklFKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBfZmlsdGVyKGVycm9yLnN0YWNrLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWxpbmUubWF0Y2goQ0hST01FX0lFX1NUQUNLX1JFR0VYUCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9tYXAoZmlsdGVyZWQsIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAobGluZS5pbmRleE9mKCcoZXZhbCAnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRocm93IGF3YXkgZXZhbCBpbmZvcm1hdGlvbiB1bnRpbCB3ZSBpbXBsZW1lbnQgc3RhY2t0cmFjZS5qcy9zdGFja2ZyYW1lIzhcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSgvZXZhbCBjb2RlL2csICdldmFsJykucmVwbGFjZSgvKFxcKGV2YWwgYXQgW15cXCgpXSopfChcXClcXCwuKiQpL2csICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IGxpbmUucmVwbGFjZSgvXlxccysvLCAnJykucmVwbGFjZSgvXFwoZXZhbCBjb2RlL2csICcoJykuc3BsaXQoL1xccysvKS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb25QYXJ0cyA9IHRoaXMuZXh0cmFjdExvY2F0aW9uKHRva2Vucy5wb3AoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IHRva2Vucy5qb2luKCcgJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IF9pbmRleE9mKFsnZXZhbCcsICc8YW5vbnltb3VzPiddLCBsb2NhdGlvblBhcnRzWzBdKSA+IC0xID8gdW5kZWZpbmVkIDogbG9jYXRpb25QYXJ0c1swXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3RhY2tGcmFtZShmdW5jdGlvbk5hbWUsIHVuZGVmaW5lZCwgZmlsZU5hbWUsIGxvY2F0aW9uUGFydHNbMV0sIGxvY2F0aW9uUGFydHNbMl0sIGxpbmUpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VGRk9yU2FmYXJpOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZUZGT3JTYWZhcmkoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZCA9IF9maWx0ZXIoZXJyb3Iuc3RhY2suc3BsaXQoJ1xcbicpLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFsaW5lLm1hdGNoKFNBRkFSSV9OQVRJVkVfQ09ERV9SRUdFWFApO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBfbWFwKGZpbHRlcmVkLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhyb3cgYXdheSBldmFsIGluZm9ybWF0aW9uIHVudGlsIHdlIGltcGxlbWVudCBzdGFja3RyYWNlLmpzL3N0YWNrZnJhbWUjOFxuICAgICAgICAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJyA+IGV2YWwnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoLyBsaW5lIChcXGQrKSg/OiA+IGV2YWwgbGluZSBcXGQrKSogPiBldmFsXFw6XFxkK1xcOlxcZCsvZywgJzokMScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJ0AnKSA9PT0gLTEgJiYgbGluZS5pbmRleE9mKCc6JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSBldmFsIGZyYW1lcyBvbmx5IGhhdmUgZnVuY3Rpb24gbmFtZXMgYW5kIG5vdGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrRnJhbWUobGluZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IGxpbmUuc3BsaXQoJ0AnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uUGFydHMgPSB0aGlzLmV4dHJhY3RMb2NhdGlvbih0b2tlbnMucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gdG9rZW5zLmpvaW4oJ0AnKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3RhY2tGcmFtZShmdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvblBhcnRzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uUGFydHNbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZU9wZXJhOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZU9wZXJhKGUpIHtcbiAgICAgICAgICAgIGlmICghZS5zdGFja3RyYWNlIHx8IChlLm1lc3NhZ2UuaW5kZXhPZignXFxuJykgPiAtMSAmJlxuICAgICAgICAgICAgICAgIGUubWVzc2FnZS5zcGxpdCgnXFxuJykubGVuZ3RoID4gZS5zdGFja3RyYWNlLnNwbGl0KCdcXG4nKS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYTkoZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFlLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYTEwKGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9wZXJhMTEoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VPcGVyYTk6IGZ1bmN0aW9uIEVycm9yU3RhY2tQYXJzZXIkJHBhcnNlT3BlcmE5KGUpIHtcbiAgICAgICAgICAgIHZhciBsaW5lUkUgPSAvTGluZSAoXFxkKykuKnNjcmlwdCAoPzppbiApPyhcXFMrKS9pO1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gZS5tZXNzYWdlLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDIsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gbGluZVJFLmV4ZWMobGluZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgU3RhY2tGcmFtZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWF0Y2hbMl0sIG1hdGNoWzFdLCB1bmRlZmluZWQsIGxpbmVzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlT3BlcmExMDogZnVuY3Rpb24gRXJyb3JTdGFja1BhcnNlciQkcGFyc2VPcGVyYTEwKGUpIHtcbiAgICAgICAgICAgIHZhciBsaW5lUkUgPSAvTGluZSAoXFxkKykuKnNjcmlwdCAoPzppbiApPyhcXFMrKSg/OjogSW4gZnVuY3Rpb24gKFxcUyspKT8kL2k7XG4gICAgICAgICAgICB2YXIgbGluZXMgPSBlLnN0YWNrdHJhY2Uuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBsaW5lUkUuZXhlYyhsaW5lc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFN0YWNrRnJhbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbM10gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gT3BlcmEgMTAuNjUrIEVycm9yLnN0YWNrIHZlcnkgc2ltaWxhciB0byBGRi9TYWZhcmlcbiAgICAgICAgcGFyc2VPcGVyYTExOiBmdW5jdGlvbiBFcnJvclN0YWNrUGFyc2VyJCRwYXJzZU9wZXJhMTEoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZCA9IF9maWx0ZXIoZXJyb3Iuc3RhY2suc3BsaXQoJ1xcbicpLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhbGluZS5tYXRjaChGSVJFRk9YX1NBRkFSSV9TVEFDS19SRUdFWFApICYmICFsaW5lLm1hdGNoKC9eRXJyb3IgY3JlYXRlZCBhdC8pO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBfbWFwKGZpbHRlcmVkLCBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IGxpbmUuc3BsaXQoJ0AnKTtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb25QYXJ0cyA9IHRoaXMuZXh0cmFjdExvY2F0aW9uKHRva2Vucy5wb3AoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uQ2FsbCA9ICh0b2tlbnMuc2hpZnQoKSB8fCAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uQ2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxhbm9ueW1vdXMgZnVuY3Rpb24oOiAoXFx3KykpPz4vLCAnJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKFteXFwpXSpcXCkvZywgJycpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgYXJnc1JhdztcbiAgICAgICAgICAgICAgICBpZiAoZnVuY3Rpb25DYWxsLm1hdGNoKC9cXCgoW15cXCldKilcXCkvKSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzUmF3ID0gZnVuY3Rpb25DYWxsLnJlcGxhY2UoL15bXlxcKF0rXFwoKFteXFwpXSopXFwpJC8sICckMScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IChhcmdzUmF3ID09PSB1bmRlZmluZWQgfHwgYXJnc1JhdyA9PT0gJ1thcmd1bWVudHMgbm90IGF2YWlsYWJsZV0nKSA/XG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6IGFyZ3NSYXcuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrRnJhbWUoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1swXSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1sxXSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QYXJ0c1syXSxcbiAgICAgICAgICAgICAgICAgICAgbGluZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG59KSk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVkYm94LXJlYWN0L34vZXJyb3Itc3RhY2stcGFyc2VyL2Vycm9yLXN0YWNrLXBhcnNlci5qc1xuLy8gbW9kdWxlIGlkID0gODk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvLyBVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24gKFVNRCkgdG8gc3VwcG9ydCBBTUQsIENvbW1vbkpTL05vZGUuanMsIFJoaW5vLCBhbmQgYnJvd3NlcnMuXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKCdzdGFja2ZyYW1lJywgW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuU3RhY2tGcmFtZSA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gX2lzTnVtYmVyKG4pIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTdGFja0ZyYW1lKGZ1bmN0aW9uTmFtZSwgYXJncywgZmlsZU5hbWUsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgc291cmNlKSB7XG4gICAgICAgIGlmIChmdW5jdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRGdW5jdGlvbk5hbWUoZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFyZ3MoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbGVOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsZU5hbWUoZmlsZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGluZU51bWJlcihsaW5lTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uTnVtYmVyKGNvbHVtbk51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNvdXJjZShzb3VyY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgU3RhY2tGcmFtZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIGdldEZ1bmN0aW9uTmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25OYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXRGdW5jdGlvbk5hbWU6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uTmFtZSA9IFN0cmluZyh2KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRBcmdzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcmdzO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBcmdzOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3MgbXVzdCBiZSBhbiBBcnJheScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcmdzID0gdjtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBOT1RFOiBQcm9wZXJ0eSBuYW1lIG1heSBiZSBtaXNsZWFkaW5nIGFzIGl0IGluY2x1ZGVzIHRoZSBwYXRoLFxuICAgICAgICAvLyBidXQgaXQgc29tZXdoYXQgbWlycm9ycyBWOCdzIEphdmFTY3JpcHRTdGFja1RyYWNlQXBpXG4gICAgICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avdjgvd2lraS9KYXZhU2NyaXB0U3RhY2tUcmFjZUFwaSBhbmQgR2Vja28nc1xuICAgICAgICAvLyBodHRwOi8vbXhyLm1vemlsbGEub3JnL21vemlsbGEtY2VudHJhbC9zb3VyY2UveHBjb20vYmFzZS9uc0lFeGNlcHRpb24uaWRsIzE0XG4gICAgICAgIGdldEZpbGVOYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RmlsZU5hbWU6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVOYW1lID0gU3RyaW5nKHYpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldExpbmVOdW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVOdW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldExpbmVOdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBpZiAoIV9pc051bWJlcih2KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0xpbmUgTnVtYmVyIG11c3QgYmUgYSBOdW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGluZU51bWJlciA9IE51bWJlcih2KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb2x1bW5OdW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbHVtbk51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Q29sdW1uTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKCFfaXNOdW1iZXIodikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb2x1bW4gTnVtYmVyIG11c3QgYmUgYSBOdW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sdW1uTnVtYmVyID0gTnVtYmVyKHYpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICAgICAgICB9LFxuICAgICAgICBzZXRTb3VyY2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IFN0cmluZyh2KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gdGhpcy5nZXRGdW5jdGlvbk5hbWUoKSB8fCAne2Fub255bW91c30nO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSAnKCcgKyAodGhpcy5nZXRBcmdzKCkgfHwgW10pLmpvaW4oJywnKSArICcpJztcbiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IHRoaXMuZ2V0RmlsZU5hbWUoKSA/ICgnQCcgKyB0aGlzLmdldEZpbGVOYW1lKCkpIDogJyc7XG4gICAgICAgICAgICB2YXIgbGluZU51bWJlciA9IF9pc051bWJlcih0aGlzLmdldExpbmVOdW1iZXIoKSkgPyAoJzonICsgdGhpcy5nZXRMaW5lTnVtYmVyKCkpIDogJyc7XG4gICAgICAgICAgICB2YXIgY29sdW1uTnVtYmVyID0gX2lzTnVtYmVyKHRoaXMuZ2V0Q29sdW1uTnVtYmVyKCkpID8gKCc6JyArIHRoaXMuZ2V0Q29sdW1uTnVtYmVyKCkpIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb25OYW1lICsgYXJncyArIGZpbGVOYW1lICsgbGluZU51bWJlciArIGNvbHVtbk51bWJlcjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gU3RhY2tGcmFtZTtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVkYm94LXJlYWN0L34vc3RhY2tmcmFtZS9zdGFja2ZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA4OThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wcm9taXNlID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UnKTtcblxudmFyIF9wcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb21pc2UpO1xuXG52YXIgX3BhdGNoUmVhY3QgPSByZXF1aXJlKCcuL3BhdGNoLXJlYWN0Jyk7XG5cbnZhciBfcGF0Y2hSZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRjaFJlYWN0KTtcblxudmFyIF9ldmFsU2NyaXB0ID0gcmVxdWlyZSgnLi4vbGliL2V2YWwtc2NyaXB0Jyk7XG5cbnZhciBfZXZhbFNjcmlwdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmFsU2NyaXB0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF93aW5kb3cgPSB3aW5kb3csXG4gICAgZXJyb3JDb21wb25lbnQgPSBfd2luZG93Ll9fTkVYVF9EQVRBX18uZXJyb3JDb21wb25lbnQ7XG5cbnZhciBFcnJvckNvbXBvbmVudCA9ICgwLCBfZXZhbFNjcmlwdDIuZGVmYXVsdCkoZXJyb3JDb21wb25lbnQpLmRlZmF1bHQ7XG5cbi8vIGFwcGx5IHBhdGNoIGZpcnN0XG4oMCwgX3BhdGNoUmVhY3QyLmRlZmF1bHQpKGZ1bmN0aW9uIChlcnIpIHtcbiAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBvbkVycm9yKGVycik7XG4gIH0pO1xufSk7XG5cbnJlcXVpcmUoJ3JlYWN0LWhvdC1sb2FkZXIvcGF0Y2gnKTtcblxudmFyIG5leHQgPSB3aW5kb3cubmV4dCA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBlbWl0dGVyID0gbmV4dC5kZWZhdWx0KG9uRXJyb3IpO1xuXG5mdW5jdGlvbiBvbkVycm9yKGVycikge1xuICAvLyBqdXN0IHNob3cgdGhlIGRlYnVnIHNjcmVlbiBidXQgZG9uJ3QgcmVuZGVyIEVycm9yQ29tcG9uZW50XG4gIC8vIHNvIHRoYXQgdGhlIGN1cnJlbnQgY29tcG9uZW50IGRvZXNuJ3QgbG9zZSBwcm9wc1xuICBuZXh0LnJlbmRlcih7IGVycjogZXJyLCBlbWl0dGVyOiBlbWl0dGVyIH0pO1xufVxuXG52YXIgbGFzdFNjcm9sbCA9IHZvaWQgMDtcblxuZW1pdHRlci5vbignYmVmb3JlLXJlYWN0ZG9tLXJlbmRlcicsIGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBDb21wb25lbnQgPSBfcmVmLkNvbXBvbmVudDtcblxuICAvLyBSZW1lbWJlciBzY3JvbGwgd2hlbiBFcnJvckNvbXBvbmVudCBpcyBiZWluZyByZW5kZXJlZCB0byBsYXRlciByZXN0b3JlIGl0XG4gIGlmICghbGFzdFNjcm9sbCAmJiBDb21wb25lbnQgPT09IEVycm9yQ29tcG9uZW50KSB7XG4gICAgdmFyIF93aW5kb3cyID0gd2luZG93LFxuICAgICAgICBwYWdlWE9mZnNldCA9IF93aW5kb3cyLnBhZ2VYT2Zmc2V0LFxuICAgICAgICBwYWdlWU9mZnNldCA9IF93aW5kb3cyLnBhZ2VZT2Zmc2V0O1xuXG4gICAgbGFzdFNjcm9sbCA9IHtcbiAgICAgIHg6IHBhZ2VYT2Zmc2V0LFxuICAgICAgeTogcGFnZVlPZmZzZXRcbiAgICB9O1xuICB9XG59KTtcblxuZW1pdHRlci5vbignYWZ0ZXItcmVhY3Rkb20tcmVuZGVyJywgZnVuY3Rpb24gKF9yZWYyKSB7XG4gIHZhciBDb21wb25lbnQgPSBfcmVmMi5Db21wb25lbnQ7XG5cbiAgaWYgKGxhc3RTY3JvbGwgJiYgQ29tcG9uZW50ICE9PSBFcnJvckNvbXBvbmVudCkge1xuICAgIC8vIFJlc3RvcmUgc2Nyb2xsIGFmdGVyIEVycm9yQ29tcG9uZW50IHdhcyByZXBsYWNlZCB3aXRoIGEgcGFnZSBjb21wb25lbnQgYnkgSE1SXG4gICAgdmFyIF9sYXN0U2Nyb2xsID0gbGFzdFNjcm9sbCxcbiAgICAgICAgeCA9IF9sYXN0U2Nyb2xsLngsXG4gICAgICAgIHkgPSBfbGFzdFNjcm9sbC55O1xuXG4gICAgd2luZG93LnNjcm9sbCh4LCB5KTtcbiAgICBsYXN0U2Nyb2xsID0gbnVsbDtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9uZXh0L2Rpc3QvY2xpZW50L25leHQtZGV2LmpzXG4vLyBtb2R1bGUgaWQgPSA5MTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0LXByb3h5L34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QtcHJveHkvfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=