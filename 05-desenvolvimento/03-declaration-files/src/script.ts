declare global {
    interface Usuario {
        id: number;
        nome: string;
    }
}

export interface Produto {
    nome: string;
    preco: number;
}

export const livro: Produto = {
    nome: "O Senhor dos Anéis",
    preco: 200
};