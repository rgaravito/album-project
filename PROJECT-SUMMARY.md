# WorldCard Project Summary

## 🎯 Project Overview

**WorldCard** is a web application for buying, selling, and exchanging World Cup album cards (láminas del mundial).

**Status**: Architecture & Planning Phase (Ready for Implementation)

**Timeline**: 4-6 weeks (Phase 1 MVP)

## 📋 Key Features

✅ **User Authentication** - Secure registration and login
✅ **Card Catalog** - Browse World Cup cards by year
✅ **Personal Inventory** - Track your collection
✅ **Marketplace** - List and buy cards from other users
✅ **Exchange System** - Trade cards with other collectors
✅ **User Profiles** - View user info and their listings

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend | Next.js 14 + React 18 + TailwindCSS |
| Backend | Node.js 18 + Express.js |
| Database | PostgreSQL 14 + Prisma ORM |
| Infrastructure | Docker + Docker Compose |
| Language | TypeScript (strict mode) |

## 📁 Project Structure

```
album-project/
├── 📄 README.md                # Main documentation
├── 📄 NEXT_TASK.md             # Current task pointer
│
├── 📂 docs/
│   ├── ARCHITECTURE.md         # System design & API
│   ├── ROADMAP.md              # Feature roadmap
│   ├── AGENTS.md               # Agent guidelines
│   ├── PROJECT-CONTEXT.md      # Quick reference
│   └── adr/                    # Architecture decisions
│
├── 📂 tasks/                   # Implementation tasks (10 files)
│   ├── 01-project-setup.md
│   ├── 02-authentication.md
│   ├── 03-database-schema.md
│   ├── 04-card-catalog-api.md
│   ├── 05-card-catalog-frontend.md
│   ├── 06-user-inventory.md
│   ├── 07-marketplace-list.md
│   ├── 08-marketplace-buy.md
│   ├── 09-exchange-system.md
│   └── 10-user-profile.md
│
├── 📂 specs/                   # Feature specifications (by Product Agent)
│   └── README.md
│
├── 📂 agents/                  # AI Agent development team
│   ├── product-agent/          # Product specs
│   ├── backend-agent/          # Backend implementation
│   ├── frontend-agent/         # Frontend implementation
│   ├── data-agent/             # Database & data
│   ├── testing-agent/          # QA & testing
│   └── README.md               # Agent activation guide
│
├── 📂 datasets/                # Seed data
│   ├── worldcups.json
│   └── README.md
│
├── 📂 scripts/                 # Setup scripts
│   ├── SETUP.md
│   └── README.md
│
├── 📂 templates/               # Templates for specs & tasks
│   ├── spec-template.md
│   └── task-template.md
│
└── 📄 docker-compose.yml       # Local development setup
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+ (or Docker)
- Git

### Setup (5 minutes)

```bash
# 1. Clone & navigate
git clone <repo-url>
cd album-project

# 2. Start services
docker-compose up

# 3. In new terminal: Backend setup
cd backend
npm install
npm run dev

# 4. In new terminal: Frontend setup
cd frontend
npm install
npm run dev

# 5. Access
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Database GUI: npx prisma studio
```

See `scripts/SETUP.md` for detailed instructions.

## 📊 Data Models

### Core Entities
- **User** - Collector accounts
- **Card** - Individual album cards
- **WorldCup** - Tournament information (year, country)
- **UserCard** - User's inventory (quantity, status, price)
- **Transaction** - Buy/sell/exchange records

### Database
- PostgreSQL for persistence
- Prisma for type-safe queries
- Auto-migrations built-in

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register       # Create account
POST   /api/auth/login          # Get JWT token
```

### Cards & Marketplace
```
GET    /api/cards               # Browse all cards
GET    /api/cards/:id           # Card details
GET    /api/cards?year=2022     # Filter by year
GET    /api/market/cards        # Cards for sale
```

### User & Inventory
```
GET    /api/users/:id           # User profile
GET    /api/users/:id/inventory # User's collection
```

### Transactions
```
POST   /api/market/buy          # Purchase card
POST   /api/market/exchange     # Create trade offer
GET    /api/transactions        # Transaction history
```

## 🧠 Development Workflow

### For Each Task:
1. **Read** → Check `NEXT_TASK.md`
2. **Understand** → Read task file + docs
3. **Implement** → Create/update code
4. **Test** → Verify acceptance criteria
5. **Commit** → Push changes
6. **Update** → Point `NEXT_TASK.md` to next task

### Using AI Agents:
1. Read current task from `NEXT_TASK.md`
2. Copy task content
3. Share with GitHub Copilot/Claude
4. Include `docs/ARCHITECTURE.md`
5. Request implementation

## 📋 Phase 1 Milestones

### Week 1-2: Foundation
- [x] Project structure defined
- [ ] Task 01: Setup (Backend + Frontend + Database)
- [ ] Task 02: Authentication (Register/Login)
- [ ] Task 03: Database schema (Cards, Users, Inventory)

### Week 3-4: Catalog & Inventory
- [ ] Task 04: Card catalog API
- [ ] Task 05: Card browsing UI
- [ ] Task 06: User inventory system
- [ ] Task 07: Marketplace basics

### Week 5-6: Marketplace & Exchange
- [ ] Task 08: Buy/Sell functionality
- [ ] Task 09: Exchange system
- [ ] Task 10: User profiles
- [ ] Testing & bug fixes

## 🔐 Security Features

- JWT-based authentication
- Password hashing (bcrypt)
- Input validation on all endpoints
- CORS configured
- Environment variables for secrets

## 📈 Future Phases (Phase 2+)

**Phase 2**: Notifications, advanced search, UI polish
**Phase 3**: Payment processing, recommendations, analytics
**Phase 4**: Mobile app, real-time features, gamification

## 🤝 Agent Team

| Agent | Role | When to Activate |
|-------|------|------------------|
| 🎯 Product | Feature specs & tasks | Start of phase |
| 🖥️ Backend | APIs & services | Core implementation |
| 🎨 Frontend | UI & components | UI implementation |
| 📊 Data | Database & seed data | Database setup |
| ✅ Testing | QA & validation | Before task complete |

See `agents/README.md` for detailed activation guide.

## 📚 Documentation

- **Getting Started**: `scripts/SETUP.md`
- **Architecture**: `docs/ARCHITECTURE.md`
- **Features**: `docs/ROADMAP.md`
- **Context**: `docs/PROJECT-CONTEXT.md`
- **Decisions**: `docs/adr/` folder

## ❓ FAQ

**Q: Where do I start?**
A: Read `NEXT_TASK.md` and follow the current task.

**Q: How do I use AI agents?**
A: See `agents/README.md` for activation patterns.

**Q: What if I find an issue?**
A: Create an ADR in `docs/adr/` if it's architectural, or add to task notes.

**Q: Can I skip the database setup?**
A: No, database is core. Use `docker-compose` to simplify.

**Q: What about testing?**
A: Testing Agent writes tests. Minimum 70% coverage on critical code.

## 📞 Support

- Questions? Check `docs/PROJECT-CONTEXT.md`
- Need to set up? See `scripts/SETUP.md`
- Architecture questions? Read `docs/ARCHITECTURE.md`
- Agent usage? See `agents/README.md`

## 📝 License

Private project - Not for distribution.

---

**Created**: May 2026
**Status**: Ready for Phase 1 Implementation
**Next Step**: Activate Backend Agent for Task 01
