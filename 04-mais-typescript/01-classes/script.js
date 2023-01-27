"use strict";
console.log(document.constructor);
class Produto {
    // readonly -> somente leitura
    tipo = "produto";
    nome;
    // private -> só pode ser acessada dentro da classe
    // protected: só pode ser acessada dentro da classe e subclasses
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    getPreco() {
        return this.preco;
    }
    // [javascript] static -> não fará parte do Objeto criado
    // e sim da função construtora (classe)
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
const livro = new Produto("O Senhor dos Anéis", 300);
console.log(livro.getPreco());
console.log(livro.tipo);
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log(forma.getArea());
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro());
    }
});
