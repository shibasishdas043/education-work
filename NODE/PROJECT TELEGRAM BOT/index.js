
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

//BOT_TOKEN = "7968727999:AAELEaZT-bXe8Dg7AQPq_sfvQZBfFcunv2s";
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "Hello Amar Gandu Choda Pabitra Das Ami Apnar Ki Sahajyo Korte Pari"
  )
);

bot.hears("Hello", (ctx) =>
  ctx.reply("Hello Mane Banchod , Ki Bolchis , Amar Baper Nam Aajay Das")
);

bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.on(message("sticker"), (ctx) => ctx.reply("👍"));

bot.hears("tooi ke", (ctx) => ctx.reply("Ami Banchod Ajay er beta"));
bot.hears("toi ke", (ctx) => ctx.reply("Ami Banchod Ajay er beta"));



bot.command("ki bolis", (ctx) => ctx.reply(response));

bot.launch();
