# 🤠 Chuck Norris Jokes App

Este é um pequeno aplicativo React que consome a [API pública de piadas do Chuck Norris](https://api.chucknorris.io/) e exibe piadas aleatórias com um simples clique. O projeto utiliza `axios` para fazer requisições HTTP e `useState`/`useEffect` do React para gerenciamento de estado e efeitos colaterais.

## 📸 Demonstração

<img width="455" alt="image" src="https://github.com/user-attachments/assets/b25d6778-de5a-45e0-bb70-31762a9cd16d" />


## 🚀 Funcionalidades

- 🔁 Busca piadas aleatórias da API do Chuck Norris
- 🧠 Usa React hooks (`useState`, `useEffect`)
- 🖼️ Exibe o icon do Chuck Norris junto com a piada
- 🔘 Botão para carregar uma nova piada
- ⚠️ Tratamento de loading e erros

## 📁 Estrutura do Projeto

```
src/
│
├── components/
│   └── Card.js        # Componente principal que exibe a piada
│   └── Card.css       # Estilo do card
│
├── service/
│   └── api.js         # Instância do axios com baseURL da API
│
├── App.js             # Componente principal do React
└── index.js           # Entrada da aplicação
```

## 🧑‍💻 Tecnologias Usadas

- React
- Axios
- JavaScript
- CSS

1. Clone o repositório:

```bash
git clone https://github.com/niquequirino/chuck-norris.git
cd chuck-norris
```

2. Inicie o projeto:

```bash
npm start
```

A aplicação abrirá em `http://localhost:3000`.

## 🌐 Fonte da API

- [https://api.chucknorris.io](https://api.chucknorris.io)


Feito com ❤️ e risadas pelo Chuck Norris.

