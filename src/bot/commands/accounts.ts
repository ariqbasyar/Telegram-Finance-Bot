import { getAccounts } from '../../services/actual';

export const accountsCommand = async (ctx: any) => {
  const accounts = await getAccounts();
  // Keep it short & readable
  const lines = (accounts || []).map((a: any) => `• ${a.name} (${a.id})`);
  const text = ['🏦 Accounts:', ...lines].join('\n');
  // Split if needed (very unlikely to exceed limit with ids+names)
  const chunks: string[] = [];
  const MAX = 4000;
  for (let i = 0; i < text.length; i += MAX) chunks.push(text.slice(i, i + MAX));
  for (const c of chunks) await ctx.reply(c);
};
