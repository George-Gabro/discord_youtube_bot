import bot from "./bot.js";
import loadEvents from "./events.loader.js"

const token = ""

loadEvents(bot);

bot.login(token);