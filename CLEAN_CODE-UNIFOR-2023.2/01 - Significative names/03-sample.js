const d1 = "2024-01-01";
const d2 = "2024-12-31";

function calculaDiferencaDias(d1, d2) {
    return new Date(d2) - new Date(d1);
}

const res = calculaDiferencaDias(d1, d2);
console.log(res);
