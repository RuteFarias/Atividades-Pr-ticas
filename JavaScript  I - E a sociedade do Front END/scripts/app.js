//Elabore um script que leia dois números e imprima  o resultado das operações aritméticas soma, 
//produto, divisão e resto da divisão (%) entre esses números.


// var num1 = 100;
// var num2 = 50;

// var soma = num1 + num2;
// var produto = num1 * num2;
// var divisao = num1 / num2;
// var mod = num1 % num2;

// console.log(soma, produto, divisao, mod);


// //Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

// var ladoQuadrado = 5;

// var areaQuadrado = ladoQuadrado * ladoQuadrado;
// var perimetroQuadrado = ladoQuadrado * 4;

// console.log(areaQuadrado, perimetroQuadrado);


// //Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), 
// // leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius

// var temperaturaFahrenheit = 212;
// var temperaturaCelsius = (temperaturaFahrenheit - 32.0) / 1.8;
// console.log(temperaturaCelsius);


// // Faça um algoritmo que transforme a velocidade fornecida em m/s pelo usuário para Km/h. Para tal, multiplique o valor em m/s por 3,6.

// var velocidadeMs = 100;

// var velocidadeKm = velocidadeMs * 3.6;
// console.log(velocidadeKm);


//Crie um object array com os valores de um veículo, sendo as chaves são marca, modelo, cor, ano, valor, 
// renavam, placa, cada um das chaves devem possuir valores. Exiba através da body do HTML as informações do veículo:

//Veiculo
//marca: X
//modelo: x
//cor: x
//ano: x
//renavam: x
//placa: x


var veiculo = {
    marca: 'Renault',
    modelo: 'Kwid',
    cor: 'Branco',
    ano: '2020',
    valor: 'R$: 50.000,00',
    renavam: '12345678910',
    placa: 'PBS-0879'
}


document.getElementById('marca').innerHTML = '<p>Marca: </p>' + veiculo.marca;
document.getElementById('modelo').innerHTML = '<p>Modelo: </p>' + veiculo.modelo;
document.getElementById('cor').innerHTML = '<p>Cor: </p>' + veiculo.cor;
document.getElementById('ano').innerHTML = '<p>Ano: </p>' + veiculo.ano;
document.getElementById('valor').innerHTML = '<p>Valor: </p>' + veiculo.valor;
document.getElementById('renavam').innerHTML = '<p>Renavam: </p>' + veiculo.renavam;
document.getElementById('placa').innerHTML = '<p>Placa: </p>' + veiculo.placa;


// //Crie um array com valores de 10 alunos de sua turma, exiba os valores existentes nas posições: 0,5,2,6,9 e 7.

// var arr = ['Bruno', 'Leandro', 'Jana', 'Emilly', 'Marjory', 'Elize', 'Beta', 'Paty', 'Denise', 'Ramiro'];

// console.log(arr[0], arr[5], arr[2], arr[6], arr[9], arr[7]);


// //Crie um array com 5 posições e em cada posição, um object array com as seguintes chave/valor 
// //(id, nome, telefone, email). Exiba o array via console. e acesse as informações do object na posição 3.


// var array = [
//     {
//         id: 001,
//         nome: 'Farias',
//         telefone: '7654-9876',
//         email: 'rutefarias@gmail.com'

//     },

//     {
//         id: 002,
//         nome: 'Almeida',
//         telefone: '6578-9876',
//         email: 'preta.almeida@gmail.com'
//     },

//     {
//         id: 002,
//         nome: 'Almeida',
//         telefone: '6578-9876',
//         email: 'preta.almeida@gmail.com'
//     },

//     {
//         id: 003,
//         nome: 'Albuquerque',
//         telefone: '6578-8764',
//         email: 'albuquerque@gmail.com'
//     },

//     {
//         id: 004,
//         nome: 'Magalhães',
//         telefone: '6578-5436',
//         email: 'magal@gmail.com'
//     }

// ];

// console.log(array[3]);


// //8- Um novo modelo de carro da Tesal, super econômico foi lançado.
// //Ele faz 26km com 1 litro de combustível.
// //Cada litro de combustível custa R$ 6,29.

// //Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível 
// //ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.


// var dinheiro = prompt('Informe o valor: ');
// var precoLitro = 6.29;

// var litros = dinheiro / precoLitro;
// var kms = litros * 26;

// console.log('Você pode comprar ' + litros + 'litros.');
// console.log('E o carro consegue fazer ' + kms);
