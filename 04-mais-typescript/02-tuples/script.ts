const produto1 = ['Notebook', 2500];
const produto2: [string, number] = ['Notebook', 2500];

produto2[0].toLocaleLowerCase();
produto2[1].toFixed();

const [nome, preco] = produto2;


function getText(selector: string) {
    const el = document.querySelector<HTMLElement>(selector);
    if(el) {
        return [el, el.innerText] as const;
    } else {
        return null;
    }
}

const button = getText('button');

if(button) {
    const [buttonElement, buttonText] = button;
}