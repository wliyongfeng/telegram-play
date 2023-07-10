const { Telegram } = require("telegraf");

const token = process.env.TG_TOKEN;
const tg = new Telegram(token);

(async () => {
  const chatId = process.env.TG_CHAT_ID;
  await tg.sendMessage(chatId, "hello world");
})();
