FROM node:alpine

WORKDIR /app
COPY package*.json ./
#RUN apt-get update && apt-get upgrade -y
RUN npm install
COPY . .

# Corre los tests durante el build
RUN npm test

CMD ["npm", "start"]
