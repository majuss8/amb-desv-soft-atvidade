function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;
    const bonusGerente = 1000;
    const bonusSupervisor = 500;
    const bonusFuncionario = 200;

    let salarioComBonus;
    if (cargo === "gerente") {
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + bonusSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusFuncionario;
    }

    const desconto = 300;
    const salarioComDesconto = salarioComBonus - desconto;


    let salarioFinal;
    if (salarioComDesconto > 5000) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * 0.27);
    } else if (salarioComDesconto > 3000) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * 0.18);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * 0.11);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, "gerente");
console.log(`O salário final é: ${salario}`);
