FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Listar archivos para depuración
RUN ls -la /app

CMD ["node", "index.js"]
