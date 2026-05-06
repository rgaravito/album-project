# Task: User Inventory & My Collection

## Description

Implement user inventory tracking and \"My Collection\" feature. Allow users to view and manage their cards.

## Acceptance Criteria

- [ ] UserCard model tracks user's cards
- [ ] GET /api/users/:id/inventory - Fetch user's cards
- [ ] POST /api/users/:id/inventory/add - Add card to inventory
- [ ] My Collection page shows user's cards
- [ ] Display card quantity and status
- [ ] View total unique cards in collection
- [ ] Search/filter inventory by year or player
- [ ] Unit tests for inventory service

## Implementation Details

### Backend Routes - `src/routes/inventory.ts`

```typescript
GET /api/users/:userId/inventory?year=2022&limit=20&offset=0
Response: {
  cards: [
    { card: Card, quantity: 2, status: \"available\", price: null },
    ...
  ],
  total: number,
  stats: { total_cards: number, unique_cards: number }
}

POST /api/users/:userId/inventory/add
Body: { cardId: number, quantity?: number }
Response: { success: true, userCard: UserCard }

PUT /api/users/:userId/inventory/:userCardId
Body: { quantity?: number, status?: string, price?: number }
```

### Service Layer - `src/services/inventory.service.ts`

- `getUserInventory(userId, year?, limit, offset)` - Get user's cards
- `addCardToInventory(userId, cardId, quantity)` - Add card
- `updateCardStatus(userId, userCardId, status, price)` - Update status
- `getInventoryStats(userId)` - Count unique cards

### Frontend Pages - `app/my-collection/`

**`app/my-collection/page.tsx`**
- Auth required (redirect to login if not)
- Display user's cards in grid
- Show quantity badges
- Filter by year
- Stats: \"You have 45 unique cards from 3 World Cups\"

### Components - `components/`

**`InventoryCard.tsx`**
- Shows card with quantity
- Status badge (available, sold, etc.)
- Price if listed
- Edit button for status

**`InventoryStats.tsx`**
- Cards collected
- Years represented
- Rarest cards

### Hooks - `hooks/useInventory.ts`

```typescript
export const useInventory = (userId?: string) => {
  return useQuery(['inventory', userId], () =>
    fetch(`/api/users/${userId}/inventory`).then(r => r.json())
  );
};
```

## Testing

1. Add card to user inventory
2. Verify it appears in My Collection
3. Update card status to \"sold\"
4. Filter by year works
5. Stats calculate correctly
6. Pagination works

## Assigned To

Backend Agent, Frontend Agent, Testing Agent

## Notes

- Only authenticated users can see their collection
- Prevent duplicate card entries (unique constraint)
- Keep quantity tracking simple for MVP
