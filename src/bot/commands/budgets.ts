import { getBudgetMonth } from '../../services/actual';
import { formatBudgetToChunks } from '../utils/formatBudget';

const toMonth = (arg?: string) => {
  // Expect 'YYYY-MM', fallback to current month in that format
  if (arg && /^\d{4}-\d{2}$/.test(arg)) return arg;
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  return `${now.getFullYear()}-${mm}`;
};

export const budgetsCommand = async (ctx: any) => {
  const arg = ctx.match?.trim?.() || (ctx.message?.text || '').split(' ').slice(1).join(' ');
  const month = toMonth(arg);
  const budget = await getBudgetMonth(month);
  const chunks = formatBudgetToChunks(budget);
  for (const chunk of chunks) {
    await ctx.reply(chunk);
  }
};
