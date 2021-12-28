FROM node:14.18.1

RUN mkdir -p /app/

WORKDIR /app/

COPY . .

RUN npm install

WORKDIR /app/src/

RUN npm install

EXPOSE 3000

# defined in package.json
CMD [ "npm", "start" ]