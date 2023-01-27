async function fetchVendas () {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');

    const data = await response.json();

    console.log(data);

    somarVendas(data);
}

fetchVendas();

interface ProdutoDetalhe {
    marca: string;
    cor: string;
}

type Venda = [string, number, string, ProdutoDetalhe]

function somarVendas(vendas: Venda[]) {
    let total = 0;
    for(let i = 0; i < vendas.length; i++) {
        total += vendas[i][1];
    }

    document.body.innerHTML += `<p>Total: ${total}</p>`;

    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);

    document.body.innerHTML += `<p>Total: ${total2}</p>`;
}