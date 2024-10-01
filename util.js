export function conjuntoDasPartes(arr) {
    let resultado = [[]];
    for (let elemento of arr) {
        let novosSubconjuntos = resultado.map(subconjunto => [...subconjunto, elemento]);
        resultado = [...resultado, ...novosSubconjuntos];
    }
    resultado.sort((a, b) => a.length - b.length);
    return resultado;
}

export function uniaoConjuntos(conjunto1, conjunto2) {
    const uniao = new Set([...conjunto1, ...conjunto2]);
    return [...uniao].sort((a, b) => {
        const numA = parseInt(a.replace('q', ''), 10);
        const numB = parseInt(b.replace('q', ''), 10);
        return numA - numB;
    });
}

export function intersecaoConjuntos(conjuntoA, conjuntoB) {
    const intersecao = [];

    for (let elemento of conjuntoA) {
        if (conjuntoB.includes(elemento)) {
            intersecao.push(elemento);
        }
    }

    return intersecao;
}




