import { Bot } from 'grammy';
import { TELEGRAM_BOT_TOKEN } from '../config/env';
import { onlyPrivateMe } from './middlewares/auth';
import { registerCommands } from './commands';

export const makeBot = () => {
  const bot = new Bot(TELEGRAM_BOT_TOKEN);
  bot.use(onlyPrivateMe);

  registerCommands(bot);

  // Catch-all for plain messages (future: quick add parser)
  bot.on('message', async (ctx) => {
    // Only you reach here (guarded by middleware)
    // For now just nudge to use commands
    if (ctx.message?.text?.startsWith('/')) return;
    await ctx.reply('Try /budgets or /accounts. (Free-text add coming soon!)');
  });

  return bot;
};
