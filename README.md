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
   
    ```127.0.0.1 host.docker.internal```

   #### Windows:
      C:\Windows\system32\drivers\etc\hosts (bloco de notas em modo administrador)
   #### Linux ou Mac (Docker Desktop):
   /etc/hosts

3. Na pasta raiz do projeto, para rodar os containers:
   
       docker compose up

### Back-end
1. No terminal, para acessar o container do back-end:
   
       docker compose exec golang sh

2. Para adicionar as dependências necessárias:

       go mod tidy

3. Para executar o arquivo principal:

       go run cmd/events/main.go
   

### Front-end
1. Em um novo terminal, para acessar o container do front-end:
   
       docker compose exec nextjs bash

2. Para adicionar as dependências necessárias:

       npm install

3. Para executar o arquivo principal:

       npm run dev

### Partner API
1. Em um novo terminal, para acessar o container da API dos parceiros:
   
        docker compose exec nestjs bash

2. Para adicionar as dependências necessárias:

        npm install

3. Executa um script de criação no banco de dados para o parceiro 1:

       npm run migrate:partner1
   
4. Executa um script de criação no banco de dados para o parceiro 2:

       npm run migrate:partner2

5. Popula o banco de dados do parceiro 1 com dados de teste:

       npm run start partner1-fixture
   
6. Popula o banco de dados do parceiro 2 com dados de teste:

       npm run start partner2-fixture

7. Executa a aplicação do Partner 1:

       npm run start:dev
   
8. Executa a aplicação do Partner 2:

       npm run start:dev partner2

Por fim, é possível acessar a aplicação pela URL:

   ```http://localhost:8000/nextjs```
                    


