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
The Susy map included uses a 10 column grid, at a max-width of 1200px, with 20px gutters. Grids can be nested, but by default it assumes that your parent grid items have a 20px gutter (or padding). For ease of use, wrap your full width columns in a .container so that nested children will collapse properly.
Ex:
```html
<div class="container">
	<div class="main">
		<div class="container">
			<div class="content-left"></div>
			<div class="content-right"></div>
		</div>
	</div>
	<div class="sidebar"></div>
</div>
```
```scss
.main {
	@include span(10);
	@include breakpoint($mobile) {
		width: span(7);
	}
}
.sidebar {
	@include span(10);
	@include breakpoint($mobile) {
		width: span(3);
	}
}
.content-left,.content-right {
	@include span(5);
}
```
This would create a two column layout. .main will be 70% of our max-width, and .sidebar would be 30%.
We can also access just the width values of our grid if we need to fine tune a layout module. Ex:
```scss
.main {
	width: span(7);
	padding-right: 40px;
}
.sidebar {
	width: span(3);
}
```
You can also specify a column to float to the right using the 'last' option.
```scss
.main {
	@include span(last 7);
}
```

