import bot from "./bot.js";
import loadEvents from "./events.loader.js"
import * as dotenv from 'dotenv'
dotenv.config()

const token = process.env.BOT_TOKEN

loadEvents(bot);

bot.login(token);