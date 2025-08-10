import * as api from '@actual-app/api';
import {
  ACTUAL_DATA_DIR,
  ACTUAL_SERVER_PASSWORD,
  ACTUAL_SERVER_URL,
  ACTUAL_SYNC_ID,
} from '../config/env';

let isReady = false;

export const initActual = async () => {
  if (isReady) return;
  await api.init({
    dataDir: ACTUAL_DATA_DIR,
    serverURL: ACTUAL_SERVER_URL,
    password: ACTUAL_SERVER_PASSWORD,
  });
  await api.downloadBudget(ACTUAL_SYNC_ID);
  isReady = true;
};

export const getBudgetMonth = async (month: string) => {
  await initActual();
  return api.getBudgetMonth(month);
};

export const getAccounts = async () => {
  await initActual();
  return api.getAccounts();
};

// optional graceful shutdown
export const shutdownActual = async () => {
  if (isReady) {
    await api.shutdown();
    isReady = false;
  }
};