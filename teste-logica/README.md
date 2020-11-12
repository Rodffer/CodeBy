# Teste CodeBy | Teste de Lógica
<p align="center">
  <br>
  <br>
  <img alt="year" src="https://img.shields.io/badge/year-2020-blueviolet">
  <img alt="made_by" src="https://img.shields.io/badge/made%20by-Rodffer-blueviolet">
  <img alt="license" src="https://img.shields.io/badge/licence-MIT-blueviolet">
</p>
- [Teste CodeBy](#teste-codeby)
  - [Descrição](#descrição)
  - [Como funciona este repositório?](#como-funciona-este-repositório)
  - [Problema](#problema)
  - [Como testar?](#como-testar)

## Descrição
Esse repositório possui a resolução do teste da CodeBy para avaliar as habilidades de lógica.

## Como funciona este repositório?
No repositório em questão, existe um teste criado com Jest que deve ser rodado para verificar se a estrutura condiz com o que buscamos. Seu código deve ser colocado no arquivo [productStructure.js](./productStructure.js). Sinta-se livre para estruturar da forma que preferir, desde que o retorno seja criado de acordo com resultado que esperamos na seção seguinte, levando em consideração que no seu código o retorno deve ser dinámico, baseado no array inicial fornecido no arquivo em questão.

## Problema
Nosso cliente cadastrou na plataforma as variantes dos produtos sem especificação. E pediu para criarmos um seletor de variantes na página de produto. Mas a seguinte estrutura de dados não funciona bem para o desenvolvimento de um seletor de variantes.

```javascript
[
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]
```

Precisamos que essa estrutura seja convertida para o seguinte formato.

```javascript
{ 
  "preto": { 
    "PP": 1, 
    "M": 1, 
    "G": 1, 
    "GG": 2 
  }, 
  "branco": { 
    "PP": 1, 
    "G": 1 
  }, 
  "vermelho": { 
    "M": 1 
  }, 
  "azul": { 
    "XG": 3, 
    "P": 1 
  }
}
```

## Como testar?
Para testar seu código, basta apenas rodar o seguinte comando:
```bash
yarn test
```

O resultado deve ser semelhante ao seguinte:
```bash
yarn run v1.22.4
$ jest
 PASS  ./index.test.js
  ✓ test products structure (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.425 s, estimated 1 s
Ran all test suites.
Done in 0.84s.
```

<p>Feito com <g-emoji class="g-emoji" alias="purple_heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f49c.png">💜</g-emoji> by Rodffer <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png">👋</g-emoji></p>