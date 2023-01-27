"use strict";
const produto1 = ['Notebook', 2500];
const produto2 = ['Notebook', 2500];
produto2[0].toLocaleLowerCase();
produto2[1].toFixed();
const [nome, preco] = produto2;
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button = getText('button');
if (button) {
    const [buttonElement, buttonText] = button;
}
