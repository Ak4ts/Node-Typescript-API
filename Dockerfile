FROM node:16.14.0-alpine

WORKDIR /usr/projects/

COPY package*.json ./
RUN npm i
COPY tsconfig*.json ./
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
