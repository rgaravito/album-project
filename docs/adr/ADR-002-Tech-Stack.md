# Architecture Decision Record - Tech Stack

## Status
Accepted

## Decision

Use the following tech stack for WorldCard MVP:

**Frontend**
- Next.js 14+ (App Router)
- React 18+
- TailwindCSS
- React Query
- TypeScript

**Backend**
- Node.js 18+
- Express.js
- PostgreSQL 14+
- Prisma ORM
- TypeScript

**Infrastructure**
- Docker & Docker Compose (local dev)
- GitHub Actions (CI/CD)

## Context

We needed a tech stack that:
1. Allows fast development
2. Provides good TypeScript support
3. Is widely understood by developers
4. Scales well for Phase 2
5. Has strong community support
6. Minimizes external dependencies

## Rationale

### Frontend: Next.js
- Built-in React optimization (SSR, ISR, SSG)
- File-based routing (less boilerplate)
- API Routes (can test without backend)
- Image optimization out of the box
- Deploy anywhere (Vercel, Docker, etc.)

### Backend: Express.js
- Minimal framework (only what we need)
- Excellent middleware ecosystem
- Easy to understand and debug
- Not "batteries included" (avoid unused features)
- Perfect for small teams

### Database: PostgreSQL + Prisma
- PostgreSQL: Mature, reliable, supports JSON
- Prisma: Type-safe queries, auto-migrations, great DX
- Better than ORMs like TypeORM for simplicity
- No raw SQL needed

### Infrastructure: Docker Compose
- Local development matches production
- Easy onboarding for new developers
- CI/CD ready

## Alternatives Considered

### Alternative 1: NestJS (Backend)
- ❌ Overkill for MVP
- ❌ Steeper learning curve
- ❌ Heavy on "magic" (decorators, etc.)

### Alternative 2: Django/Python (Backend)
- ❌ Different language than frontend
- ❌ Overkill for this use case

### Alternative 3: Vite instead of Next.js
- ❌ Would need separate backend/frontend
- ❌ No SSR
- ❌ More complexity

### Alternative 4: MongoDB
- ❌ Relational data fits PostgreSQL better
- ❌ Harder to ensure data integrity
- ❌ More expensive at scale

## Consequences

✅ Rapid development
✅ Type safety end-to-end
✅ Easy to hire developers
✅ Easy to switch providers later
✅ Minimal learning curve

⚠️ Must follow TypeScript strict mode
⚠️ No built-in GraphQL (REST only)
⚠️ Limited to Express (no advanced middleware)

## Implementation

- Backend starts in `backend/` directory
- Frontend starts in `frontend/` directory
- Both in separate npm projects
- Coordinated via docker-compose

## Version Pinning

Lock versions in package.json to avoid surprises:
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "express": "^4.18.0",
  "prisma": "^5.0.0"
}
```

## Related Decisions

- ADR-001: MVP Scope
- ADR-002: API Design (REST)

## Future Upgrades

- Phase 2: Consider Redis for caching
- Phase 3: Consider GraphQL API alongside REST
- Phase 3+: Consider microservices if needed
