import { Events } from "discord.js";
import { joinVoiceChannel } from '@discordjs/voice';
import { getPlayer, play } from "../musicplayer/music.player.js";

export default (client) =>{

    client.on(Events.MessageCreate, async message => {
        // Get the voice channel to join
        if(message.content.startsWith('music')) {
            const channel = message.member?.voice?.channel;
    
            if (channel === null) { return message.reply('You need to be in a voice channel to use this command!'); }
    
            const connection = joinVoiceChannel({
              channelId: channel.id,
              guildId: channel.guild.id,
              adapterCreator: channel.guild.voiceAdapterCreator,
              selfDeaf: false
            });
            
            play(message.content.split(' ')[1].trim());

            connection.subscribe(getPlayer());
        }
    });
}