const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o comprimento da base menor: ', (base1) => {
    rl.question('Informe o comprimento da base maior: ', (base2) => {
        rl.question('Informe a altura: ', (altura) => {
            // Converte as entradas para números
            base1 = parseFloat(base1);
            base2 = parseFloat(base2);
            altura = parseFloat(altura);

            // Verifica se as entradas são números válidos e altura maior que zero
            if (!isNaN(base1) && !isNaN(base2) && !isNaN(altura) && altura > 0) {
                // Calcula a área do trapézio
                const area = ((base1 + base2) * altura) / 2;
                console.log(`A área do trapézio é: ${area}`);
            } else {
                console.log('Por favor, insira valores válidos (números maiores que zero) para as bases e a altura.');
            }

            rl.close();
        });
    });
});
