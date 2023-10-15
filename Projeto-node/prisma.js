const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o comprimento da base do prisma: ', (comprimentoBase) => {
    rl.question('Informe a largura da base do prisma: ', (larguraBase) => {
        rl.question('Informe a altura do prisma: ', (altura) => {
            // Converte as entradas para números
            comprimentoBase = parseFloat(comprimentoBase);
            larguraBase = parseFloat(larguraBase);
            altura = parseFloat(altura);

            // Verifica se as entradas são números válidos e maiores que zero
            if (!isNaN(comprimentoBase) && !isNaN(larguraBase) && !isNaN(altura) &&
                comprimentoBase > 0 && larguraBase > 0 && altura > 0) {
                // Calcula a área total do prisma
                const areaBase = comprimentoBase * larguraBase;
                const perimetroBase = 2 * (comprimentoBase + larguraBase);
                const areaTotal = 2 * areaBase + perimetroBase * altura;
                console.log(`A área total do prisma é: ${areaTotal}`);
            } else {
                console.log('Por favor, insira valores válidos (comprimento, largura e altura maiores que zero).');
            }

            rl.close();
        });
    });
});
