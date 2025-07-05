const { Telegraf } = require('telegraf');

// Securely load token from environment variable
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  const args = ctx.message.text.split(" ");
  if (args[1] === "menu") {
    ctx.replyWithPhoto(
      { url: "https://t.me/c/2676701229/16" },
      { caption: "📚 Educational use only.\nSuggested Menu — Tier Breakdown 🍃" }
    );
  } else {
    ctx.reply("Welcome to the Florist Bot 🌿\nTap /menu or click [View Menu](https://t.me/OGF1_Bot?start=menu)");
  }
});

bot.command("menu", (ctx) => {
  ctx.replyWithPhoto(
    { url: "https://t.me/c/2676701229/16" },
    { caption: "📚 Educational use only.\nSuggested Menu — Tier Breakdown 🍃" }
  );
});

bot.launch();