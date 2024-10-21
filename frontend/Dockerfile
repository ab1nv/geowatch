FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npm start && echo 'Frontend is accessible at http://localhost:3000'"]
