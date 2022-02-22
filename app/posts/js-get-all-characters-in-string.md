---
title: 4 Ways to Get All Characters in a String in JavaScript
shortDescription: Stop using string.split(‘’) — It’s dangerous 💀
category: JavaScript
coverImage: https://miro.medium.com/max/700/1*rIzkO3EcNnq1QdZgODLoXg.png
---

*How to get all characters in a string?*

This question might sound simple at first, but in JavaScript nothing is ever what it seems. If you google *“How to get all characters in a string”* or *“How to get an array of characters from string”*, you will most likely find something like:

```javascript
var chars = "Some string".split('')

// or...

var str = "Some string"
for (var i = 0; i < str.length; i++) {
  console.log(str.charAt(i))
}
```

…and people arguing if you should use `str.charAt()` or the bracket notation.

However, these answers are usually pretty old and don’t take into account one important issue with these solutions…

# 🔥 Emoji ☠️

Or more generally: surrogate pairs. Most characters in javascript are encoded using 2 bytes, but that’s not enough to encode every symbol. To deal with this problem, emoji and some other rare symbols are encoded with a pair of 2-byte characters — a surrogate pair.

Surrogate pairs didn’t exist when JavaScript was created, so some parts of the language still treat these symbols like 2 separate characters. You can copy this snippet into your browser console to see for yourself:

```javascript
"💩".length
// returns 2
```

This can make the above methods sometimes return incorrect results, like this:

```javascript
"💩".split('') // returns ["�", "�"]
```

# ES6 to the rescue!

ES6 introduced the concept of iterators and along with it, a solution to the surrogate pairs problem.

Here are 4 ways to correctly get all characters in a string:

## Array.from()

The simplest way to create an array from any iterable, including strings.

```javascript
const str = "✨𝄞💩"
const chars = Array.from(str)
// chars is now: ["✨","𝄞","💩"]
```

## Spread operator

The shortest way to do get an array from a string, but sacrifices readability.

```javascript
const str = "✨𝄞💩"
const chars = [...str] 
// chars is now: ["✨","𝄞","💩"]
```

## For…of loop

The most versatile and performant of the bunch.

```javascript
const str = "✨𝄞💩"
for (let char of str) {
    console.log(char)
}
// Logs to the console: 
// "✨"
// "𝄞"
// "💩"
```

## RegExp unicode flag

If you’re feeling fancy you can also use a regular expression with the unicode flag.

```javascript
const str = "✨𝄞💩"
const chars = str.match(/./ug)
// chars is now: ["✨","𝄞","💩"]
```

# Browser support

All of the above are ES6 features, which at this time is supported pretty much everywhere, with the exception of internet explorer. If you need to support internet explorer you should transpile your code with a tool like [Babel](https://babeljs.io/). Or just use one of the old methods, but be aware of their limitations.