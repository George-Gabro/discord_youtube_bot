import { Events } from "discord.js";
import { joinVoiceChannel } from '@discordjs/voice';
import { addSong, subscribe,stop, pause, resume } from "../musicplayer/music.player.js";
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
            
            const contentArray = message.content.split(' ');
            let url = null;

            if (contentArray.length >= 3 && contentArray[2].trim() !== '') {
                url = contentArray[2].trim();
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
        
                    addSong(url);
        
                    subscribe(connection);
                }
            }
        }
    });
}