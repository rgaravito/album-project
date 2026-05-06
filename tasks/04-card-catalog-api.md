# Task: Card Catalog API

## Description

Implement API endpoints to fetch album stickers from the database. Create services and routes for listing, filtering, and searching stickers.

## Acceptance Criteria

- [ ] GET /api/cards - List all album stickers with pagination
- [ ] GET /api/cards?year=2022 - Filter by World Cup year
- [ ] GET /api/cards/:id - Get single sticker
- [ ] GET /api/worldcups - List all tournaments by year
- [ ] Pagination support (limit, offset)
- [ ] Response validation
- [ ] Error handling for invalid inputs
- [ ] Performance optimized (no N+1 queries)
- [ ] Unit tests for service layer

## Implementation Details

### Backend Routes - `src/routes/cards.ts`

```typescript
GET /api/cards
Query: ?year=2022&limit=20&offset=0

Response:
{
  data: [Card],
  total: number,
  limit: number,
  offset: number
}

GET /api/worldcups
Response:
[
  { id: 1, year: 2022, country: \"Qatar\", totalCards: 670 },
  ...
]

GET /api/cards/:id
Response: Card
```

### Service Layer - `src/services/card.service.ts`

- `getAllCards(limit, offset, year?)` - Fetch album stickers with pagination
- `getCardById(id)` - Fetch single sticker
- `getCardsByYear(year)` - Filter by world cup year
- `getWorldCups()` - List all tournaments

### Type Definitions - `src/types/index.ts`

```typescript
interface Card {
  id: number;
  number: number;
  year: number;
  team: string;
  country: string;
  playerName: string;
  rarity: string;
  createdAt: Date;
}

interface WorldCup {
  id: number;
  year: number;
  country: string;
  totalCards: number;
}
```

### Error Handling

- Invalid ID → 400 Bad Request
- Card not found → 404 Not Found
- Invalid pagination → 400 Bad Request

## Testing

1. Test GET /api/cards with various filters
2. Test pagination boundaries (0, 1000+)
3. Test invalid IDs
4. Verify response format
5. Performance: No N+1 queries

## Assigned To

Backend Agent, Testing Agent

## Notes

- Use Prisma for database queries
- Implement pagination for performance
- Cache not needed for MVP
- Add sorting (price, rarity) in Phase 2
