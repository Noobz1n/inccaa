const curso = 'INCCAA';

console.log(curso)
console.log(curso.charCodeAt(1)) // Mostra o código decimal respectivo na tabela unicode para a letra de indice 1 (N)

console.log(curso.charAt(3)+curso.charAt(5)+curso.charAt(0))

console.log(curso.substring(2,5))
console.log(curso.substring(2))

console.log(curso.replace('A', 4))

const nome = 'Victor, vitor, vito'
console.log(nome)
console.log(nome.split(','))

const cliente = 'INCCAA';
const produto = 'Smart TV'
const template = `
        prezado Sr. ${cliente}
        Informamos que o seu produto ${produto} já pode ser retirado em nossa loja

        Gratos pela preferência.
`;
console.log(template)

console.log('20 * 2 ='.concat(20*2))

let texto1 = 'CuRso LeGal'
let texto2 = 'curso'
console.log(texto1.toLowerCase())
console.log(texto1.toUpperCase())
console.log(texto2.toUpperCase())
console.log(texto1.charAt(0).toUpperCase()+texto1.substring(1,))