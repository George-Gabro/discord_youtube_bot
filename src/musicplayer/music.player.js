import { createAudioPlayer,createAudioResource, AudioPlayerStatus } from '@discordjs/voice'
import ytdl from 'ytdl-core-discord'
import { dequeue, enqueue, isEmpty, front } from '../model/song.queue.js';

const player = createAudioPlayer();

player.on(AudioPlayerStatus.Idle, () => {
    // dequeue the finished song
    dequeue()
    
    // check if there is a song in the queue
    if(!isEmpty()){
        const nextSong = front();
        play(nextSong)
    }
});

function addSong(url)
{
    if(isEmpty()) {
        play(url);
    }

    enqueue(url);
}

async function play(url)
{
    const resource = createAudioResource(await ytdl(url), { inlineVolume: true });
    resource.volume.setVolume(0.5);
    player.play(resource);
}

function subscribe(connection)
{
    connection.subscribe(player);
}

function stop()
{
    while(!isEmpty){
        dequeue();
    }
    player.stop();
}

function pause()
{
    player.pause();
}

function resume()
{
    player.unpause();
}

export {
    addSong,
    subscribe,
    stop,
    resume,
    pause
}