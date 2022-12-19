//Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. 

for (var i = 100; i <= 110; i++) {
    console.log(i);
    
 }

// Faça um script que leia três números inteiros e mostre o maior deles.

var x = 10;
var y = 30;
var z = 2;

if( x > y && x > z){
    console.log(x);
}else if(y > x && y > z){
    console.log(y);
}else{
    console.log(z);
}


//Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles. 

var x = 1;
var y = 30;
var z = 2;

var maior;
var menor;

if( x > y && x > z){
    maior = x;
    
}else if(y > x && y > z ){
    maior = y;

}else{
    maior = z; 
}

if(x < y && x < z){
    menor = x;

}else if(y < x && y < z){
    menor = y;

}else{
    menor = z;
}

console.log(maior);
console.log(menor);


//Faça um algoritmo que possua as variáveis nome, cpf, idade, data_nascimento. 
//Atribua valores a ela e mostre seus valores.

var cadastro = {
    nome: 'Laura', 
    cpf: '123.456.789.10', 
    idade: 5, 
    data_nascimento: '10/04/2017'
};
console.log(cadastro.nome);
console.log(cadastro.cpf);
console.log(cadastro.idade);
console.log(cadastro.data_nascimento);

//Faça um algoritmo que tenha as variáveis nomeproduto, preco, estoque, validade. 
//Atribua valores a elas e mostre na body. 


document.getElementById('nomeProduto').innerHTML = '<p>Cacau 100%</p>';
document.getElementById('preco').innerHTML = '<p>R$: 79,90</p>';
document.getElementById('estoque').innerHTML = '<p>900 un.</p>';
document.getElementById('validade').innerHTML = '<p>10/2024</p>';


//Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, 
//calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo):

var temperaturaFahrenheit = 212;
var temperaturaCelsius = (temperaturaFahrenheit - 32.0) / 1.8;
console.log(temperaturaCelsius);


//Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
//Calcular e escrever o valor do novo salário. 

var salarioMensalAtual = 1432.00;
var percentualReajuste = 10;

var novoSalario = salarioMensalAtual + (salarioMensalAtual / 100) * percentualReajuste;
console.log(novoSalario);


//O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de
// uma pessoa adulta. A fórmula é IMC = peso / ( altura )2 
//Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com as informações abaixo:

//IMC em adultos Condição 
//Abaixo de 18,5 Abaixo do peso 
//Entre 18,5 e 25 Peso normal 
//Acima de 25 e 30 Acima do peso 
//Acima de 30 obeso 


var peso = 58;
var altura = 1.68;

var imc = peso / (altura * altura);

if(imc < 18.5){
    console.log('Abaixo do peso.');
}else if(imc >= 18.5 && imc <= 25.0){
    console.log('Peso normal.');
}else if(imc > 25.0 && imc <= 30.0){
    console.log('Acima do peso.');
}else{
    console.log('Obeso.');
}