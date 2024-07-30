FROM node:21-slim

WORKDIR /home/node/app

# Copie os arquivos package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta em que a aplicação está rodando
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]