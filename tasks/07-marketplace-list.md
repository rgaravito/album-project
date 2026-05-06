# Task: Marketplace - List Cards for Sale

## Description

Implement basic marketplace functionality. Allow users to list their album stickers for sale and create a view to browse stickers being sold by other users.

## Acceptance Criteria

- [ ] Users can list their stickers for sale
- [ ] PUT /api/users/:id/inventory/:cardId/list-for-sale endpoint
- [ ] GET /api/market/cards - Browse available stickers
- [ ] Marketplace page showing stickers for sale
- [ ] Display seller info and price
- [ ] Filter by price range
- [ ] Sort by price or newest
- [ ] Search by player name
- [ ] Unit tests for marketplace service

## Implementation Details

### Backend Routes - `src/routes/market.ts`

```typescript
GET /api/market/cards?minPrice=10&maxPrice=100&year=2022&sort=price&order=asc
Response: {
  cards: [
    {
      id: number,
      card: Card,
      seller: { id, username, avatar },
      price: number,
      listedAt: Date
    },
    ...
  ],
  total: number
}

PUT /api/users/:userId/inventory/:userCardId/list-for-sale
Body: { price: number }
Response: { success: true }

PUT /api/users/:userId/inventory/:userCardId/unlist
Response: { success: true }
```

### Service Layer - `src/services/market.service.ts`

- `getAvailableCards(filters, sort)` - Get stickers for sale
- `listCardForSale(userId, userCardId, price)` - List sticker
- `unlistCard(userId, userCardId)` - Remove from market
- `searchCards(query)` - Search by player name

### Database Updates

- Update UserCard model to track `listedForSale`, `price`, `listedAt`

### Frontend Pages - `app/market/`

**`app/market/page.tsx`**
- Grid of stickers for sale
- Sidebar with filters:
  - Price range slider
  - Year selector
  - Sort options
- Search bar
- Pagination

### Components - `components/Market/`

**`MarketCard.tsx`**
- Shows sticker with price
- Seller info (username)
- \"Buy Now\" button
- \"Make Offer\" button

**`PriceFilter.tsx`**
- Min/max price inputs
- Slider component

**`SortSelector.tsx`**
- Sort: Newest, Cheapest, Expensive

## Testing

1. List sticker for sale - appears in marketplace
2. Unlist sticker - disappears from marketplace
3. Filter by price works
4. Search finds stickers
5. Seller info displays correctly
6. Sorting works

## Assigned To

Backend Agent, Frontend Agent, Testing Agent

## Notes

- Price: Float with 2 decimals
- Seller username shown (not email)
- Stickers only show if `listedForSale: true`
- Status remains \"available\" when listed
