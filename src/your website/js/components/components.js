
/* -- Components -- */

/* Create a component */
const component = document.createElement('div');


/* Create a component with a class */
const component = document.createElement('div');
component.classList.add('component');


/* Create a component with an ID */
const component = document.createElement('div');
component.id = 'component';


/* Create a component with text */
const component = document.createElement('div');
component.textContent = 'PixelUtil';


/* Create a component with HTML */
const component = document.createElement('div');
component.innerHTML = '<span>PixelUtil</span>';


/* Create a component from an HTML string */
const template = document.createElement('template');

template.innerHTML = `
    <div class="component">
        <h2>PixelUtil</h2>
        <p>Example component</p>
    </div>
`;

const component = template.content.firstElementChild;


/* -- Component Classes -- */

/* Add a class */
component.classList.add('active');


/* Remove a class */
component.classList.remove('active');


/* Toggle a class */
component.classList.toggle('active');


/* Check if a component has a class */
component.classList.contains('active');


/* Replace a class */
component.classList.replace('old-class', 'new-class');


/* -- Component Attributes -- */

/* Set an attribute */
component.setAttribute('data-component', 'card');


/* Get an attribute */
component.getAttribute('data-component');


/* Remove an attribute */
component.removeAttribute('data-component');


/* Check if an attribute exists */
component.hasAttribute('data-component');


/* -- Component Content -- */

/* Set text */
component.textContent = 'Hello';


/* Set HTML */
component.innerHTML = '<strong>Hello</strong>';


/* Add HTML without replacing existing content */
component.insertAdjacentHTML(
    'beforeend',
    '<span>New content</span>'
);


/* -- Component Structure -- */

/* Add a child component */
parent.appendChild(component);


/* Add a component before another component */
parent.insertBefore(component, existingComponent);


/* Remove a component */
component.remove();


/* Replace a component */
oldComponent.replaceWith(newComponent);


/* Get the parent */
component.parentElement;


/* Get all children */
component.children;


/* Get the first child */
component.firstElementChild;


/* Get the last child */
component.lastElementChild;


/* -- Component Selection -- */

/* Find a component inside another component */
component.querySelector('.child');


/* Find all matching components inside another component */
component.querySelectorAll('.child');


/* -- Component Events -- */

/* Add an event to a component */
component.addEventListener('click', () => {

});


/* Remove an event */
component.removeEventListener('click', functionName);


/* -- Component Visibility -- */

/* Hide a component */
component.hidden = true;


/* Show a component */
component.hidden = false;


/* Toggle visibility */
component.hidden = !component.hidden;


/* -- Component State -- */

/* Store component state using a data attribute */
component.dataset.state = 'active';


/* Get component state */
component.dataset.state;


/* Remove component state */
delete component.dataset.state;


/* -- Component Templates -- */

/* Create a reusable template */
const template = document.createElement('template');

template.innerHTML = `
    <article class="card">
        <h2 class="card-title"></h2>
        <p class="card-description"></p>
    </article>
`;


/* Clone a template */
const card = template.content.cloneNode(true);


/* -- Component Functions -- */

/* Create a reusable component */
function createComponent() {
    const component = document.createElement('div');

    component.classList.add('component');

    return component;
}


/* Create a component with content */
function createComponent(content) {
    const component = document.createElement('div');

    component.classList.add('component');
    component.textContent = content;

    return component;
}
