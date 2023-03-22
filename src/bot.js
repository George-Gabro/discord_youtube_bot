import { Client, GatewayIntentBits,SlashCommandBuilder, Events } from 'discord.js';

const client = new Client({
   intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ] 
  });

client.once(Events.ClientReady, async c => {
	console.log(`${c.user.tag} is up running`);
});

export default client;