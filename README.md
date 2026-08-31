# loja-fakestore — Entrega Parcial (31/08) + bônus da API

Projeto Expo (React Native + TypeScript) com a tela da vitrine de produtos, já consumindo a Fake Store API de verdade (bônus de +0,4 do PDF).

## Como rodar

```bash
cd loja-fakestore
npm install
npx expo start
```

Escaneie o QR code com o app Expo Go, ou aperte `a` (Android) / `i` (iOS) / `w` (web) no terminal. **Precisa de internet no celular/emulador**, já que a tela busca os produtos na API.

> O zip não inclui `node_modules` (por isso é pequeno) — o `npm install` baixa tudo na hora.

## Estrutura

```
App.tsx
src/
  screens/
    store/
      index.tsx   -> componente Store (tela "Loja")
      styles.ts   -> styled-components da tela
```

## O que está implementado

- Busca de produtos e categorias direto da API (`GET /products` e `GET /products/categories`), sem lista fixa no código.
- Três estados tratados e visíveis: carregando (spinner), erro (mensagem + botão "Tentar novamente") e vazio (quando busca/filtro não retorna nada).
- Header com título "Loja", campo de busca (filtra por título sobre os dados já carregados) e chips de categoria (vindos da API, com "Todos" fixo na frente).
- Grade de produtos em 2 colunas (`FlatList`) com imagem, título, preço e avaliação.
- `BottomBar` com Início / Buscar / Carrinho / Perfil (visual apenas, sem navegação — isso é escopo da entrega final).

Validado com `npx tsc --noEmit` (sem erros) e `npx expo export` (o Metro empacota sem erro). O fetch em si só roda de verdade no seu dispositivo/emulador, com internet.

## O que fica para a entrega final (14/09)

- Telas de detalhe do produto e carrinho.
- Troca de tela controlada por estado no arquivo principal.
- Link do repositório no GitHub.
