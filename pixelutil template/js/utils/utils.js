/* example for utils.js */ 

/* theme switching */
export function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

export function getStoredTheme() {
    return localStorage.getItem('theme') || 'light';
}
/* create a random number */
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* find out if an element exists */
export function elementExists(selector) {
    return document.querySelector(selector) !== null;
}