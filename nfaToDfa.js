import { conjuntoDasPartes, uniaoConjuntos, intersecaoConjuntos } from './util.js';
import input1 from './input1.json' assert { type: 'json' };
import input2 from './input2.json' assert { type: 'json' };
import fs from 'fs';

function criarCombinacoes(dfa) {
    dfa.state = conjuntoDasPartes(dfa.state);
}

function definirTransicoes(dfa) {
    let { transition } = dfa;
    dfa.transition = {}

    let conjuntoEntradas0 = []
    let conjuntoEntradas1 = []

    for (let subconjunto of dfa.state) {
        for (let i = 0; i < subconjunto.length; i++) {
            conjuntoEntradas0 = uniaoConjuntos(conjuntoEntradas0, transition[subconjunto[i]]['0'])
            conjuntoEntradas1 = uniaoConjuntos(conjuntoEntradas1, transition[subconjunto[i]]['1'])
        }
        dfa.transition[subconjunto] = { '0': conjuntoEntradas0, '1': conjuntoEntradas1 }
        conjuntoEntradas0 = []
        conjuntoEntradas1 = []
    }
}

function definirEstadosFinais(dfa) {
    let { end_state } = dfa
    dfa.end_state = []

    for (let element in dfa.transition) {
        for (let finalElement of end_state) {
            if (element.includes(finalElement)) {
                dfa.end_state.push(element)
            }
        }
    }
}

function encontrarEstadosAcessiveis(dfa) {
    let { state, initial_state, transition } = dfa
    let acessiveis = [initial_state]

    for (let i = 0; i < state.length; i++) {
        acessiveis.forEach(element => {
            let estado0 = transition[element][0].join(',');
            if (!acessiveis.includes(estado0)) {
                acessiveis.push(estado0)
            }

            let estado1 = transition[element][1].join(',');
            if (!acessiveis.includes(estado1)) {
                acessiveis.push(estado1)
            }
        })
    }
    dfa.transition = {}
    for (let estado in transition) {
        for (let estadoAcessivel of acessiveis) {
            if (estado == estadoAcessivel) {
                dfa.transition[estado] = transition[estado]
            }
        }
    }
    dfa.state = acessiveis;
    dfa.end_state = intersecaoConjuntos(dfa.state, dfa.end_state)
}

function converterNfaParaDfa(nfa) {
    criarCombinacoes(nfa)
    definirTransicoes(nfa)
    definirEstadosFinais(nfa)
    encontrarEstadosAcessiveis(nfa)
    return nfa;
}

function gerarJsonDFA(dfa, nomeArquivo) {

    let jsonOutput = JSON.stringify(dfa, null, 2);

    fs.writeFile(nomeArquivo, jsonOutput, (err) => {
        if (err) {
            console.error('Erro ao escrever o arquivo:', err);
        } else {
            console.log(`Arquivo ${nomeArquivo} criado com sucesso!`);
        }
    });
}

let dfa1 = converterNfaParaDfa(input1);
gerarJsonDFA(dfa1, 'output1.json');

let dfa2 = converterNfaParaDfa(input2);
gerarJsonDFA(dfa2, 'output2.json');
