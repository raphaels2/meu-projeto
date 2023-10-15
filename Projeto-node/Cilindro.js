const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o raio do cilindro: ', (raio) => {
    rl.question('Informe a altura do cilindro: ', (altura) => {
        // Converte as entradas para números
        raio = parseFloat(raio);
        altura = parseFloat(altura);

        // Verifica se as entradas são números válidos e raio e altura maiores que zero
        if (!isNaN(raio) && !isNaN(altura) && raio > 0 && altura > 0) {
            // Calcula a área superficial do cilindro
            const area = 2 * math.pi * raio * (raio + altura);
            console.log(`A área superficial do cilindro é: ${area.toFixed(2)}`);
        } else {
            console.log('Por favor, insira valores válidos (raio e altura maiores que zero).');
        }

        rl.close();
    });
});
