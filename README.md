A starter Sass project from Gravity Works.

## Prereqs
* Sass (Gem)
* Sass Globbing (Gem)
* Susy (Gem)
* Compass (Gem)
* Node
* Gulp

## Install

```
npm install
gulp
```

## Writing Media Queries
Mobile first. Use the 'breakpoint' mixin along with breakpoint variables to use mediaqueries alongside your objects. Example:
```scss
body {
  // mobile first css here.
  @include breakpoint($mobile) {
    // Your > mobile css here.
  }
}
```

## Using The Grid
Coming soon.

## Using Dynamic Ratios
The 'has-dynamic-ratio' mixin lets you create a flexible, fixed-ratio container. You'll usually use this for SVGs.
Ex:
```scss
.my-ratio-box {
	@include has-dynamic-ratio(71%);
}
```
where 70% = the height of the contained item / its width
```html
<div class="my-ratio-box">
<div>your svg</div>
</div>
```

## To Do
1. Update *Using The Grid* section
2. Update Gulp plugins
3. Add ruby sass to Gulp?
