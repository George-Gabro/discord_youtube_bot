const songs = new Map();
let head = 0;
let tail = 0;

function enqueue(song)
{
    songs.set(tail, song);
    tail++;
}

function dequeue()
{
    if (isEmpty())
        return null;
    
    const song = songs.get(head);
    songs.delete(head);
    head++;
    return song;
}

function front()
{
    if (isEmpty())
        return null;
    
    return songs.get(head);
}

function size()
{
    return tail - head;
}

function isEmpty()
{
    return size() === 0;
}

export {
    dequeue,
    enqueue,
    front,
    isEmpty
}