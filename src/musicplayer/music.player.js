import {createAudioPlayer,createAudioResource} from '@discordjs/voice'
import ytdl from 'ytdl-core-discord'

const player = createAudioPlayer();

async function play(url)
{
    const resource = createAudioResource(await ytdl(url), { inlineVolume: true });
    
    resource.volume.setVolume(0.5);

    player.play(resource);
}

function getPlayer()
{
    return player;
}

export {play, getPlayer}