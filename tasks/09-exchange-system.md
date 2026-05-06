# Task: Exchange System - Offer & Trade

## Description

Implement card exchange/trade functionality. Allow users to make offers to exchange cards with other users.

## Acceptance Criteria

- [ ] POST /api/market/exchange/offer - Create exchange offer
- [ ] GET /api/market/exchange/offers - View pending offers
- [ ] PUT /api/market/exchange/offers/:id/accept - Accept offer
- [ ] PUT /api/market/exchange/offers/:id/reject - Reject offer
- [ ] Transaction created when exchange completed
- [ ] Both users' inventories updated
- [ ] Offer notifications/status
- [ ] Exchange history visible
- [ ] Unit tests for exchange flow

## Implementation Details

### Backend Routes - `src/routes/exchange.ts`

```typescript
POST /api/market/exchange/offer
Body: {
  recipientUserId: string,
  offerCardIds: number[], // Cards offered by requester
  requestCardIds: number[] // Cards requested from recipient
}
Response: { success: true, offer: Offer }

GET /api/market/exchange/offers?status=pending
Response: [Offer with full details]

PUT /api/market/exchange/offers/:offerId/accept
Response: { success: true, transaction: Transaction }

PUT /api/market/exchange/offers/:offerId/reject
Body: { reason?: string }
Response: { success: true }
```

### Data Model Extension

Add to Transaction model:
```prisma
type \"exchange\"
cardIds (array of card IDs from both sides)
```

### Service Layer - `src/services/exchange.service.ts`

- `createOffer(fromUserId, toUserId, offerCards, requestCards)` - Create offer
- `getOffers(userId, status)` - Get user's offers
- `acceptOffer(offerId, userId)` - Accept and complete exchange
- `rejectOffer(offerId, userId)` - Reject offer
- `completeExchange(offerId)` - Update both inventories

### Exchange Flow

1. User A views User B's collection (optional - Phase 2)
2. User A creates exchange offer (my cards ↔ their cards)
3. User B receives notification (Phase 2)
4. User B can accept or reject
5. If accepted:
   - Transaction created with type \"exchange\"
   - Both inventories updated
   - Both cards marked as \"exchanged\"
6. If rejected:
   - Offer deleted or marked \"rejected\"
   - No inventory changes

### Frontend Pages - `app/exchanges/`

**`app/exchanges/page.tsx`**
- Tabs: Pending, Completed
- List of offers sent/received
- Status of each offer

### Components - `components/Exchange/`

**`ExchangeOffer.tsx`**
- Show cards offered by each side
- Status badge
- Accept/Reject buttons (if applicable)

**`CreateExchange.tsx`**
- Select cards to offer
- Select cards to request
- Recipient selector
- \"Send Offer\" button

## Testing

1. Create exchange offer
2. Offer appears for recipient
3. Accept offer - both inventories updated
4. Cards marked as \"exchanged\"
5. Transaction created
6. Reject offer - no changes
7. History shows exchanges

## Assigned To

Backend Agent, Frontend Agent, Testing Agent

## Notes

- Simple offer: no counter-offers in MVP
- Exchange is immediate (no negotiation)
- Both sides must have cards available
- Add offer notifications in Phase 2
