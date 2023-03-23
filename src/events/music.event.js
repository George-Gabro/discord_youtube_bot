import { Events } from "discord.js";
import { joinVoiceChannel } from '@discordjs/voice';
import { play, subscribe } from "../musicplayer/music.player.js";
import { inVoiceChannel, isMusicCommand, isYouTubeUrl } from "../util/validation.util.js";

export default (client) =>{

    client.on(Events.MessageCreate, async message => {
        // Get the voice channel to join
        if (!isMusicCommand(message.content)) return;
    
        if (!inVoiceChannel)
            return message.reply('You need to be in a voice channel to use this command!');
    
        const url = message.content.split(' ')[1].trim();
        
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
        
        return message.reply("Invalid youtube link")
    });
}