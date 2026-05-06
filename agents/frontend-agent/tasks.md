# Frontend Agent Tasks

## Phase 1 Implementation

### Task 01: Project Setup
- [ ] Create Next.js project with TypeScript
- [ ] Install dependencies (react-query, tailwindcss, etc.)
- [ ] Configure TailwindCSS
- [ ] Create folder structure (app/, components/, hooks/, lib/)
- [ ] Setup .env files
- [ ] Test with `npm run dev`

### Task 05: Card Catalog UI
- [ ] Create CardGrid component
- [ ] Create CardItem component
- [ ] Build Explore page (/explore)
- [ ] Add year filter
- [ ] Add pagination
- [ ] Display cards from API
- [ ] Handle loading states
- [ ] Mobile responsive

### Task 06: Inventory UI
- [ ] Create My Collection page
- [ ] Display user's cards
- [ ] Show quantity and status
- [ ] Filter by year
- [ ] Show stats (total cards, unique count)
- [ ] Loading & error states

### Task 07-08: Marketplace UI
- [ ] Create Marketplace page
- [ ] Build cards for sale listing
- [ ] Add filters (price, year)
- [ ] Search functionality
- [ ] Buy modal dialog
- [ ] Seller info display

### Task 09: Exchange UI
- [ ] Create Exchange offers page
- [ ] Display pending offers
- [ ] Accept/reject controls
- [ ] Show card details for both sides
- [ ] Create exchange offer modal

### Task 10: Profile UI
- [ ] Create user profile page
- [ ] Display user info
- [ ] Build edit profile form
- [ ] Show collection stats
- [ ] List user's cards for sale

## Components to Create

```
components/
├── Card/
│   ├── CardItem.tsx
│   └── CardGrid.tsx
├── Market/
│   ├── MarketCard.tsx
│   ├── BuyModal.tsx
│   └── PriceFilter.tsx
├── Profile/
│   ├── ProfileHeader.tsx
│   └── EditProfileForm.tsx
├── Inventory/
│   ├── InventoryCard.tsx
│   └── InventoryStats.tsx
└── Common/
    ├── Header.tsx
    ├── Layout.tsx
    └── LoadingSpinner.tsx
```

## Code Standards

✅ TypeScript strict mode
✅ React best practices
✅ TailwindCSS for styling
✅ React Query for data
✅ Form validation
✅ Error handling
✅ Mobile responsive
✅ Component tests

## Testing

```bash
npm test
npm run test:coverage
```

## Activation

When ready, share:
- Current task file
- docs/ARCHITECTURE.md
- Backend API documentation

Request: "Implement [Task Name] UI in Next.js. Follow the task file exactly."
