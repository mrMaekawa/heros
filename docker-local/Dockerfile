FROM node:13-alpine
WORKDIR /app

ARG PRODUCTION=false

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm install --silent

CMD ["npm", "start"]
