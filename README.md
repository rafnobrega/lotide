# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rafnobrega/lotide`

**Require it:**

`const _ = require('@rafnobrega/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: takes in two arrays and console.log an appropriate message to the console.
* `assertEqual`: compares the two values it takes in and print out a message telling us if they match or not.
* `assertObjectsEqual`: takes in two objects and console.log an appropriate message to the console.
* `countLetters`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly`: takes in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others. Items in our case will be limited to Strings.
* `eqArrays`: takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: takes in two objects and returns true or false, based on a perfect match.
* `findKey`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten`: takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `head`: returns the first item in the array.
* `index`: a list of all function in a object.
* `letterPositions`: returns all the indices (zero-based positions) in the string where each character is found.
* `map`: returns a new array based on the results of the callback function.
* `middle`: takes in an array and return the middle-most element(s) of the given array.
* `tail`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil`: keeps collecting items from a provided array until the callback provided returns a truthy value.
* `without`: returns a subset of a given array, removing unwanted elements.


Thank you!
rafnobrega