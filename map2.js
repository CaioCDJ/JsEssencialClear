const carrinho =[
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Kit de lapis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}'
]

// desafio: retorna rum array apenas com os precos

// minha solucao
const result = carrinho.map(function (e){
  return JSON.parse(e).preco;
})

console.log(result)


// solucao da aula


const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);
