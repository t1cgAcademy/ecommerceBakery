FROM node:9

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install
RUN npm install react-scripts@^2.1.1 -g

COPY . .

CMD ["npm", "start"]
