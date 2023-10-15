const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o raio da esfera: ', (raio) => {
    // Converte a entrada para um número
    raio = parseFloat(raio);

    // Verifica se a entrada é um número válido e raio maior que zero
    if (!isNaN(raio) && raio > 0) {
        // Calcula a área superficial da esfera
        const area = 4 * math.pi * raio * raio;
        console.log(`A área superficial da esfera é: ${area.toFixed(2)}`);
    } else {
        console.log('Por favor, insira um valor válido (raio maior que zero).');
    }

    rl.close();
});
