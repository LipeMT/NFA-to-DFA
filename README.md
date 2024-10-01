Aqui está um exemplo de README para o seu projeto:

---

# Conversor de NFA para DFA

Este projeto implementa a conversão de um autômato finito não-determinístico (NFA) para um autômato finito determinístico (DFA) em JavaScript. O código lê arquivos JSON de entrada que representam NFAs, converte-os para DFAs e salva o resultado em arquivos de saída JSON.

## Estrutura do Projeto

- `nfaToDfa.js`: Script principal que contém as funções para conversão do NFA para DFA e grava o resultado em arquivos JSON.
- `util.js`: Módulo auxiliar que contém funções para operações de conjuntos (conjuntoDasPartes, uniaoConjuntos, intersecaoConjuntos).
- `input1.json`: Arquivo de entrada que contém a definição do primeiro NFA.
- `input2.json`: Arquivo de entrada que contém a definição do segundo NFA.
- `output1.json`: Arquivo de saída que contém o DFA resultante da conversão do primeiro NFA.
- `output2.json`: Arquivo de saída que contém o DFA resultante da conversão do segundo NFA.

## Pré-requisitos

Para executar este projeto, você precisará do [Node.js](https://nodejs.org/) instalado em seu ambiente de desenvolvimento.

## Como Executar

1. Clone o repositório ou faça download dos arquivos do projeto.
2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-projeto
   ```
3. Execute o seguinte comando para rodar o script de conversão:
   ```bash
   node --no-warnings ./nfaToDfa.js
   ```

Esse comando irá processar os arquivos de entrada `input1.json` e `input2.json`, converter os NFAs para DFAs, e gerar os arquivos de saída `output1.json` e `output2.json`.

## Explicação do Código

O script principal segue os seguintes passos:

1. **Criar Combinações de Estados**: Usa a função `conjuntoDasPartes` para gerar todos os subconjuntos dos estados do NFA.
2. **Definir Transições**: A função `definirTransicoes` cria as transições para os estados combinados no DFA.
3. **Definir Estados Finais**: A função `definirEstadosFinais` ajusta os estados finais no DFA com base nos estados finais do NFA.
4. **Encontrar Estados Acessíveis**: A função `encontrarEstadosAcessiveis` filtra apenas os estados que podem ser alcançados a partir do estado inicial.
5. **Salvar o Resultado**: A função `gerarJsonDFA` grava o DFA gerado em um arquivo JSON.

## Arquivos JSON

### Estrutura de entrada (input1.json e input2.json)
Os arquivos de entrada devem conter os seguintes campos:

- `state`: Lista de estados do NFA.
- `initial_state`: Estado inicial do NFA.
- `end_state`: Lista de estados finais do NFA.
- `transition`: Objeto que mapeia as transições de cada estado para os possíveis estados de destino com base nas entradas.

### Estrutura de saída (output1.json e output2.json)
Os arquivos de saída conterão a estrutura convertida para DFA com os mesmos campos, mas representando um autômato determinístico.

## Exemplo de Uso

Depois de rodar o comando `node --no-warnings ./nfaToDfa.js`, dois arquivos serão gerados:

- `output1.json` (representando o DFA convertido do `input1.json`).
- `output2.json` (representando o DFA convertido do `input2.json`).

---

## Licença

Este projeto está licenciado sob a licença MIT.

---

Sinta-se à vontade para modificar conforme a necessidade!
