import pingEvent from "./events/ping.event.js"
import musicEvent from "./events/music.event.js"

export default (client) => {

    pingEvent(client)
    musicEvent(client)
}