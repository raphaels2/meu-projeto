const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o raio da base do cone: ', (raio) => {
    rl.question('Informe a altura do cone: ', (altura) => {
        // Converte as entradas para números
        raio = parseFloat(raio);
        altura = parseFloat(altura);

        // Verifica se as entradas são números válidos e raio e altura maiores que zero
        if (!isNaN(raio) && !isNaN(altura) && raio > 0 && altura > 0) {
            // Calcula a geratriz do cone
            const g = math.sqrt(raio * raio + altura * altura);

            // Calcula a área superficial do cone
            const area = math.pi * raio * (raio + g);
            console.log(`A área superficial do cone é: ${area.toFixed(2)}`);
        } else {
            console.log('Por favor, insira valores válidos (raio e altura maiores que zero).');
        }

        rl.close();
    });
});
