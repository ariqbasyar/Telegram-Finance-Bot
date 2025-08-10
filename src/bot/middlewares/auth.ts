import { TELEGRAM_USER_ID } from '../../config/env';

export const onlyPrivateMe = async (ctx: any, next: () => Promise<void>) => {
  if (ctx.chat?.type !== 'private') {
    await ctx.reply('❌ This bot only works in private chat.');
    return;
  }
  if (ctx.from?.id !== TELEGRAM_USER_ID) {
    await ctx.reply('❌ Sorry, this bot is private and only accessible to its owner.');
    console.warn(`Unauthorized access from ${ctx.from?.id} (@${ctx.from?.username || ''})`);
    return;
  }
  return next();
};
