function calcularFrete(distancia) {
    const multiplicaValor = 10;
    return distancia * frete;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
