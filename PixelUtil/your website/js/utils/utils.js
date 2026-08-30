/* example for utils.js */

/* create a random number */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* find out if an element exists */
function elementExists(selector) {
    return document.querySelector(selector) !== null;
}