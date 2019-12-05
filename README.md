# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install ehanbidge/lotide`

**Require it:**

`const _ = require('ehanbidge/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: takes in an array and returns the first position value.
* `tail(arr)`: drops the first position value of an array and returns resulting array.
* `middle(arr)`: takes array and returns middle positions (1 for odd length 2 for even)
* `without(arr1, arr2)`: take in two arrays. Remove and values from the first that are in the second.
* `map(arr, callback())`: takes in an array and callback fn. and will return a new array based on the results of the callback function.
* `letterPositions(str)`: Takes in a string of letters and it returns an object with letter positions in string 
* `flatten(arr)`: Takes an array of nested arrays and returns an array of single elements
* `findKeyByValue(obj, value)`: takes in an object and a value and scans the object and return the first key which contains the given value.If no key with that given value is found, then it should return undefined.
* `findKey(obj,func)`: given an object and function, use the function to isolate the key by the function
* `eqOjects(obj1, obj2)`: take two object and test if they are equal. Return true if equal, false otherwise.
* `eqArrays(arr1, arr2)`: take two arrays and test if they are equal. Return true if equal, false otherwise.
* `countOnly(arr, obj)`: takes a list of strings and counts repetitions according to object specifications (true;false)
* `countLetters(str)`: takes in a string and counts the number of occurances of letters. It returns an object with letter counts if greater than zero.
* `takeUntil(arr, callback)` : Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

