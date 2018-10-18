---
title: Iterations on Each/For Loops
layout: index
permalink: "/blog/:title/"
tags:
- jekyll
---

Let's say you want to apply specific behaviors to every 3rd item of an array. Technically, you can use nth-child, but you can't apply nth-child to specific children.

<p data-height="300" data-theme-id="20092" data-slug-hash="WZwBEa" data-default-tab="js,result" data-user="ecupaio" data-embed-version="2" data-pen-title="Iteration Loop Example" class="codepen">See the Pen <a href="https://codepen.io/ecupaio/pen/WZwBEa/">Iteration Loop Example</a> by Ed Cupaioli (<a href="https://codepen.io/ecupaio">@ecupaio</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As you can see in the example, I have a class added to the first, second, and third of each  
## Modulo (%)
Modulo is the best way to find the ordinal position (eg every 3rd item). The symbol for modulo is %. Here's how it works:

Modulo outputs the integer (whole number) remainder after dividing two numbers. In 5 % 3 the remainder is 2 and in 8 % 3 the remainder is two. Since iteration starts counting at 0, both 5 and 8 would represent the 6th and 9th items in the iteration

## Modulo Logic for Iterations
The logic for the iteration is as follows:
`i % (ordinal position) === (ordinal position - 1)`

Let's say I want every 8th item to have a class added to it. I would create the modulo condition as such: `if (i % 8 == 7)`. In the iteration loop, 7 and 15 represent the 8th and 16th items in the loop. [15 % 8](https://www.miniwebtool.com/modulo-calculator/?number1=15&number2=8) and [7 % 8](https://www.miniwebtool.com/modulo-calculator/?number1=7&number2=8) both equal 7 which guarantees every eight item will have the class you want added to it.

## Order of conditionals

You must start with the highest ordinal position first and go down. For example, every 2nd can produce the same modulo for every 4th, but not vice versa. So you need to start with the highest and work your way down. For example if you wanted a function for every 3rd and 6th modulo you would structure your conditions as such:

```
if (i & 6 == 5) {
	//dosomething

} else if (i % 3 == 2) {
	//dosomething
}
```

## Try it yourself
Fork my [codepen](https://codepen.io/ecupaio/pen/WZwBEa) and see if you can set up a condition for every 5th and 1st item.

Your conditional statement should look like this:

```
if (i % 5 == 4) {
	//dosomething
} else if (i % 1 == 0) {
	//dosomething
}

```
