const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o lado do quadrado: ', (lado) => {
    
    lado = parseFloat(lado);


    if (!isNaN(lado) && lado > 0) {
    
        const area = lado * lado;
        console.log(`A área do quadrado é: ${area}`);
    } else {
        console.log('Por favor, insira um valor válido maior que zero.');
    }

    rl.close();
});
