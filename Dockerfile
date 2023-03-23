FROM node:18.7.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apt-get update && apt-get install -y ffmpeg

COPY . .

CMD ["npm", "start"]