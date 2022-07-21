console.log(numero1, numero2);
console.log("O primeiro número é maior que o segundo?", numero1 > numero2);
console.log("O primeiro número é igual ao segundo?", numero1 === numero2);

//A comparação dos números 1 e 2
// let divisao1por2;
// let divisao2por1;
// if((numero1%numero2)===0){
//     divisao1por2 = true
// }
// else{
//     divisao1por2 = false
// }
// if((numero2%numero1)===0){
//     divisao2por1 = true
// }
// else{
//     divisao2por1 = false
// }
// console.log("O primeiro número é divisível pelo segundo?", divisao1por2);
// console.log("O segundo número é divisível pelo primeiro?", divisao2por1);

//O retorno dos valores de true e false sobre a divisibilidade dos numeros 1 e 2

console.log("O primeiro número é divisível pelo segundo?", numero1%numero2 === 0);
console.log("O segundo número é divisível pelo primeiro?", numero2%numero1 === 0);