/* -- Document -- */

/* Get an element by ID */
const element = document.getElementById('elementid');

/* Get the first element matching a selector */
const element = document.querySelector('.example');

/* Get all elements matching a selector */
const elements = document.querySelectorAll('.example');

/* Get elements by class */
const elements = document.getElementsByClassName('elementsWithClass');

/* Get elements by tag */
const elements = document.getElementsByTagName('p');

/* Create an element */
const element = document.createElement('div');


/* Add an element to another element */
parent.appendChild(element);

/* Remove an element */
element.remove();

/* Get the parent element */
element.parentElement;

/* Get the child elements */
element.children;


/* -- Document Events -- */

/* DOM is ready */
document.addEventListener('DOMContentLoaded', () => {
});

/* Page has completely loaded */
window.addEventListener('load', () => {
});

/* Page is about to unload */
window.addEventListener('beforeunload', (event) => {
});


/* -- Mouse Events -- */

/* Element is clicked */
element.addEventListener('click', (event) => {
});

/* Element is double-clicked */
element.addEventListener('dblclick', (event) => {
});

/* Mouse button is pressed */
element.addEventListener('mousedown', (event) => {
});

/* Mouse button is released */
element.addEventListener('mouseup', (event) => {
});

/* Mouse moves over element */
element.addEventListener('mousemove', (event) => {
});

/* Mouse enters element */
element.addEventListener('mouseenter', (event) => {
});

/* Mouse leaves element */
element.addEventListener('mouseleave', (event) => {
});

/* Mouse enters element or its children */
element.addEventListener('mouseover', (event) => {
});

/* Mouse leaves element or its children */
element.addEventListener('mouseout', (event) => {
});

/* Mouse wheel is used */
element.addEventListener('wheel', (event) => {
});


/* -- Keyboard Events -- */

/* Key is pressed */
document.addEventListener('keydown', (event) => {
});

/* Key is released */
document.addEventListener('keyup', (event) => {
});

/* Legacy key press event */
document.addEventListener('keypress', (event) => {
});


/* -- Form Events -- */

/* Form is submitted */
form.addEventListener('submit', (event) => {
});

/* Input value changes while typing */
input.addEventListener('input', (event) => {
});

/* Input value changes after the value is committed */
input.addEventListener('change', (event) => {
});

/* Element receives focus */
input.addEventListener('focus', (event) => {
});

/* Element loses focus */
input.addEventListener('blur', (event) => {
});

/* Form is reset */
form.addEventListener('reset', (event) => {
});


/* -- Clipboard Events -- */

/* User copies something */
element.addEventListener('copy', (event) => {
});

/* User cuts something */
element.addEventListener('cut', (event) => {
});

/* User pastes something */
element.addEventListener('paste', (event) => {
});


/* -- Window Events -- */

/* Browser window changes size */
window.addEventListener('resize', () => {
});

/* User scrolls */
window.addEventListener('scroll', () => {
});

/* Browser history changes */
window.addEventListener('popstate', () => {
});

/* Browser goes online */
window.addEventListener('online', () => {
});

/* Browser goes offline */
window.addEventListener('offline', () => {
});


/* -- Touch Events -- */

/* Finger touches the screen */
element.addEventListener('touchstart', (event) => {
});

/* Finger moves across the screen */
element.addEventListener('touchmove', (event) => {
});

/* Finger leaves the screen */
element.addEventListener('touchend', (event) => {
});

/* Touch is cancelled */
element.addEventListener('touchcancel', (event) => {
});


/* -- Pointer Events -- */

/* Pointer enters element */
element.addEventListener('pointerenter', (event) => {
});

/* Pointer leaves element */
element.addEventListener('pointerleave', (event) => {
});

/* Pointer is pressed */
element.addEventListener('pointerdown', (event) => {
});

/* Pointer is released */
element.addEventListener('pointerup', (event) => {
});

/* Pointer moves */
element.addEventListener('pointermove', (event) => {
});

/* Pointer changes */
element.addEventListener('pointercancel', (event) => {
});


/* -- Drag Events -- */

/* Element starts being dragged */
element.addEventListener('dragstart', (event) => {
});

/* Element is being dragged */
element.addEventListener('drag', (event) => {
});

/* Element enters a valid drop target */
element.addEventListener('dragenter', (event) => {
});

/* Element moves over a drop target */
element.addEventListener('dragover', (event) => {
});

/* Element leaves a drop target */
element.addEventListener('dragleave', (event) => {
});

/* Element is dropped */
element.addEventListener('drop', (event) => {
});

/* Dragging ends */
element.addEventListener('dragend', (event) => {
});


/* -- Media Events -- */

/* Media starts playing */
media.addEventListener('play', () => {
});

/* Media is paused */
media.addEventListener('pause', () => {
});

/* Media reaches the end */
media.addEventListener('ended', () => {
});

/* Media time changes */
media.addEventListener('timeupdate', () => {
});

/* Media volume changes */
media.addEventListener('volumechange', () => {
});


/* -- DOM Manipulation -- */

/* Change text */
element.textContent = 'PixelUtil';

/* Change HTML */
element.innerHTML = '<strong>PixelUtil</strong>';

/* Change an attribute */
element.setAttribute('data-example', 'value');

/* Get an attribute */
element.getAttribute('data-example');

/* Remove an attribute */
element.removeAttribute('data-example');

/* Add a class */
element.classList.add('class');

/* Remove a class */
element.classList.remove('class');

/* Toggle a class */
element.classList.toggle('class');

/* Check if element has a class */
element.classList.contains('class');


/* -- Events -- */

/* Prevent the browser's default behavior */
event.preventDefault();

/* Stop the event from continuing */
event.stopPropagation();

/* Remove an event listener */
element.removeEventListener('click', functionName);


/* -- Timers -- */

/* Run once after a delay */
setTimeout(() => {
}, 1000);

/* Run repeatedly */
const interval = setInterval(() => {
}, 1000);

/* Stop an interval */
clearInterval(interval);


/* -- Animation -- */

/* Run code before the next browser repaint */
requestAnimationFrame(() => {
});


/* -- Storage -- */

/* Save data */
localStorage.setItem('key', 'value');

/* Get data */
localStorage.getItem('key');

/* Remove data */
localStorage.removeItem('key');

/* Remove all stored data */
localStorage.clear();


/* -- URL -- */

/* Get the current URL */
window.location.href;

/* Reload the page */
window.location.reload();

/* Navigate to another page */
window.location.href = 'page.html';


/* -- Console -- */

/* Log a message */
console.log('Pixel Util allows you to create websites with prebuilt utilities, components and project structure. All of this is ready so you can get to building!');

/* Log a warning */
console.warn('Warning');

/* Log an error */
console.error('Error');

/* Display data as a table */
console.table(data);


/* -- Fetch -- */

/* Request data from a server */
fetch('/api/data')
    .then(response => response.json())
    .then(data => {
})
    .catch(error => {
});