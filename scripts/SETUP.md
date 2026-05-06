# Setup Guide for New Developers

## Prerequisites

- Node.js 18+
- PostgreSQL 14+ (or Docker)
- Git

## Quick Start (5 minutes)

### 1. Clone Repository
```bash
git clone <repo-url>
cd album-project
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend runs on `http://localhost:3001`

### 3. Frontend Setup (New Terminal)
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

### 4. Database Setup

If using Docker Compose:
```bash
docker-compose up -d
```

Then initialize:
```bash
cd backend
npx prisma migrate dev
npm run seed
```

## Environment Variables

### Backend (.env)
```
DATABASE_URL="postgresql://user:password@localhost:5432/laminagol"
JWT_SECRET="your-secret-key-change-in-production"
NODE_ENV="development"
PORT=3001
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

## Verify Installation

### Backend
```bash
curl http://localhost:3001/api/health
# Response: { "status": "ok" }
```

### Frontend
```bash
# Visit http://localhost:3000
# Should load home page without errors
```

### Database
```bash
npm run seed
npx prisma studio
# Browser opens at http://localhost:5555 to view data
```

## Common Commands

### Backend
```bash
npm run dev          # Start dev server with hot reload
npm test            # Run tests
npm run build       # Build for production
npx prisma studio  # Open database GUI
```

### Frontend
```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm start           # Start production build
npm test            # Run tests
```

### Database
```bash
npx prisma migrate dev      # Create new migration
npx prisma migrate reset    # Reset database (careful!)
npx prisma db push         # Push schema to database
```

## Docker (Alternative Setup)

```bash
# Start all services
docker-compose up

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Troubleshooting

### Database Connection Error
- Check PostgreSQL is running
- Verify DATABASE_URL in .env
- Check credentials

### Module Not Found
- Run `npm install` in the directory
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Port Already in Use
- Backend: Change PORT in .env
- Frontend: Use `PORT=3001 npm run dev`
- PostgreSQL: Check `docker ps` for running container

### Prisma Errors
```bash
# Regenerate Prisma client
npx prisma generate

# Verify schema
npx prisma validate
```

## Next Steps

1. Read `docs/ARCHITECTURE.md` to understand the system
2. Check `NEXT_TASK.md` for current task
3. Read the current task in `tasks/`
4. Start implementing!

## Getting Help

- Architecture: `docs/ARCHITECTURE.md`
- Context: `docs/PROJECT-CONTEXT.md`
- Current Task: `NEXT_TASK.md`
- Agent Guidelines: `docs/AGENTS.md`
