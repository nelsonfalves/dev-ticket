# Ticket Reservation System

## Description

This project is a ticket reservation application consisting of three main components: the front-end built with Next.js, the back-end in Golang, and a partner API (simulating third-party integration) using NestJS. The project uses Docker and Docker Compose, allowing each part of the application to run in its own container (including MySQL database containers). Kong API Gateway integrates the project and provides plugins like Key Authentication for security.

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

1. Add the following line to the hosts file:

   `127.0.0.1 host.docker.internal`

   #### Windows:

   ```C:\Windows\system32\drivers\etc\hosts``` (edit with Administrator privileges)

   #### Linux ou Mac (Docker Desktop):

   ```/etc/hosts```

2. Build Docker images:

       docker compose build

3. Start the containers::

       docker compose up

Access the application at:

`http://localhost:8000/nextjs`
