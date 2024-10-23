function numerosPares(listaNumeros) {
    const listaNumerosPares = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0) {
            listaNumerosPares.push(listaNumeros[i]);
        }
    }
    return listaNumerosPares;
}

const listaNumeros = [1, 2, 3, 4, 5, 6];
const listaNumerosPares = numerosPares(listaNumeros);
console.log(listaNumerosPares);
