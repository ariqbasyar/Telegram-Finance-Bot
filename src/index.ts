import 'dotenv/config';
import { Bot } from "grammy";

// Access the environment variable
const token = process.env.TELEGRAM_BOT_TOKEN;

// You should check if the token exists to prevent runtime errors
if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN is not set.");
}

const bot = new Bot(token);

const onMessage = async (ctx) => {
  const chat = ctx.message;
  if (chat.from.id !== 986802411) return;
  // {
  //   message_id: 23,
  //   from: {
  //     id: 986802411,
  //     is_bot: false,
  //     first_name: 'Muhammad Ariq',
  //     last_name: 'Basyar',
  //     username: 'ariqbasyar',
  //     language_code: 'en'
  //   },
  //   chat: {
  //     id: 986802411,
  //     first_name: 'Muhammad Ariq',
  //     last_name: 'Basyar',
  //     username: 'ariqbasyar',
  //     type: 'private'
  //   },
  //   date: 1754579666,
  //   reply_to_message: {
  //     message_id: 21,
  //     from: {
  //       id: 986802411,
  //       is_bot: false,
  //       first_name: 'Muhammad Ariq',
  //       last_name: 'Basyar',
  //       username: 'ariqbasyar',
  //       language_code: 'en'
  //     },
  //     chat: {
  //       id: 986802411,
  //       first_name: 'Muhammad Ariq',
  //       last_name: 'Basyar',
  //       username: 'ariqbasyar',
  //       type: 'private'
  //     },
  //     date: 1754579625,
  //     photo: [ [Object], [Object], [Object] ],
  //     caption: 'asdasd'
  //   },
  //   text: 'k'
  // }
  const replyToMessage = chat.reply_to_message;
  const chatText = chat.text;
  console.log("chatText", chatText);
  console.log("replyToMessage", replyToMessage);
  ctx.reply("Hi there!");
}
bot.on("message", onMessage);

bot.start();
