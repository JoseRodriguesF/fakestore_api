# FakeStore E-commerce

Este projeto é um exemplo de aplicação de e-commerce utilizando a API da [FakeStore](https://fakestoreapi.com). Ele permite exibir produtos, visualizar detalhes de cada produto, como preço, descrição, nome e imagem, além de realizar buscas por nome de produtos.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições à API.
- **React Router DOM**: Biblioteca para roteamento em aplicações React.
- **Testing Library**: Conjunto de ferramentas para testar componentes React.
- **CSS**: Estilização da aplicação.

## Funcionalidades

- Exibição de lista de produtos.
- Visualização de detalhes de cada produto.
- Pesquisa por nome de produtos.

## Como Executar o Projeto

Siga os passos abaixo para executar o projeto localmente:

1. Clone o repositório:
    ```sh
    git clone https://github.com/JoseRodriguesF/fakestore_api.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd fakestore_api
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```

O aplicativo será aberto em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- **public/**: Arquivos estáticos públicos.
- **src/**: Código fonte da aplicação.
  - **components/**: Componentes reutilizáveis.
  - **pages/**: Páginas principais da aplicação.
  - **services/**: Serviços para interagir com a API.
  - **App.js**: Componente principal da aplicação.
  - **index.js**: Ponto de entrada da aplicação.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo em modo de desenvolvimento.

### `npm test`

Inicia o executor de testes no modo interativo.

### `npm run build`

Cria a aplicação para produção na pasta `build`. Ela agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

### `npm run eject`

**Nota: esta é uma operação sem retorno. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência única de construção das ferramentas do projeto.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch:
    ```sh
    git checkout -b feature/nova-feature
    ```
3. Faça suas alterações e commit:
    ```sh
    git commit -m 'Adiciona nova feature'
    ```
4. Envie para o repositório remoto:
    ```sh
    git push origin feature/nova-feature
    ```
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Recursos Adicionais

- [Documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Documentação do React](https://reactjs.org/)
