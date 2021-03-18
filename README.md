## Atlas API

Atlas API é uma API que permite a criação, listagem e alteração de um usuário, salvando todos os dados em um array em tempo de execução.

## Requisitos
* Node

Como instalar o node: https://nodejs.org/en/

* Yarn

Como instalar o yarn: https://yarnpkg.com/lang/en/docs/install/

## Instalação

Primeiro clone o projeto na sua máquina por meio do comando:

~~~git
$ git clone https://github.com/silvavinicyus/ignite-chapter2-desafio1.git
~~~

Depois de clonar o projeto instale as dependências e packages utilizados no projeto por meio do comando. **o comando precisa ser dado na raiz do projeto**:

~~~git
$ yarn
~~~

## Rodando o projeto

Para iniciar a API basta executar o comando:

~~~git
$ yarn dev
~~~

## Arquitetura do projeto:

O projeto foi baseado nos conceitos de Arquitetura limpa, e no SOLID proposto por Robert C. Martin (ou Uncle Bob).

## Rodando os testes:

Para rodar os testes feitos para a aplicação basta executar o comando:

~~~git
$ yarn test
~~~

## Documentação

A documentação do projeto foi feita por meio do pacote Swagger UI, para ter acesso a ela basta executar o servidor **yarn dev** e verificar o seguinte endereço no seu browser:

~~~git
$ http://localhost:3333/api-docs
~~~

## Pacotes Usados no projeto:

* Express
* Typescript
* uuid
* Swagger-ui-express
* jest

## A próxima milha:

O próximo passo na aplicação será a implementação do banco de dados **Postgres**, onde serão salvas todas as informações dos usuários.

## Contato

Caso tenha ficado alguma dúvida fique livre para entrar em contato comigo por meio do meu email e linkedin:

* Email: vinicyus346@gmail.com
* Linkedin: https://www.linkedin.com/in/vinicyus-silva/

