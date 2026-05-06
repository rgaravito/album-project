# Testing Agent Tasks

## Phase 1 Testing Strategy

### Unit Tests

#### Backend Services (70%+ coverage)

**Auth Service Tests**
- [ ] Register with valid data
- [ ] Register with duplicate email
- [ ] Register with invalid email
- [ ] Login with correct password
- [ ] Login with wrong password
- [ ] JWT token generation
- [ ] JWT token verification

**Card Service Tests**
- [ ] Get all cards
- [ ] Get cards by year
- [ ] Get single card
- [ ] Filter and pagination
- [ ] Error handling

**Inventory Service Tests**
- [ ] Add card to inventory
- [ ] Update card quantity
- [ ] Update card status
- [ ] Get user inventory
- [ ] Invalid card ID handling

**Transaction Service Tests**
- [ ] Create transaction
- [ ] Update status
- [ ] Get transactions
- [ ] Query validation

#### Frontend Components (50%+ coverage)

**Component Tests**
- [ ] CardItem renders correctly
- [ ] CardGrid displays all cards
- [ ] Form validation works
- [ ] Loading states display
- [ ] Error messages show
- [ ] Click handlers work
- [ ] Mobile responsive

### Integration Tests

#### API Endpoints (Critical paths)

**Auth Flow**
- [ ] Register → Login → Get protected resource
- [ ] Invalid token rejection
- [ ] Token expiration

**Card Browsing Flow**
- [ ] Fetch all cards
- [ ] Filter by year
- [ ] Pagination works

**Marketplace Flow**
- [ ] List card for sale
- [ ] Buy card
- [ ] Inventory updated
- [ ] Transaction recorded

**Exchange Flow**
- [ ] Create offer
- [ ] Accept offer
- [ ] Both inventories updated
- [ ] Transaction created

### Testing Tools & Setup

#### Backend (Jest + Supertest)
```bash
npm install --save-dev jest @types/jest ts-jest supertest @types/supertest
```

#### Frontend (Jest + React Testing Library)
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @types/jest
```

### Test File Structure

```
backend/
├── src/
│   ├── services/
│   │   └── auth.service.ts
│   └── __tests__/
│       └── auth.service.test.ts
└── tests/
    └── api/
        └── auth.test.ts

frontend/
└── __tests__/
    ├── components/
    │   └── CardItem.test.tsx
    └── hooks/
        └── useCards.test.ts
```

### Test Coverage Goals

| Component | Target |
|-----------|--------|
| Services | 100% |
| API Routes | 80% |
| Components | 50% |
| Hooks | 70% |
| Utils | 100% |
| **Overall** | **70%** |

### Test Checklist per Task

Before marking task complete:

- [ ] Unit tests written
- [ ] All acceptance criteria tested
- [ ] Error cases tested
- [ ] Edge cases covered
- [ ] Integration points tested
- [ ] No console errors
- [ ] Coverage meets target
- [ ] Tests pass locally
- [ ] Tests documented

## Running Tests

```bash
# Backend
cd backend
npm test                    # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report

# Frontend
cd frontend
npm test                    # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
```

## Test Examples

### Backend Service Test
```typescript
describe('AuthService', () => {
  it('should register a new user', async () => {
    const user = await authService.register('test@example.com', 'testuser', 'password123');
    expect(user.email).toBe('test@example.com');
  });
});
```

### Frontend Component Test
```typescript
describe('CardItem', () => {
  it('renders card with player name', () => {
    const card = { id: 1, playerName: 'Messi', number: 10 };
    const { getByText } = render(<CardItem card={card} onClick={() => {}} />);
    expect(getByText('Messi')).toBeInTheDocument();
  });
});
```

## Activation

When ready, share:
- Completed task implementation files
- Backend and frontend code
- docs/AGENTS.md

Request: "Write comprehensive tests for [Task Name]. Achieve 70%+ coverage."
