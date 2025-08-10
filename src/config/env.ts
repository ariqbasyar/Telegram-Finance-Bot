import 'dotenv/config';

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
export const TELEGRAM_USER_ID = Number(process.env.TELEGRAM_USER_ID);

export const ACTUAL_SERVER_URL = process.env.ACTUAL_SERVER_URL || 'http://localhost:5006';
export const ACTUAL_SERVER_PASSWORD = process.env.ACTUAL_SERVER_PASSWORD!;
export const ACTUAL_SYNC_ID = process.env.ACTUAL_SYNC_ID!;
export const ACTUAL_DATA_DIR = process.env.ACTUAL_DATA_DIR || './budgets';

export const validateEnv = () => {
  if (!TELEGRAM_BOT_TOKEN) throw new Error('TELEGRAM_BOT_TOKEN is not set.');
  if (!TELEGRAM_USER_ID) throw new Error('TELEGRAM_USER_ID is not set.');
  if (!ACTUAL_SERVER_PASSWORD) throw new Error('ACTUAL_SERVER_PASSWORD is not set.');
  if (!ACTUAL_SYNC_ID) throw new Error('ACTUAL_SYNC_ID is not set.');
};
