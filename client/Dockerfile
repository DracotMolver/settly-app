FROM node:16

RUN mkdir /client
WORKDIR /client

COPY package.json ./

RUN npm install

COPY ./ ./

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]