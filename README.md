# Sistema de Reserva de Tickets

## Descrição

O projeto é uma aplicação de reserva de ingressos, realizado na imersão FullCycle 18. O programa é composto por três partes principais: o front-end, feito utilizando o NextJS, o back-end em Golang, e uma API dos parceiros (que simula uma API de terceiros
se integrando com a aplicação) com o NestJS. Além disso o projeto foi feito utilizando o Docker e o Docker compose, permitindo que cada parte da aplicação funcione em um container próprio (incluindo containers para o banco de dados MySQL). Por fim, foi
utilizada a API Gateway Kong, para integrar o projeto e adicionar plugins como Key Authentication para segurança.

## Tecnologias Utilizadas

- Golang
- Next.js
- NestJS
- Docker
- Kong API Gateway
- MySQL

## Pré-requisitos

- Docker
- Docker Compose

## Instalação e Execução

### Passos Gerais

1. Adicione a seguinte linha ao arquivo hosts:

   `127.0.0.1 host.docker.internal`

   #### Windows:

   C:\Windows\system32\drivers\etc\hosts (bloco de notas em modo administrador)

   #### Linux ou Mac (Docker Desktop):

   /etc/hosts

2. No terminal, para criar as imagens Docker, digite:

   docker compose build

3. Por fim, ainda no terminal (para subir os containers):

   docker compose up

Agora já é possível acessar a aplicação pela URL:

`http://localhost:8000/nextjs`
