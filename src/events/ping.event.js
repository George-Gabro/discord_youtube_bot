import { Events } from "discord.js";

export default (client) =>{

    client.on(Events.MessageCreate, message => {
        if(message.content === "ping"){
          message.reply("pong")
        }
    });

}