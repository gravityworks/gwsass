A starter Sass project from Gravity Works.

## Prereqs
* Sass (Gem)
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
```css
body {
  // mobile first css here.
  @include breakpoint($mobile) {
    // Your > mobile css here.
  }
}
```


