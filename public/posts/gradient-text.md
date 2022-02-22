---
title: Gradient text in CSS
shortDescription: A simple technique for making eye-catching websites
category: CSS
coverImage: https://miro.medium.com/max/700/1*QClHLIxCMWWa9lTQoQ00dQ.png
---

It can be hard to make a website stand out.

So here’s a little trick that will improve any landing page or header: Use gradient text.

Just make sure to not overuse it. Gradients should never be used for longer text. Instead, use them to make headings or specific words more eye-catching.

What might surprise you — especially if you have prior experience with design tools — is that you can’t set a gradient as the text color directly. For example `color: linear-gradient(yellow, red)` won’t work.

But gradient text **can** be achieved in CSS, it just requires a few extra steps.

It’s best to start with some big bold text. This will make the gradient more visible and the text more readable.

![img](https://miro.medium.com/max/700/1*daqahoIP2_fipWAL_BMOCg.png)

The text I’ll be using is styled using [font shorthand](https://medium.com/swlh/full-text-styling-with-a-single-line-of-css-838e8c666f4d) with the following values:

```
font: bold 120px Poppins, sans-serif;
```

# Step 1: Add a Gradient

First, we need to add the gradient as a background.

![img](https://miro.medium.com/max/700/1*74nWR98Sk3Tz3z2u4j_aOQ.png)

By default, the gradient will go from top to bottom, but we can also specify a direction.

If you want a horizontal gradient, `to right` will do the trick, but a slight angle like `60deg` looks more natural.

```css
.gradient-text {
  background-image: linear-gradient(60deg, #E21143, #FFB03A);
}
```

![img](https://miro.medium.com/max/700/1*8TF7IphKO6HqjEyIn7KEgQ.png)

If you want to learn how to create any gradient you want, or simply need a refresher, check out my [Ultimate Guide to CSS Gradients](https://hadrysmateusz.medium.com/complete-guide-to-css-gradients-f6212760a268).

# Step 2: Clip It

Now we need to make the gradient only show where the text is. We can do that by using `background-clip`.

![img](https://miro.medium.com/max/700/1*rmJPxDR_tu0oraulMcrYGg.png)

You can learn more about this and other background properties, in my article about [all background properties](https://hadrysmateusz.medium.com/learn-all-8-background-css-properties-in-5-minutes-210635e060be).

You might already know that this property lets us clip the background to the border, padding, or content [box](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) of an element.

But it can also clip the background to the text.

```css
.gradient-text {
  background-image: linear-gradient(60deg, #E21143, #FFB03A);
  background-clip: text;
}
```

If you try this code, it will look like the gradient just disappeared. That’s because the gradient is **under** the text.

# Step 3: Reveal It

To show the gradient underneath our text, we need to make the text transparent. We can do that by setting `color: transparent`.

![img](https://miro.medium.com/max/700/1*4zVgfWvI_zIZlfoCAMFtxg.gif)

```css
.gradient-text {
  background-image: linear-gradient(60deg, #E21143, #FFB03A);
  background-clip: text;
  color: transparent;
}
```

You might be tempted to use the [background shorthand](https://medium.com/swlh/the-fastest-way-to-set-css-backgrounds-47e7e5e17bab) here. Don’t.

Unfortunately, the `background` shorthand version of `background-clip` doesn’t support the `text` keyword.

# Fallback

If you must support Internet Explorer, you’ll need to fallback to a flat color.

Wrap everything we’ve written before in an `@supports` rule. This way it'll only be rendered in modern browsers.

Then, outside of the `@supports` block, set a fallback color for the text. It should probably be a color that appears in your gradient and works well with the rest of the design.

```css
/* fallback for IE */
.gradient-text {
  color: red;
}
/* gradient text for modern browsers */
@supports (background-clip: text) {
  .gradient-text {
    background-image: linear-gradient(60deg, #E21143, #FFB03A);
    background-clip: text;
    color: transparent;
  }
}
```

Make sure the fallback comes before the actual gradient styles.

> ***NOTE:*** *Even though the @supports rule itself is also not supported in IE, everything inside will still be ignored, which is exactly what we want.*
