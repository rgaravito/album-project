# Task: Marketplace - Buy Cards

## Description

Implement the purchase flow. Allow users to buy stickers from other users. Create transaction records.

## Acceptance Criteria

- [ ] POST /api/market/buy endpoint
- [ ] Transaction record created with status \"completed\"
- [ ] Buyer's inventory updated with sticker
- [ ] Seller's inventory updated (quantity decreased)
- [ ] Sticker automatically delisted after purchase
- [ ] Purchase confirmation
- [ ] Transaction history visible to both users
- [ ] Unit tests for purchase flow

## Implementation Details

### Backend Routes - `src/routes/market.ts`

```typescript
POST /api/market/buy
Body: { userCardId: number }
Response: {
  success: true,
  transaction: Transaction,
  message: \"Card purchased successfully\"
}

GET /api/transactions
Response: [Transaction]

GET /api/transactions/:id
Response: Transaction with details
```

### Service Layer - `src/services/transaction.service.ts`

- `buyCard(buyerId, sellerCardId)` - Execute purchase
- `getTransactions(userId)` - Get user's transaction history
- `getTransaction(transactionId)` - Get single transaction

### Purchase Flow

1. User clicks \"Buy Now\" on marketplace card
2. Confirm purchase modal
3. Backend:
   - Create Transaction record
   - Add card to buyer's inventory
   - Decrease seller's inventory quantity
   - Update seller's card status to \"sold\" if quantity = 0
   - Unlist card from marketplace
   - Mark transaction as \"completed\"
4. Show success message
5. Update UI

### Frontend Pages - `app/transactions/`

**`app/transactions/page.tsx`**
- List of user's transactions
- Filter: Buy, Sell, Exchange
- Show date, card, price, counterparty

### Components - `components/Market/`

**`BuyModal.tsx`**
- Confirm purchase dialog
- Show card details
- Price
- \"Confirm Purchase\" button

**`TransactionItem.tsx`**
- Transaction card
- Direction (You bought from X, You sold to Y)
- Card info and price
- Date

## Testing

1. Buy card successfully
2. Transaction record created
3. Buyer has card in inventory
4. Seller quantity decreased
5. Card removed from marketplace
6. Transaction appears in history
7. Both users can see transaction

## Assigned To

Backend Agent, Frontend Agent, Testing Agent

## Notes

- Simple purchase flow for MVP
- No payment processing (just logic)
- Transaction is immediate (\"completed\" status)
- Add payment integration in Phase 2
