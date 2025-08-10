# 📊 Telegram Finance Bot (ActualBudget Integration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A personal Telegram bot (built with [grammY](https://grammy.dev/)) to manage my finances via a self-hosted [Actual Budget](https://actualbudget.com/) server.  
Designed for **private, single-user/internal** use — integrates typed commands, formatted budget reports, and owner-only access.

---

## 🚀 Features
- **Owner-only access** (private chat guard)
- `/budgets [YYYY-MM]` — View budget for current or specified month
- `/accounts` — List accounts with names & IDs
- `/help` — Quick command reference
- Currency formatting & message chunking for Telegram's 4096-char limit
- Modular, TypeScript-based architecture for easy feature expansion

---

## 🛠 How to Run

### 1. Prepare `.env`
Copy the example file and fill in your values:
```bash
cp .env.example .env
```

#### .env.example:
```
TELEGRAM_BOT_TOKEN=123456:ABCDEF
TELEGRAM_USER_ID=123456789

ACTUAL_SERVER_URL=http://localhost:5006
ACTUAL_SERVER_PASSWORD=hunter2
ACTUAL_SYNC_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
ACTUAL_DATA_DIR=./budgets
```

### 2. Install dependencies
```
npm install
```

### 3. Run the bot (development mode)
```
npm run dev
```

This uses tsx for fast TypeScript execution.

### 4. Build & run (production)
```
npm run build
npm start
```

## 📅 Roadmap
- [x] Add /budgets command with month argument & formatting
- [ ] Add /accounts command
- [ ] LLM-based via-chat transaction parser
- [ ] Photo/receipt OCR via Gemini 2.5 Flash Lite
- [ ] Transaction preview + confirm/edit inline keyboards
- [ ] /transactions list + edit recent transactions

## 📜 License
This project is licensed under the [MIT License](LICENSE).
