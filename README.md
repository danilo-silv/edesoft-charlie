# CRUD de usuários faker

> _`Aplicação que contém as operações de um crud de usuários faker`_ <br />
> Está aplicação tem como objetivo apresentar para o usuário uma lista de usuários, um formulário para criar e editar um usuário e uma função para excluir o usuário.

### API externa

- Documentação: https://fakestoreapi.com/docs
- Codigo fonte: https://github.com/keikaavousi/fake-store-api

### Tecnologia

- React
- Typescript
- Redux
- Redux toolkit
- Axios
- Lodash
- Yup
- ESlint
- PostCSS / SASS / tailwind / Styled-Components
- Prettier
- Husky

### Pré-requisito

`NPM`
`NODE`

## Variavéis de ambiente

Defina as variáveis ​​do aplicativo de acordo com o arquivo [`.env.sample`](.env.sample) como modelo

```
REACT_APP_API_BASE_URL=https://fakestoreapi.com
REACT_APP_API_HEADERS_CONTENT_TYPE=application/json

```

## Inicialização

Se você estiver usando o [`nvm - Node version manager`](https://github.com/nvm-sh/nvm), você pode rodar:

```bash

$ git clone https://github.com/danilo-silv/edesoft-charlie.git
$ cd edesoft-charlie

$ nvm install
$ nvm use

Found '/(...)/edesoft-charlie/.nvmrc' with version <v16.14.2>
Now using node v16.14.2

$ node -v
v16.14.2
$ yarn -v
1.22.17
```

Agora, instale as dependências e rode a aplicação

```bash
yarn && yarn dev
```

A aplicação vai abrir na automaticamente na rota:

```bash
http://localhost:3000/
```

```
### Autor

- Danilo Silva e Silva

### Visualização

Projeto hospedado no keroku, clique no link para visulização: [Consulta Tabela Fipe](https://consulta-tabela-fipe.herokuapp.com)
```
