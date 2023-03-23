import bot from "./bot.js";
import loadEvents from "./events.loader.js"
import * as dotenv from 'dotenv'
dotenv.config()

/* global process */
const token = process.env.BOT_TOKEN

loadEvents(bot);

bot.login(token);