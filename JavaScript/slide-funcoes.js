capinicial = 100;
jurosam = 0.2;
prazomeses = 8;

function calcularMontante (capinicial, jurosam, prazomeses) 
{
    montante = capinicial * (1 + jurosam) ** prazomeses;
    console.log(montante);
}

calcularMontante(capinicial, jurosam, prazomeses);


function somarNumeros (a, b = 1)
{
    return a + b;
}

console.log(somarNumeros(10));
console.log(somarNumeros(10, 20))
console.log(somarNumeros())