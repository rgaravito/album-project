# Agents Development Team

Guide for each agent's responsibilities and when to activate them.

## Agent Roles & When to Activate

### 1. Product Agent
**When**: Start of phase, when features need to be specified

**Responsibilities**:
- Read ROADMAP.md and ARCHITECTURE.md
- Create specs for next features
- Break specs into tasks
- Update NEXT_TASK.md
- Define acceptance criteria

**Output Files**:
- `specs/` - Feature specifications
- `tasks/` - Task breakdowns
- `NEXT_TASK.md` - Updated pointer

**Prompt**: See `agents/product-agent/prompt.md`

**Activation Phrase**:
> "Create specs for Phase 1 features based on ROADMAP.md"

---

### 2. Backend Agent
**When**: Ready to implement backend features

**Responsibilities**:
- Read task and specs
- Implement Express routes
- Create/update Prisma models
- Write services layer
- Add middleware and validation
- Write backend tests

**Output Files**:
- `backend/src/routes/` - API endpoints
- `backend/src/services/` - Business logic
- `backend/tests/` - Unit tests
- `prisma/schema.prisma` - Data models

**Prompt**: See `agents/backend-agent/prompt.md`

**Activation Phrase**:
> "Implement task XX using Express backend. Read NEXT_TASK.md and task file first."

---

### 3. Frontend Agent
**When**: Ready to implement UI and client logic

**Responsibilities**:
- Read task and specs
- Create React components
- Build Next.js pages
- Implement forms and validation
- Write custom hooks
- Add styling with TailwindCSS
- Write component tests

**Output Files**:
- `frontend/app/` - Pages
- `frontend/components/` - Reusable components
- `frontend/hooks/` - Custom hooks
- `frontend/lib/api.ts` - API client
- `frontend/tests/` - Component tests

**Prompt**: See `agents/frontend-agent/prompt.md`

**Activation Phrase**:
> "Implement UI for task XX using Next.js. Read NEXT_TASK.md and task file first."

---

### 4. Data Agent
**When**: Setting up database and preparing seed data

**Responsibilities**:
- Define Prisma schemas
- Create migrations
- Prepare seed scripts
- Generate sample data
- Document data models
- Manage datasets

**Output Files**:
- `prisma/schema.prisma` - Data definitions
- `prisma/migrations/` - Migrations
- `scripts/seed.ts` - Seed script
- `datasets/` - Data files
- Documentation updates

**Prompt**: See `agents/data-agent/prompt.md`

**Activation Phrase**:
> "Set up database schema and seed data for Phase 1. See task 03."

---

### 5. Testing Agent
**When**: After features are implemented, before marking tasks complete

**Responsibilities**:
- Write unit tests
- Write component tests
- Write integration tests
- Test API endpoints
- Verify acceptance criteria
- Measure coverage
- Document test suite

**Output Files**:
- `backend/tests/` - Backend tests
- `frontend/__tests__/` - Frontend tests
- Test configuration files
- Coverage reports

**Prompt**: See `agents/testing-agent/prompt.md`

**Activation Phrase**:
> "Write tests for task XX. Ensure 70%+ coverage and all criteria pass."

---

## Agent Coordination

### Task Execution Order

1. **Product Agent** (Start of phase)
   - Creates specs
   - Breaks into tasks
   - Updates NEXT_TASK.md

2. **Data Agent** (Early)
   - Defines database schema
   - Prepares seed data

3. **Backend Agent** (Core)
   - Implements APIs
   - Creates services
   - Handles business logic

4. **Frontend Agent** (Parallel with Backend)
   - Implements UI
   - Creates components
   - Handles user interactions

5. **Testing Agent** (Final pass)
   - Tests everything
   - Reports issues
   - Verifies done

### Information Sharing

Always include with agent activation:
- Current task file content
- ARCHITECTURE.md
- ROADMAP.md
- Any relevant specs
- Previous agent outputs

Example prompt:
```
Here's the current task from NEXT_TASK.md:
tasks/07-marketplace-list.md

Here's the full task file:
[Task content here]

Here's the architecture:
[ARCHITECTURE.md content here]

Please implement this task following the guidelines.
```

## Activation Guidelines

### ✅ Good Activation
- Clear task reference
- Full context included
- Specific agent role mentioned
- Expected output clearly defined
- Acceptance criteria repeated

### ❌ Poor Activation
- Vague request without task
- Missing context
- No clear scope
- Conflicting requirements
- Outdated references

## Task Status Tracking

Update NEXT_TASK.md as tasks progress:

```
## Completed
- ✅ tasks/01-project-setup.md
- ✅ tasks/02-authentication.md
- ✅ tasks/03-database-schema.md

## Current
- 🔄 tasks/04-card-catalog-api.md (Backend Agent)

## Next
- ⏳ tasks/05-card-catalog-frontend.md
- ⏳ tasks/06-user-inventory.md
```

## Common Patterns

### Backend Task Pattern
1. Define API contract in task
2. Create Prisma model updates
3. Implement service layer
4. Add routes
5. Write tests
6. Verify with Postman/curl

### Frontend Task Pattern
1. Design components needed
2. Create components
3. Implement pages
4. Connect to API (mock if needed)
5. Add validation
6. Write tests

### Data Task Pattern
1. Update Prisma schema
2. Create migration
3. Write seed script
4. Test with sample data
5. Verify relationships

## Success Metrics

- ✅ All acceptance criteria checked
- ✅ Tests passing (70%+ coverage)
- ✅ No console errors
- ✅ Code follows conventions
- ✅ Documented if complex
- ✅ Ready for next agent
