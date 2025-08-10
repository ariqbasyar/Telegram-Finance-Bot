import type { Bot } from 'grammy';
import { helpCommand } from './help';
import { budgetsCommand } from './budgets';
import { accountsCommand } from './accounts';

export const registerCommands = (bot: Bot) => {
  bot.api.setMyCommands([
    { command: 'help', description: 'Show help' },
    { command: 'budgets', description: 'Show budget month (default current)' },
    { command: 'accounts', description: 'List accounts' },
  ]);

  bot.command('help', helpCommand);
  // grammY "commands with args" -> use bot.command + ctx.match or manual parse
  bot.command('budgets', budgetsCommand);
  bot.command('accounts', accountsCommand);
};
