---
title: Full Text Styling With a Single Line of CSS
shortDescription: How to get over your fear of the font shorthand to replace 6 lines of CSS with 1
category: CSS
coverImage: https://miro.medium.com/max/700/1*jSc_lFobFx7LKq3PFDRAnA.png
---

Am I the only one who always thought the font shorthand was too confusing to use?

Well, I finally decided to start using it.

Now I want to share with you what I’ve learned. All the quirks, gotchas and use-cases.

> It’s a very useful tool, if you’re willing to play by its rules.

# What does it do?

The font shorthand allows you to set almost all font-related properties with a single line of CSS.

**Including:**

- `font-style`
- `font-variant`
- `font-weight`
- `font-size`
- `line-height`
- `font-family`
- `font-stretch` — this one is not used as often, and won’t be discussed in this article

# Required properties

Out of these, only `font-size` and `font-family` are required. If you omit either, the whole line will be ignored. All other properties can be omitted.

![img](https://miro.medium.com/max/700/1*u_2kIdzakdIA1waDjSmjqw.png)

> Be careful though.
>
> If you don’t specify a property, it will be reset to its default value. Even if you’ve defined that property earlier. Including in a parent element.
>
> `font-kerning` and `font-size-adjust` will also be reset by this shorthand, even though they can’t be set by it.

# Order of Properties

The order of properties allows for some flexibility, but there are a few rules.

## Style, Variant & Weight

`font-style`, `font-variant`, and `font-weight` have to come before `font-size`. Their individual order doesn’t matter though.

![img](https://miro.medium.com/max/700/1*yIWyrq0LwadTk4ZbDkz7eQ.png)

If you don’t remember what these properties do, here’s a quick reminder:

- `font-style` — allows you to choose between `normal`, `italic`, and `oblique` styles of the font. Oblique is basically the same as italic but uses the same glyphs as the normal font, just slanted.
- `font-variant` — allows you to choose between the `normal`, and `small-caps` variants of the font.
- `font-weight` — allows you to choose the thickness (weight) of the font. Either by using keywords like `normal`, `bold`, `lighter`, `bolder` or a numeric value from 100 to 900.

## Font Family

`font-family` always has to be last.

![img](https://miro.medium.com/max/700/1*TzC60I0PSC39PJIIiDmzvQ.png)

It can be a [keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#Values) or font name. If the font name contains spaces, it should be wrapped in quotation marks. You can also specify additional fallback fonts, separated by commas. They will be used (from left to right), if the preferred font is unavailable.

```css
/* keyword */
font: 15px serif;
/* font name */
font: 15px "Playfair Display";
/* font name with keyword fallback */
font: 15px "Playfair Display", serif;
/* font name with 2 fallbacks: font name and keyword */
font: 15px "Playfair Display", Merriweather, serif;
```

A few examples of how to specify a font-family with and without fallback.

## Font Size & Line Height

`font-size` and `line-height` are right in the middle. After `font-style`, `font-variant`, and `font-weight`. But before `font-family`.

`line-height` has to come right after `font-size`, separated with a slash (`/`). If you don’t specify `line-height`, the slash should also be omitted.

![img](https://miro.medium.com/max/700/1*2SbvCyyeX7eDlfbqI9yfKA.png)

# Gotchas & Use-Cases

The overriding behavior of the font shorthand can make it a bit unpredictable. For this reason it’s best suited for small websites, quick prototyping, and experimentation.

# Cheatsheet

If you ever forget the exact order and rules of this shorthand, here’s a handy cheatsheet 😃

![img](https://miro.medium.com/max/700/1*DD-QoVZx93gIM2BQUfBCqw.png)