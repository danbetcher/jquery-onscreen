# jQuery On Screen Plugin

This plugin is a simple way to test if a given element (or part there-of) is inside the bounds of the current viewport. You can use it for all sorts of things, like delaying animations and other javascript from executing until an element is visible to the user - regardless of their device or screen size.

## Example Usage

Use the plugin as follows:
```js
$('#element').onScreen();
```
Returns true if the element is visible in the viewport, or false if it is not.

You can use it as part of a conditional statement as follows:
```js
if ($('#element').onScreen()) {
    // Your element is in the Viewport
} else {
    // Your element is not in the Viewport
}
```

To see a working example of this plugin, demo.html has been provided as part of the package.

## Notes & Contribution

Feel free to send me changes and improvements, or file an issue if you notice something isn't working as well as it should be.

This is my first little Open Source contribution, so be gentle with your feedback!