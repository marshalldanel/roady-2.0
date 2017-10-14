// Shim to fix React16 warning:
// React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
// https://reactjs.org/blog/2017/09/26/react-v16.0.html

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
