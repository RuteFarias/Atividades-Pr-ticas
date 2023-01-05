function clicou(){
    alert('O botão foi clicado');
}


function maior(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);

    let result = '';

    if( num1 > num2 && num1 > num3){
        result = num1;
    }else if(num2 > num1 && num2 > num3){
        result = num2;
    }else{
        result = num3;
    }

    alert(result);

    
}
function maiorIdade(){
    let idade = parseInt(document.getElementById('idade').value);
    let msg = '';

    if(idade <= 18){
        msg = 'Menor de idade';

    }else{
        msg = 'Maior de idade';
    }

    alert(msg);
}