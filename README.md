# Teste Dinheirow - Engenheiro de Software

Olá Dev! Tudo bem?

Nós estamos sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente bom senso!

Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.

Vamos ao teste!

## Desafio Pokémon Go!

Sua missão é importar os dados do Pokemon Go, que estão no excel, e criar uma API usando NodeJS para que possamos consumir estes dados de maneira prática, rápida e automatizada.

Esta API deverá seguir o mínimo de práticas RESTful e conter listagens, busca, paginação e filtros. Fique à vontade para decidir quais filtros são mais interessantes.

## Tecnologias Obrigatórias:

- NodeJS
- Algum banco de dados, por exemplo, MySQL, Postgres, etc...
- Git
- Express
- ORM

## Requisitos:

- Modelagem de dados
- Testes (Ex: Jest, etc.)
- Conceitos de API RESTful
- Alguma Arquitetura de Software (Ex: Arquitetura Limpa)
- Conceitos SOLID

## Diferencial

- Padrões de Projeto (Design Patterns)
- Docker
- Autenticação
- Alguma estratégia de cache

## Por onde começo?

Primeiramente, você pode fazer um fork desse repositório aqui, para sua conta do Github, depois disso crie uma branch nova com o seu nome (ex: nome_sobrenome), para podermos indentificá-lo.

Após terminar o desafio, você pode solicitar um pull request para a branch master do nosso repositório. Vamos receber e fazer a avaliação de todos.

## Só isso?

Só! Mas se quiser fazer a diferença, tente implementar um pouco de testes, utilizar docker, algum ORM, autenticação de usuário, conceitos de segurança, padrões de pojeto e SOLID para execução do projeto.

Boa sorte! :)

# Dinheirow

## Índice

- [Instalação](#instalação)
- [Teste Unitário](#teste-unitário)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Teste da Aplicação](#teste-da-aplicação)
- [Observações](#observações)
- [Itens Pendentes](#todo)

## Instalação

**Instalar repositório:**

- Ter docker e docker compose instalado

1. Acessar o diretório do projeto (SerasaApp)

2. Executar o comando de instalação

```bash
$ npm install ou yarn (caso tenha instalado)
```

3. Executar o comando para subir a aplicação no docker

```bash
$ docker compose up -d
```

4. Após executar o comando acima, rodar as migrations para criação das tabelas

```bash
$ yarn typeorm migration:run ou npm run typeorm migration:run
```

## Teste unitário

**Após instalar as dependencias do projeto:**

1. Para rodar os testes unitários, após a instalação dos pacotes rodar o seguinte comando:

```bash
$ yarn test ou npm run test
```

6.1 Acessar coverage\lcov-report\index.html para verificar a cobertura

## Arquitetura do Projeto

```
  Projeto desenvolvido em Typescript.
  Foi criado utilizando a Arquitetura SOLID, DOCKER e DOCKER COMPOSE

  - Bibliotecas utilizadas
  . Express
  . TypeOrm
  . Tsyringe
  . Multer
  . Jest
  . Xlsx
  . etc

  - Banco de dados utilizado
  . Postgres

```

## Teste da Aplicação

**Para executar os testes da aplicação:**

1. Caso entenda necessário, pode ser feita a importação da collection para faciliar os testes:

```
test-backend.postman_collection.json
```

Endpoints da aplicação:

**Pokemons:**

**Importar Lista de Pokemons**

- Esse método comtempla importar uma lista de arquivo .xlsx.

```bash
curl --location 'http://localhost:3000/import' \
--form 'file=@"/C:/Users/N2140/Desktop/Pokemon Go.xlsx"'
```

**Criar Um Novo Pokemon**

- Esse método contempla a possibilidade de cadastrar um novo pokemon, respeitando a base já importada.

- Create Pokemon -> POST

```bash
curl --location 'http://localhost:3000/pokemons' \
--header 'Content-Type: application/json' \
--data '{
  "row": 1,
  "name": "Bulbasaur",
  "pokedexNumber": 1,
  "imgName": "bulbasaur.png",
  "generation": 1,
  "evolutionStage": 1,
  "evolved": 0,
  "familyId": 1,
  "crossGen": 0,
  "type1": "Grass",
  "type2": "Poison",
  "weather1": "Sunny",
  "weather2": "Cloudy",
  "statTotal": 318,
  "atk": 49,
  "def": 49,
  "sta": 45,
  "legendary": 0,
  "acquireable": 1,
  "spawns": 1,
  "regional": 0,
  "raidable": 1,
  "hatchable": 1,
  "shiny": 0,
  "nest": 0,
  "new": 1,
  "notGettable": 0,
  "futureEvolve": 1,
  "cp40": 981,
  "cp39": 870
}
'
```

- Esse método contempla a possibilidade de Filtrar por Type1 e Type2, EvolutionStage e FamilyId.

- Esse método também contempla paginação.

- Get All Pokemons -> GET

```bash
curl --location 'http://localhost:3000/pokemons?familyId=44&evolutionStage=2&type1=grass&type2=poison' \
--header 'take: 2' \
--header 'skip: 0'
```

- Get By Id Pokemon - > Get

```bash
curl --location 'http://localhost:3000/pokemons/1'
```

## Observações

Consegui colocar em prática os principais conceitos que aprendi ao longo dos
meus estudos / experiência com essas tecnologias, além do desafio de ter criado tudo do "zero".
Não fiz a publicação do projeto em ambiente cloud por ter expirado minha conta (versão gratuita) da AWS, porém,
possuo experiência com arquitetura cloud, serverless, api gateway, criação de lambdas etc.

Ficaram faltando algumas melhorias e refatorações no código, considerando algumas regras de negócio:

## TODO

```
- Método Update de um pokemon.
- Método Delete de um pokemon.
- Colocar campo is_active, para delete logico, sem romação do mesmo da pokedex, pois por mais que não tenha mais o pokemon, ele ficará salvo na pokedex(base) daquele jogador.
- Encontrar melhoria para otimizar tempo de import.
- Gravação em massa por Bulk na importação.


```

