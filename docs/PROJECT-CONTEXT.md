# Project Context & Memory

Reference document for understanding LáminaGol project structure and conventions.

## Project Overview

**LáminaGol** is a platform for buying, selling, and exchanging World Cup album stickers (láminas adhesivas del álbum).

**Goal**: Users can discover, collect, trade, and sell album stickers from World Cup albums across different years.

**MVP Scope**: 10 core tasks delivering authentication, sticker catalog, inventory, marketplace, and exchange system.

## Key Numbers

- **MVP Timeline**: 4-6 weeks (Phase 1)
- **Core Tasks**: 10 tasks from setup to profile
- **Team Size**: AI Agents (Product, Backend, Frontend, Data, Testing)
- **Tech Stack**: Next.js + Express.js + PostgreSQL

## Directory Structure

```
album-project/
├── docs/           # Documentation
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
│   ├── AGENTS.md
│   └── adr/        # Architecture Decision Records
├── tasks/          # Task definitions (10 files)
├── specs/          # Feature specifications (created by Product Agent)
├── agents/         # Agent prompts & guidelines
├── datasets/       # Seed data & CSV files
├── templates/      # Templates for specs & tasks
└── scripts/        # Setup and seed scripts
```

## Core Data Models

**User** - Email, username, password, avatar
**Card** - Number, year, team, player, rarity
**WorldCup** - Year, country, total cards
**UserCard** - User's inventory (quantity, status, price)
**Transaction** - Buy/sell/exchange records

## API Structure

```
/api/auth/       - Authentication (register, login)
/api/cards/      - Card catalog (list, filter)
/api/users/      - User profiles & inventory
/api/market/     - Marketplace (list, buy)
/api/exchange/   - Exchange system (offers, trades)
/api/transactions/ - Transaction history
```

## Frontend Routes

```
/               - Home
/explore        - Browse cards by year
/market         - Marketplace
/my-collection  - User's inventory
/exchanges      - Exchange offers
/transactions   - History
/profile        - User profile
/profile/edit   - Edit profile (auth required)
```

## Development Workflow

1. **Read Task** → Check `NEXT_TASK.md` for current task
2. **Gather Context** → Read task file, referenced specs, architecture
3. **Implement** → Create/update code following guidelines
4. **Test** → Verify acceptance criteria
5. **Commit** → Clear commit message
6. **Update** → Update `NEXT_TASK.md` to next task

## Code Conventions

### Backend (Express)
- Routes in `src/routes/`
- Services in `src/services/`
- Models in Prisma `schema.prisma`
- Middleware in `src/middleware/`
- Error handling on all routes
- TypeScript strict mode

### Frontend (Next.js)
- Pages in `app/` (App Router)
- Components in `components/`
- Hooks in `hooks/`
- API client in `lib/api.ts`
- TailwindCSS for styling
- React Query for data fetching
- TypeScript strict mode

## Testing Requirements

- Backend: Unit tests for services
- Frontend: Component tests
- Integration: API endpoint tests
- Coverage: 70%+ on critical code

## Key Rules

✅ **Do**
- Keep it simple (MVP only)
- Follow TypeScript strictly
- Write tests
- Document complex logic
- Use clear naming
- Commit often

❌ **Don't**
- Add unnecessary dependencies
- Skip error handling
- Hardcode values
- Ignore TypeScript errors
- Write untestable code
- Merge untested code

## Useful Commands

```bash
# Backend setup
npm install
npm run dev           # Start dev server
npm test             # Run tests
npx prisma migrate dev  # Create migration
npx prisma studio   # View database

# Frontend setup
npm install
npm run dev          # Start dev server
npm test            # Run tests
npm run build       # Build for production

# Docker
docker-compose up   # Start all services
```

## Communication

- **Agents**: Share full context (ARCHITECTURE.md, ROADMAP.md, task file)
- **Status**: Keep NEXT_TASK.md updated
- **Questions**: Refer to docs/AGENTS.md for guidelines

## Phase 1 Tasks (MVP)

1. ✅ Project Setup
2. ✅ Authentication
3. ✅ Database Schema
4. ✅ Card Catalog API
5. ✅ Card Catalog UI
6. ✅ User Inventory
7. ✅ Marketplace (List)
8. ✅ Marketplace (Buy)
9. ✅ Exchange System
10. ✅ User Profile

## Phase 2 (Post-MVP)

- Search & filtering enhancements
- Exchange improvements (counter-offers)
- Notifications system
- Advanced inventory management
- UI/UX polish

## Common Issues & Solutions

**N+1 Query Problem**
- Use Prisma `include` or `select` to fetch relations
- Avoid loops with database queries

**Stale Data**
- Use React Query's `refetchOnFocus`, `refetchOnReconnect`
- Invalidate cache after mutations

**Auth Token Missing**
- Always include `Authorization: Bearer <token>` header
- Check middleware is applied to routes

**Env Variables**
- Copy `.env.example` to `.env` (don't commit `.env`)
- Load with `process.env` in Node, `process.env.NEXT_PUBLIC_*` in Next.js client

## Resources

- Docs: See `/docs/` folder
- Tasks: See `/tasks/` folder
- Agent Guidelines: See `/docs/AGENTS.md`
- Architecture: See `/docs/ARCHITECTURE.md`
- Roadmap: See `/docs/ROADMAP.md`

## Quick Links

- Current Task: `NEXT_TASK.md`
- Feature Specs: `specs/` folder
- Architecture Decisions: `docs/adr/` folder
- Templates: `templates/` folder
