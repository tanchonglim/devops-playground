FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules 
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]
