# Task: Project Setup - Backend & Frontend Infrastructure

## Description

Initialize the base project structure with Node.js/Express backend and Next.js frontend. Set up development environment, package managers, and basic configuration.

## Acceptance Criteria

- [ ] Node.js/Express project initialized with TypeScript
- [ ] PostgreSQL + Prisma configured
- [ ] Next.js project initialized with TypeScript
- [ ] docker-compose.yml for local development
- [ ] .env configuration files (example provided)
- [ ] README with setup instructions
- [ ] Basic folder structure in place
- [ ] Both projects run successfully locally

## Implementation Details

### Backend
- Create `backend/` directory
- Initialize Node project with `npm init`
- Install: `express`, `typescript`, `@types/express`, `@types/node`, `dotenv`, `cors`, `prisma`, `@prisma/client`
- Configure `tsconfig.json`
- Create `src/` folder structure:
  - `src/index.ts` - Entry point
  - `src/routes/` - API routes
  - `src/services/` - Business logic
  - `src/middleware/` - Express middleware
  - `src/utils/` - Utilities
  - `src/types/` - TypeScript types

### Frontend
- Create `frontend/` directory
- Initialize with `npx create-next-app@latest`
- Select TypeScript, TailwindCSS
- Configure `next.config.js` if needed
- Create `app/` structure:
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/globals.css`

### Docker Setup
- `docker-compose.yml` with:
  - PostgreSQL service
  - Backend service
  - Frontend service

### Environment Variables
- `.env.example` in backend and frontend
- Backend: `DATABASE_URL`, `PORT`, `NODE_ENV`, `JWT_SECRET`
- Frontend: `NEXT_PUBLIC_API_URL`

## Testing

1. Run backend: `npm run dev` → Server running on localhost:3001
2. Run frontend: `npm run dev` → App running on localhost:3000
3. Both projects compile without errors
4. Folder structure matches specification

## Assigned To

Backend Agent, Frontend Agent

## Notes

- Use minimal dependencies for MVP
- Focus on basic setup, not advanced features
- Provide clear documentation for next developers
