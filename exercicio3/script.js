const operacao1 = 5 > 20 && 5 < 2;
console.log(operacao1);
// 5 não é maior que 20, logo falso

const operacao2 = 5 === 5 || 5 === '5';
console.log(operacao2);
// 5 e '5' são iguais

const operacao3 = !20 > 50;
console.log(operacao3);
//20 não é maior que 50

const operacao4 = !(20 > 50)
console.log(operacao4);
//a negação do false (20 maior que 50 = false) é true