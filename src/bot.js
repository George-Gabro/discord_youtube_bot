import { Client, GatewayIntentBits,SlashCommandBuilder, Events } from 'discord.js';
import pingEvent from './events/ping.event.js';

const client = new Client({
   intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ] 
  });

client.once(Events.ClientReady, async c => {
	console.log(`${c.user.tag} is up running`);

  await client.application.fetch();

  await client.application.commands.create({
    name: 'ping',
    description: 'Ping!',
  });
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

export default client;