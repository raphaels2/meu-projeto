const readline = require('readline');
const math = require('mathjs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o número de lados do polígono regular: ', (lados) => {
    rl.question('Informe o comprimento de um lado do polígono: ', (comprimentoLado) => {
        // Converte as entradas para números
        lados = parseFloat(lados);
        comprimentoLado = parseFloat(comprimentoLado);

        // Verifica se as entradas são números válidos e lados maior que 2
        if (!isNaN(lados) && !isNaN(comprimentoLado) && lados > 2) {
            // Calcula a área do polígono regular
            const area = (lados * Math.pow(comprimentoLado, 2)) / (4 * Math.tan(Math.PI / lados));
            console.log(`A área do polígono regular é: ${area}`);
        } else {
            console.log('Por favor, insira valores válidos (número de lados maior que 2 e comprimento de lado maior que zero).');
        }

        rl.close();
    });
});
