# Backend Agent Tasks

## Phase 1 Implementation

### Task 01: Project Setup
- [ ] Create Node.js/Express project
- [ ] Install dependencies (express, typescript, prisma, etc.)
- [ ] Configure TypeScript
- [ ] Create basic folder structure
- [ ] Setup .env files
- [ ] Create docker-compose.yml
- [ ] First successful `npm run dev`

### Task 02: Authentication
- [ ] Create User model in Prisma
- [ ] Implement bcrypt password hashing
- [ ] Create JWT utilities
- [ ] Build auth service
- [ ] Implement POST /api/auth/register
- [ ] Implement POST /api/auth/login
- [ ] Add auth middleware
- [ ] Write tests

### Task 03: Database Schema
- [ ] Create Card model
- [ ] Create WorldCup model
- [ ] Create UserCard model
- [ ] Create Transaction model
- [ ] Define relationships
- [ ] Run migrations
- [ ] Test schema with seed data

### Task 04: Card Catalog API
- [ ] Create CardService
- [ ] Implement GET /api/cards
- [ ] Implement GET /api/cards/:id
- [ ] Add pagination
- [ ] Add filtering by year
- [ ] Create GET /api/worldcups
- [ ] Error handling
- [ ] Write tests

### Tasks 06-10: Remaining Features
- See individual task files for specifics
- Follow the acceptance criteria
- Write tests for each feature
- Verify API contracts

## Code Standards

✅ TypeScript strict mode
✅ Middleware on all routes
✅ Input validation
✅ Error handling
✅ Comments for complex logic
✅ Unit tests

## Testing

```bash
npm test
npm run test:coverage
```

## Activation

When ready, share:
- Current task file
- docs/ARCHITECTURE.md
- docs/AGENTS.md

Request: "Implement [Task Name] for backend. Follow the task file exactly."
