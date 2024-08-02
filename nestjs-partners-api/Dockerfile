FROM node:21-slim

WORKDIR /home/node/app

RUN apt update && apt install -y openssl procps

RUN npm install -g @nestjs/cli@10.3.2 && npm install @prisma/client

USER node

CMD tail -f /dev/null