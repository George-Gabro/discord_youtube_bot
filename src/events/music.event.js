import { Events } from "discord.js";
import { joinVoiceChannel } from '@discordjs/voice';
import { play, subscribe,stop, pause, resume } from "../musicplayer/music.player.js";
import { inVoiceChannel, isMusicStopCommand, isPlayMusicCommand, isYouTubeUrl, isMusicPauseCommand, isMusicResumeCommand } from "../util/validation.util.js";

export default (client) =>{

    client.on(Events.MessageCreate, message => {
        if(isMusicStopCommand(message.content)) stop();
    })

    client.on(Events.MessageCreate, message => {
        if(isMusicPauseCommand(message.content)) pause();
    })

    client.on(Events.MessageCreate, message => {
        if(isMusicResumeCommand(message.content)) resume();
    })

    client.on(Events.MessageCreate, async message => {
        if (isPlayMusicCommand(message.content)) {
            
            const url = message.content.split(' ')[2].trim();
            
            if(url !== null) {
                if (!inVoiceChannel(message.member)){
                    message.reply('You need to be in a voice channel to use this command!');
                    return;
                }

                if(isYouTubeUrl(url)) {
                    const connection = joinVoiceChannel({
                        channelId: message.member.voice.channel.id,
                        guildId: message.member.voice.channel.guild.id,
                        adapterCreator: message.member.voice.channel.guild.voiceAdapterCreator,
                        selfDeaf: false
                    });
        
                    play(url);
        
                    subscribe(connection);
                }
            }
        }
    });
}