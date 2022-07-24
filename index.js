import readLine from 'readline-sync';

let valorDivida = Number(readLine.question('Informe o valor da dívida: '));

if(valorDivida > 0){
    let diasAtraso = Number(readLine.question('Informe quantos dias passaram do vencimento: '));
    let juros = 0;
    let dividaAtual = 0;
    if(diasAtraso > 0){
        if(diasAtraso < 15){
            juros = 0.05;
        }
        else{
            juros = 0.10;

        }

        dividaAtual = valorDivida + (valorDivida * juros);
        console.log(`Valor original da dívida: R$ ${valorDivida.toFixed(2)}`);
        console.log(`Dias atrasados: ${diasAtraso}`);
        console.log(`Taxa de juros: ${juros * 100}%`);
        console.log(`Valor total com juros: R$ ${dividaAtual.toFixed(2)}`)
    }
    else{
        console.log("Sua dívida não está em atraso.")
    }
    
}
else{
    console.log("informe um valor maior que zero!")
}