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
export declare const livro: Produto;
