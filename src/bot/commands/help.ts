export const helpCommand = async (ctx: any) => {
  const text = [
    '🤖 Personal Finance Bot (Actual Budget)',
    '',
    '/help - Show this help',
    '/budgets [YYYY-MM] - Show budget month (default: current)',
    '/accounts - List accounts',
  ].join('\n');
  await ctx.reply(text);
};
