# alocador-front
React Frontend para exibição de dados da API de alocação de caixas em container.
Este projeto serve como Frontend para a API do projeto: https://github.com/jayypluss/alocador-server.
Portanto ambos têm que estar rodando para o funcionamento da aplicação.


### Instalando dependências
Para rodar a aplicação é necessário ter o [npm](https://www.npmjs.com/) e o [nodeJS](https://nodejs.org/en/) (testado na versão v14) instalado.
Sendo assim basta rodar
`npm install`
para instalar as dependências.


### Rodando o projeto

Após instalar as dependências, para rodar o projeto utilize o comando
`npm start`.

### Outras informações 

Por padrão, esta aplicação irá rodar na porta `3000`, e irá apontar para a url `http://localhost:3001` para buscar os dados da API. Essa url pode ser alterada no arquivo https://github.com/jayypluss/alocador-front/blob/main/src/services/api.ts.
