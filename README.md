# Conteúdo de JavaScript do BOOTCAMP Carrefour Web Developer da DIO

## Coleções:

Foram abordados os concitos de Object Map e Object Set itens abaixo junto com o exercicio onde a resolução se encontra na pasta "colecoes"

### Ecercício

    Atividade 1: Maps
    Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
        - Crie uma função getAdmins que recebe um Map;
        - Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
        -Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.

    Atividade 2: Sets
    Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.


## Debugging e Error Handling:

Foram abordados os seguintes itens abaixo junto com o exercicio onde a resolução se encontra no arquivo "debug-error.js"

Throw
Try/Cath
Finaly
Objeto Error

### Exercicio

    Crie uma função que recebe um array e um número
    Realize as seguintes validações
        Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
        Se o array não for do tipo 'object', lance um erro do tipo TypeError
        Se o número não for do tipo 'number', lance um erro do tipo TypeError
        Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    Utilize a declaração try...catch
    Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

## JavaScript Assíncrono

Foram abordados conceitos de Promises, Aync/Awaitch, APIs e Fetch junto com o exercicio onde a resolução se encontra dentro da pasta "javascript-assincrono"

### Exercicio

    Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.
        - Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
        - Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão! 


## Orientação a objetos

Foram abordados conceitos de Protótipos e Classes junto com o exercicio onde a resolução se encontra dentro da pasta "orientacao-a-objetos"

### Exercicio

    Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.
        - Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
        - Dentro de ContaBancaria, construa o getter e o setter de saldo;
        - Dentro de ContaBancaria, crie os métodos sacar e depositar;
        - Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
        - Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
        - Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
        - Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
        - Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
        - Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.


        *Obsvervação: Executar os seguintes comandos abaixo no console do navegador para ver os resultados*

        Comando - const minhaConta = new ContaCorrente(1, 234, true)
        Retorno - undefined
        Comando - minhaConta.saldo
        Retorno - 0
        Comando - minhaConta.depositar(1000)
        Retorno - 1000
        Comando - minhaConta.sacar(500)
        Retorno - 500
        Comando - minhaConta.sacar(600)
        Retorno - 'Operação negada'

## Map, Filter e Reduce

Foram abordados conceitos da implantação dos métodos Map, Filter e Reduce junto com o exercicio onde a resolução se encontra dentro da pasta "orientacao-a-objetos"

### Execícios

        Map:
        - Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

        Filter:
        - Filtre e retorne todos os números pares de um array.

        Reduce:
        - Some todos os números de um array
        - Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.


## DOM

Foram abordados conceitos do DOM e seus métodos junto com o exercicio onde a resolução se encontra dentro da pasta "orientacao-a-objetos"

### Execícios

    Atividade: Light Mode/Dark Mode
        - Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
        - Copie o HTML e o CSS deste repositório
        - Crie um arquivo chamado scripts.js na sua pasta assets/js
        - Selecione os elementos: h1, button, footer e body
        - Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original