# discord_youtube_bot
A discord bot that plays music from a given link

## Installation guide
- `sudo apt-get install ffmpeg` ffmpeg to stream audio
- `npm install` look in package.json for more details about used dependencies. amoung others `@discordjs/voice` for discord voice channels

## Starting the bot
- First of all copy the `.env.temp` file to `.env` using `cp .env.temp .env` and fill in your discord bot token
- Then simply run `npm run start` to start up the bot server

## Starting the bot with docker container
- Run this command to build the docker image `sudo docker build -t discord_youtube_bot .`
- Then start the docker container `docker run -p 3000:3000 discord_youtube_bot`
    - to stop the bot get the container id, you can see the id using command `docker ps`
    - then execute `docker stop <ID>`

## Commands
- `music play ${youtube_video_url}` to play a youtube video in the voice channel, PS you have to be inside a voice channel in order to execute this command
- `music stop` to stop the played song
- `music pause` to pause the played song
- `music resume` to unpause the played song
- `ping` simply returns pong