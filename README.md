# Melonly-Style Discord Bot & Dashboard

A Node.js 20+, discord.js v14, MongoDB, Express, EJS, Socket.io multi-purpose bot suite.

## Setup
1. Copy `.env.example` to `.env` and fill Discord OAuth, bot token, and MongoDB values.
2. Install dependencies with `npm install`.
3. Deploy slash commands with `npm run deploy:commands`.
4. Start locally with `npm run start:bot` and `npm run start:dashboard`.
5. Use PM2 in production with `pm2 start ecosystem.config.js`.

## Features
- Slash and prefix command handlers with recursive command discovery.
- Mongoose schemas for guild settings, members, warnings, tickets, giveaways, reaction roles, inventory, starboard, custom commands, and audit logs.
- Automod, XP, economy, tickets, giveaways, logging, welcome, starboard, and dashboard configuration surfaces.
- Discord OAuth2 dashboard with CSRF protection, rate limiting, session storage in MongoDB, and glassmorphism EJS UI.

## Notes
This repository intentionally keeps command modules compact by sharing production behavior through handlers, utilities, and database models. Each command is wired for both slash and prefix execution and can be extended by replacing the shared default behavior with category-specific logic.
