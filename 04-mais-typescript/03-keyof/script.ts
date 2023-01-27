interface Produto {
    nome: string;
    preco: number;
    novo: boolean;
}

let chave: keyof Produto;

chave = "novo";

function coordenadas(x: number, y: number) {
    return { x, y };
}

let coord: typeof coordenadas;

coord = (x: number, y: number) => {
    return { x, y };
}