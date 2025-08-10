import { CURRENCY_CODE, CURRENCY_LOCALE, TELEGRAM_SAFE_CHUNK } from '../../config/constants';

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat(CURRENCY_LOCALE, {
    style: 'currency',
    currency: CURRENCY_CODE,
    maximumFractionDigits: 0,
  }).format(amount);

export const formatBudgetToChunks = (budget: any): string[] => {
  const header = `📅 Month: ${budget.month}
💰 To Budget: ${formatCurrency(budget.toBudget)}
📥 Income: ${formatCurrency(budget.totalIncome)}
📤 Spent: ${formatCurrency(budget.totalSpent)}
📊 Balance: ${formatCurrency(budget.totalBalance)}
`;

  const groupLines = (budget.categoryGroups || []).map((group: any) => {
    let line = `\n=== ${group.name} ===\n`;
    if (group.is_income) {
      line += `Received: ${formatCurrency(group.received || 0)}\n`;
    } else {
      line += `Budgeted: ${formatCurrency(group.budgeted || 0)}\n`;
      line += `Spent: ${formatCurrency(group.spent || 0)}\n`;
      line += `Balance: ${formatCurrency(group.balance || 0)}\n`;
    }

    if (Array.isArray(group.categories)) {
      group.categories.forEach((cat: any) => {
        const amt = group.is_income
          ? formatCurrency(cat.received || 0)
          : formatCurrency(cat.budgeted || 0);
        line += `  • ${cat.name}: ${amt}\n`;
      });
    }
    return line;
  });

  const allText = [header, ...groupLines].join('\n');
  const chunks: string[] = [];
  for (let i = 0; i < allText.length; i += TELEGRAM_SAFE_CHUNK) {
    chunks.push(allText.slice(i, i + TELEGRAM_SAFE_CHUNK));
  }
  return chunks.length ? chunks : ['(empty)'];
};