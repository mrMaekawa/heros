# HEROS
Marcelo Maekawa

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

![Preview](https://heros-vert.vercel.app/images/thumbnail.png)
https://heros-vert.vercel.app/

## Sobre o projeto:

### DoD:
Ter uma lp, que exiba uma busca pelo nome de algum herói ou vilão das histórias em quadrinhos, e se o mesmo for encontrado, exibir uma listagem com os personagens disponíveis e um modal com as informações completas dele quando clicado.

## Instalação Local:

    docker-compose up -d

## CI/CD
Em todo push aplicado na branch Master aciona um trigger para o deploy em produção na vercel.

**https://heros-vert.vercel.app/**

### API REST:
https://superheroapi.com/ 

### Rules, Tips & Wishlist:
- Versionado e com Semântica (Conventional Commits)
- Clean Code, Atomic Commits e TDD
- Atomic Design
- Virtualizado e Contêinerizado (Docker)
- ReactJs (CRA - Create React App)
- Typescript
- Redux Libs 
- JavaScript Standard Style (StandardJS)
- Preprocessar o CSS (SCSS)

## Comentários para o avaliador
Eu comecei esse projeto usando um boilerplate da ARc, que apesar de acelerar muito o processo inicial, rapidamente se mostrou um pouco 'sujo'. Como eu não queria ser 'mal interpretado' por acabar por deixar escapar alguma das config bem necessárias que o boilletrplate aplica, mas que estão fora do escopo desse teste, e que não seriam relamente utilizadas, eu tomei a liberdade de dar um passo atras e começar do zero, seguindo o roadmap abaixo.

## Highlights
No estado atual do projeto, consegui incluir os seguintes destaques: 
- Ficou 100% Responsivo, utilizando MediaQuerys e a unidade de medida VW, que tornou o layout 'proporcional' possível.
- Opção de troca de tema, com um Dark Mode Switch que persevera a escolha, salvando a opção no localStorage.

### RoadMap:
- Versionamento (git)
- Bootstrapping com CRA (create-react-app)
- Sass/Scss
- Typescript
- StandardJS
- Husky
- StandardJS
- Redux
- Styled Components
- Docker

![Herói](https://heros-vert.vercel.app/images/icon.png)
