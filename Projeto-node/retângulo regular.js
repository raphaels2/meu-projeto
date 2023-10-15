
function calcularAreaPoligonoIrregular(vertices) {
    const n = vertices.length;
    let area = 0;

    for (let i = 0; i < n; i++) {
        const x1 = vertices[i][0];
        const y1 = vertices[i][1];
        const x2 = vertices[(i + 1) % n][0];
        const y2 = vertices[(i + 1) % n][1];

        area += (x1 * y2 - x2 * y1);
    }

    return Math.abs(area) / 2;
}

const vertices = [
    [0, 0],
    [0, 4],
    [3, 4],
    [5, 2],
    [3, 0]
];

const area = calcularAreaPoligonoIrregular(vertices);
console.log(`A área do polígono irregular é: ${area}`);
