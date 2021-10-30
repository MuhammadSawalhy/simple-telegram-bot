const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears(/.*/, (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(ctx.chat.id, "تلقيت رسالة");
});

bot.launch();
