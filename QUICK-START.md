# WorldCard - Quick Reference Guide

## 📍 You Are Here

This is the **complete project structure** for WorldCard - a World Cup album card marketplace application.

**Status**: ✅ Ready for Implementation
**Location**: `c:\Users\rochy\album-project\`
**Next Step**: Start with Task 01 - Project Setup

---

## 🎯 Start Here

### For Project Managers
1. Read: [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) - 5 min overview
2. Check: [ROADMAP.md](docs/ROADMAP.md) - Features & timeline
3. Monitor: [NEXT_TASK.md](NEXT_TASK.md) - Current progress

### For Developers (Backend)
1. Read: [ARCHITECTURE.md](docs/ARCHITECTURE.md) - Tech stack & API design
2. Setup: [scripts/SETUP.md](scripts/SETUP.md) - Local development
3. Current Task: [NEXT_TASK.md](NEXT_TASK.md)
4. Agent Guide: [agents/README.md](agents/README.md)

### For Developers (Frontend)
1. Read: [ARCHITECTURE.md](docs/ARCHITECTURE.md) - Routes & components
2. Setup: [scripts/SETUP.md](scripts/SETUP.md) - Local development
3. Current Task: [NEXT_TASK.md](NEXT_TASK.md)
4. Agent Guide: [agents/README.md](agents/README.md)

### For AI Agents
1. Copy current task from [NEXT_TASK.md](NEXT_TASK.md)
2. Read full task file from [tasks/](tasks/)
3. Include [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
4. Follow agent prompt: [agents/{agent-name}/prompt.md](agents/)
5. Reference [docs/AGENTS.md](docs/AGENTS.md) for guidelines

---

## 📚 Essential Documentation

### Project Understanding
| File | Purpose | Read Time |
|------|---------|-----------|
| [README.md](README.md) | Main project intro | 3 min |
| [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) | Complete overview | 5 min |
| [docs/PROJECT-CONTEXT.md](docs/PROJECT-CONTEXT.md) | Quick reference | 3 min |

### Architecture & Design
| File | Purpose | Read Time |
|------|---------|-----------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Tech stack & design | 10 min |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Features & timeline | 5 min |
| [docs/AGENTS.md](docs/AGENTS.md) | Agent guidelines | 5 min |

### Setup & Getting Started
| File | Purpose | Read Time |
|------|---------|-----------|
| [scripts/SETUP.md](scripts/SETUP.md) | Dev environment setup | 5 min |
| [docker-compose.yml](docker-compose.yml) | Container configuration | 2 min |
| [agents/README.md](agents/README.md) | How to activate agents | 5 min |

### Architecture Decisions
| File | Purpose |
|------|---------|
| [docs/adr/ADR-001-MVP-Scope.md](docs/adr/ADR-001-MVP-Scope.md) | MVP feature decisions |
| [docs/adr/ADR-002-Tech-Stack.md](docs/adr/ADR-002-Tech-Stack.md) | Technology choices |

---

## 🛣️ Implementation Path

### Phase 1: MVP (10 Tasks)

```
01-project-setup.md ────┐
                         ├──→ 03-database-schema.md
02-authentication.md ───┘

03-database-schema.md ──→ 04-card-catalog-api.md ─→ 05-card-catalog-frontend.md

04-card-catalog-api.md ──→ 06-user-inventory.md

06-user-inventory.md ───→ 07-marketplace-list.md ──→ 08-marketplace-buy.md

08-marketplace-buy.md ──→ 09-exchange-system.md

09-exchange-system.md ──→ 10-user-profile.md
```

### Current Task
```
→ NEXT_TASK.md
```

---

## 📂 Folder Reference

### Project Structure
```
/ (root)
├── Documentation
│   ├── README.md
│   ├── NEXT_TASK.md
│   ├── PROJECT-SUMMARY.md
│   └── docker-compose.yml
│
├── docs/
│   ├── ARCHITECTURE.md     ← Read this first
│   ├── ROADMAP.md
│   ├── AGENTS.md
│   ├── PROJECT-CONTEXT.md
│   └── adr/                ← Architecture decisions
│
├── tasks/                  ← Implementation tasks (10 files)
│   ├── 01-project-setup.md
│   ├── 02-authentication.md
│   ├── ...
│   └── 10-user-profile.md
│
├── specs/                  ← Feature specifications (created by Product Agent)
│   └── README.md
│
├── agents/                 ← AI Agent development team
│   ├── README.md          ← How to activate agents
│   ├── product-agent/
│   ├── backend-agent/
│   ├── frontend-agent/
│   ├── data-agent/
│   └── testing-agent/
│
├── datasets/              ← Seed data files
│   └── worldcups.json
│
├── scripts/               ← Setup & utility scripts
│   └── SETUP.md
│
└── templates/             ← Templates for specs & tasks
    ├── spec-template.md
    └── task-template.md
```

---

## 🤖 Agent Activation Quick Guide

### Product Agent
```
Read: docs/ROADMAP.md, docs/ARCHITECTURE.md
Task: Create specs for Phase 1 features
Output: specs/ folder, updated NEXT_TASK.md
Activate: agents/product-agent/prompt.md
```

### Backend Agent
```
Read: NEXT_TASK.md, current task file, docs/ARCHITECTURE.md
Task: Implement APIs and services
Output: Backend code, tests
Activate: agents/backend-agent/prompt.md
```

### Frontend Agent
```
Read: NEXT_TASK.md, current task file, docs/ARCHITECTURE.md
Task: Implement UI components and pages
Output: Frontend code, components, tests
Activate: agents/frontend-agent/prompt.md
```

### Data Agent
```
Read: tasks/03-database-schema.md, docs/ARCHITECTURE.md
Task: Set up database schema and seed data
Output: Prisma schema, migrations, seed script
Activate: agents/data-agent/prompt.md
```

### Testing Agent
```
Read: Completed task code, test guidelines
Task: Write tests and verify implementation
Output: Test files, coverage reports
Activate: agents/testing-agent/prompt.md
```

See [agents/README.md](agents/README.md) for detailed instructions.

---

## ✅ Task Checklist

### Phase 1 Implementation Checklist

- [ ] **Task 01** - Project Setup
  - [ ] Backend initialized
  - [ ] Frontend initialized
  - [ ] Docker configured

- [ ] **Task 02** - Authentication
  - [ ] Register endpoint
  - [ ] Login endpoint
  - [ ] Auth middleware
  - [ ] UI forms

- [ ] **Task 03** - Database Schema
  - [ ] All models defined
  - [ ] Migrations created
  - [ ] Seed script working

- [ ] **Task 04** - Card Catalog API
  - [ ] GET /api/cards
  - [ ] GET /api/worldcups
  - [ ] Filtering & pagination

- [ ] **Task 05** - Card Catalog UI
  - [ ] Explore page
  - [ ] Card grid
  - [ ] Year filter

- [ ] **Task 06** - User Inventory
  - [ ] GET /api/users/:id/inventory
  - [ ] My Collection page
  - [ ] Stats display

- [ ] **Task 07** - Marketplace List
  - [ ] List cards for sale
  - [ ] Filter by price
  - [ ] Marketplace page

- [ ] **Task 08** - Marketplace Buy
  - [ ] Buy endpoint
  - [ ] Transaction creation
  - [ ] Inventory updates

- [ ] **Task 09** - Exchange System
  - [ ] Create offer endpoint
  - [ ] Accept/reject offers
  - [ ] Exchange page

- [ ] **Task 10** - User Profile
  - [ ] Profile page
  - [ ] Edit profile
  - [ ] Collection stats

---

## 🚀 Quick Commands

### Setup
```bash
# 1. Clone and navigate
git clone <repo-url>
cd album-project

# 2. Start Docker services
docker-compose up

# 3. Backend (new terminal)
cd backend && npm install && npm run dev

# 4. Frontend (new terminal)
cd frontend && npm install && npm run dev

# 5. Open browser
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
```

### Development
```bash
# Backend
npm run dev           # Start development server
npm test             # Run tests
npx prisma studio  # View database

# Frontend
npm run dev           # Start dev server
npm test             # Run tests
npm run build        # Build for production
```

### Database
```bash
npx prisma migrate dev      # Create migration
npm run seed               # Seed sample data
npx prisma studio        # Open database GUI
```

---

## 🔗 Key Links

| Resource | Link |
|----------|------|
| **Start Here** | [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) |
| **Current Task** | [NEXT_TASK.md](NEXT_TASK.md) |
| **Architecture** | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| **Setup Guide** | [scripts/SETUP.md](scripts/SETUP.md) |
| **All Tasks** | [tasks/](tasks/) |
| **Agent Guide** | [agents/README.md](agents/README.md) |
| **Quick Ref** | [docs/PROJECT-CONTEXT.md](docs/PROJECT-CONTEXT.md) |

---

## 💡 Tips

✅ **Always start with NEXT_TASK.md**
✅ **Read full task file + ARCHITECTURE.md**
✅ **Follow acceptance criteria exactly**
✅ **Write tests before marking complete**
✅ **Update NEXT_TASK.md after finishing**
✅ **Keep code simple (MVP only)**
✅ **Ask questions in task notes**

❌ **Don't add features not in task**
❌ **Don't skip tests**
❌ **Don't hardcode values**
❌ **Don't merge without code review**
❌ **Don't ignore TypeScript errors**

---

## ❓ FAQ

**Q: Where do I start?**
A: [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) → [scripts/SETUP.md](scripts/SETUP.md) → [NEXT_TASK.md](NEXT_TASK.md)

**Q: How do I set up my environment?**
A: Follow [scripts/SETUP.md](scripts/SETUP.md)

**Q: What task should I work on next?**
A: Check [NEXT_TASK.md](NEXT_TASK.md)

**Q: How do I use AI agents?**
A: Read [agents/README.md](agents/README.md)

**Q: What's the architecture?**
A: Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

**Q: Can I skip the database?**
A: No, use docker-compose for easy setup

**Q: What testing framework?**
A: Backend: Jest, Frontend: Jest + React Testing Library

**Q: Where's the roadmap?**
A: [docs/ROADMAP.md](docs/ROADMAP.md)

---

## 📞 Support Resources

| Issue | Solution |
|-------|----------|
| Need project overview | Read [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) |
| Can't set up environment | Follow [scripts/SETUP.md](scripts/SETUP.md) |
| Don't understand architecture | Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Stuck on current task | Check [NEXT_TASK.md](NEXT_TASK.md) and task file |
| Agent questions | See [agents/README.md](agents/README.md) |
| Database issues | Check `npx prisma studio` or [docs/PROJECT-CONTEXT.md](docs/PROJECT-CONTEXT.md) |
| Want to know what's next | Read [docs/ROADMAP.md](docs/ROADMAP.md) |

---

**Generated**: May 5, 2026
**Project**: WorldCard - World Cup Album Card Marketplace
**Status**: ✅ Ready for Phase 1 Implementation
