const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a largura do retângulo: ', (largura) => {
    rl.question('Informe a altura do retângulo: ', (altura) => {
    
        largura = parseFloat(largura);
        altura = parseFloat(altura);

       
        if (!isNaN(largura) && !isNaN(altura) && largura > 0 && altura > 0) {
           
            const area = largura * altura;
            console.log(`A área do retângulo é: ${area}`);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero.');
        }

        rl.close();
    });
});
