FROM node:18-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npm run build

FROM nginx:1.23.3

COPY --from=build-step /app/dist/socket-auth /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
