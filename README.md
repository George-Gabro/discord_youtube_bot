# discord_youtube_bot
A discord bot that plays music from a given link

## Installation guide
- `sudo apt-get install ffmpeg` ffmpeg to stream audio
- `npm install` look in package.json for more details about used dependencies. amoung others `@discordjs/voice` for discord voice channels

## Starting the bot
- simply run `npm run start` to start up the bot server

## Commands
- `music ${youtube_video_url}` to play a youtube video in the voice channel, PS you have to be inside a voice channel in order to execute this command
- `ping` simply returns pong
