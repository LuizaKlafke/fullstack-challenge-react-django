# Objetivo

Esse repositório tem como função o desenvolvimento de um aplicativo web que calcula o menor numero real duodígito múltiplo de um valor informado pelo usuário. Um valor duodígito é aqueçe cujo seus algarismos têm no máximo 2 números distintos. 

# Configuração do ambiente

Você precisará dos seguintes programas:

- [Ubuntu](https://ubuntu.com/download/)
- [ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
- [Oh My Zsh](https://ohmyz.sh/)
- [Pyenv](https://github.com/pyenv/pyenv)
- [Poetry](https://python-poetry.org/)
- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)

# Utilização do programa

## Configuração do backend

### Iniciando o Poetry

Primeiramente, acesse o `backend` do projeto e inicie o Poetry.

```sh
poetry init -n
poetry shell
```

### Iniciando o Django

Adicione o Django como dependência do projeto utilizando o Poetry. 

```sh
poetry add django
```
Antes de prosseguir, o Django precisa criar as tabelas no banco de dados para representar o modelo desenvolvido. Para isso, rode os seguintes comandos.

```sh
./manage.py makemigrations
./manage.py migrate
```

### Realizando o CRUD

Para realizar requisições ao modelo desenvolvido, é necessário implementar um CRUD. Adicione a biblioteca `djangorestframework` ao projeto.

```sh
poetry add djangorestframework
```

### Adicionando o Swagger

O Swagger fornece uma UI para interação com a API. Adicione ele ao projeto utilizando o comando abaixo.

```sh
poetry add drf-yasg
```

### Habilitando o CORS

Por motivos de segurança, navegadores restringem requisições cross-origin HTTP iniciadas por scripts. Dessa forma, habilite CORS no Django com a seguinte linha de código.

```sh
pip install django-cors-headers
```

### Acessando a API

Após realizar todos os passos acima, rode o back-end utilizando o comando abaixo.

```sh
./manage.py runserver
```

Finalmente, basta acessar o seguinte endereço para visualizar sua API através do Swagger UI. Manter porta rodando no terminal durante utilização do aplicativo.

```
localhost:8000/swagger
```

## Configuração do frontend

### Instalando axios

Acesse o `frontend` do projeto. Para realizar a conexão do frontend com o backend, é necessário instalar o axios, um cliente HTTP para fazer requisições.

```bash
npm install axios --save
```

### Executando o aplicativo

Para executar o front-end do aplicativo, utilize o comando:

```bash
yarn dev
```

Acesse o URL `localhost:3000` para visualizar a aplicação.  Manter porta rodando no terminal durante utilização do aplicativo.

# Explicando as tecnologias utilizadas

Além das bibliotecas citadas acima e estilizações em CSS, os seguintes frameworks e recursos foram utilizadas:

- [React.js](https://pt-br.reactjs.org/)
- [Django](https://www.djangoproject.com/)
- [Javascript](https://www.javascript.com/)
- [Python](https://www.python.org/)

# Pendências do projeto

Por conta do prazo do desafio, algumas funcionalidades não foram totalmente desenvolvidas até o dia de entrega do programa. Ficou pendente:

- Páginas extras de Histórico e sobre o desenvolvedor;
- Consumo da função de cálculo do duodígito na API e devolução do dado na tela.
