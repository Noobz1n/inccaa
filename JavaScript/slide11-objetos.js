const objeto1 = {
    produto: 'Smart TV',
    voltagem: 220,
    potencia: '128w'
};

console.log(objeto1);
console.log(objeto1.produto);

const objeto2 = {
        produto: 'Smart TV',
        voltagem: 220,
        potencia: '120w',
        valor: 3000,
        desconto: 0.3
};
console.log(objeto2.valor - objeto2.valor * objeto2.desconto);
console.log(`O valor do produto com desconto é de: ${objeto2.valor - objeto2.valor * objeto2.desconto}`)

const kittech = {
    kit1: {
        kitnome: 'Kit ultra',
        specs: {
            CPU: 'I7',
            RAM: '16GB',
            SSD: '1TB'
        }
    },

    kit2: {
        kitnome: 'Kit mega',
        specs: {
            CPU: 'I5',
            RAM: '8GB',
            SSD: '128GB'
        }
    }
}

console.log(kittech);
console.log(kittech.kit2)
console.log(kittech.kit2.specs.SSD)