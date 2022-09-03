var conjunto = [3, 4.5, 7.2, -7.4, 0.412, Math.PI];
console.log(conjunto);
console.log(conjunto[0]);
console.log(conjunto.length);

conjunto.push('-250', true, 'victor')
console.log(conjunto.length)
console.log(conjunto)
conjunto.push({nome: 'victor'})
console.log(conjunto);
delete conjunto[0];
console.log(conjunto);

var idades = [40, 36, 17, 80, 41, 22, 66, 17];
console.log(idades.sort());
console.log(idades.reverse());

var convidados = ['Victor', 'Maria', 'Alvaro', 'Silvia', 'Zacarias'];
console.log(convidados.sort());
console.log(convidados.reverse());