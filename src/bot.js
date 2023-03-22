import { Client, GatewayIntentBits,SlashCommandBuilder, Events } from 'discord.js';
import myIntents from '../intents.js';

const client = new Client({ intents: myIntents });

client.once(Events.ClientReady, async c => {
	console.log(`${c.user.tag} is up running`);
});

export default client;