//1 - Crie uma função que receba como parâmetros 4 valores numéricos, calcule o quadrado de cada um, some todos e mostre o resultado.

function quadrados(w, x, y, z){
    let somaQuadrados = (w * w) + (x * x) + (y * y) + (z * z);
    console.log(somaQuadrados);

} 

quadrados(10, 20, 30, 40);


// 2 - Crie uma função que receba um número inteiro como parâmetro e mostre uma mensagem indicando se este número é par ou ímpar, 
//e se é positivo ou negativo.

let valor = -7;
let ehParOuImpar;
let ehPositivoOuNegativo;

if(valor % 2 == 0 && valor > 0){
    ehParOuImpar = 'Par';
    ehPositivoOuNegativo = 'Positivo';

}else if(valor % 2 == 0 && valor < 0){
    ehParOuImpar = 'Par';
    ehPositivoOuNegativo = 'Negativo';
}else{
    ehParOuImpar = 'Ímpar';
    if(valor > 0){
        ehPositivoOuNegativo = 'Positivo';
    }else{
        ehPositivoOuNegativo = 'Negativo';
    }
}

console.log(ehParOuImpar);
console.log(ehPositivoOuNegativo);


//3 - Faça uma função que receba como parâmetro um valor numérico, e retorne o dia correspondente da semana. 
//(1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

function diaDaSemana(n){
    switch(n){
        case 1:
            console.log('Domingo');
            break;
        case 2:
            console.log('Segunda');
            break;
        case 3:
            console.log('Terça');
            break;
        case 4:
            console.log('Quarta');
            break;
        case 5:
            console.log('Quinta');
            break;
        case 6:
            console.log('Sexta');
            break;
        case 7:
            console.log('Sábado');
            break;
        default:
            console.log('Valor inválido');

    }
}

diaDaSemana(10);
