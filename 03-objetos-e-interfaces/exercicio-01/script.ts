interface UserData {
    nome?: string;
    email?: string;
    cpf?: string;
}

interface Window {
    UserData: any;
}

window.UserData = {};


// User Type Guard para o UserData
function isUserData(obj: unknown): obj is UserData {
    if (obj && typeof obj === 'object' && 
    ("nome" in obj || "email" in obj || "cpf" in obj)) {
        return true;
    } else {
        return false;
    }
}

// Função para validar se é uma string válida para o JSON (não pode ser usado aspas simples)
function validJSON(str: string) {
    try {
        JSON.parse(str);
    } catch (err) {
        return false
    }
    return true;
}

function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');

    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData);  // conversão para objeto
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}

loadLocalStorage()

function handleInput({ target }: KeyboardEvent) {
    if(target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));  // conversão para string (localStorage não armazena como objeto)
    }
}

const form = document.querySelector<HTMLElement>('#form');
form?.addEventListener('keyup', handleInput);