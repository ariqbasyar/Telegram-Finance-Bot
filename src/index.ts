import { validateEnv } from './config/env';
import { makeBot } from './bot/bot';
import { shutdownActual } from './services/actual';

validateEnv();

const bot = makeBot();

const shutdown = async () => {
  try {
    await shutdownActual();
  } finally {
    process.exit(0);
  }
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

bot.start();
