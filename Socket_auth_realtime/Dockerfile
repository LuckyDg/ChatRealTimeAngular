FROM node:16-alpine

WORKDIR /app

COPY package*.json .env ./

RUN npm install

COPY . .

EXPOSE 3400

CMD ["npm", "start"]