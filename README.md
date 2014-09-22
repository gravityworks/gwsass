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
The Susy map included uses a 10 column grid, at a max-width of 1200px, with 20px gutters.
Ex:
```html
<div class="container">
	<div class="main">

	</div>
	<div class="sidebar">


	</div>
</div>
```
```scss
.main {
	@include span(7);
}
.sidebar {
	@include span(3);
}
```


