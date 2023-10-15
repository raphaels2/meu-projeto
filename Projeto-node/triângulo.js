const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a base do triângulo: ', (base) => {
    rl.question('Informe a altura do triângulo: ', (altura) => {
       
        base = parseFloat(base);
        altura = parseFloat(altura);

        // Verifica se as entradas são números válidos
        if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
        
            const area = (base * altura) / 2;
            console.log(`A área do triângulo é: ${area}`);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero.');
        }

        rl.close();
    });
});
