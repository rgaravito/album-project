# Task: Card Catalog Frontend UI

## Description

Build the frontend interface to display album stickers from the API. Create components for browsing stickers by World Cup year and displaying sticker details.

## Acceptance Criteria

- [ ] Explore page `/explore` listing stickers
- [ ] Filter by World Cup year
- [ ] Sticker grid component displaying stickers
- [ ] Sticker detail modal or page
- [ ] Loading states
- [ ] Error handling and messages
- [ ] Responsive design (mobile friendly)
- [ ] Component tests passing

## Implementation Details

### Pages - `app/explore/`

**`app/explore/page.tsx`**
- Display list of World Cups
- Filter selector for year
- Sticker grid with current year's stickers
- Pagination controls

### Components - `components/`

**`CardGrid.tsx`**
- Displays grid of cards
- Responsive layout (1-4 columns)
- Click handler to view details

**`CardItem.tsx`**
- Individual card component
- Shows number, player, team
- Rarity indicator
- Click to view details

**`WorldCupFilter.tsx`**
- Dropdown/buttons for year selection
- Shows available tournaments

**`CardModal.tsx`**
- Modal showing card details
- Player info, team, rarity
- Action buttons (add to collection, etc.)

### Hooks - `hooks/`

**`useCards.ts`**
```typescript
export const useCards = (year?: number) => {
  return useQuery(['cards', year], () => 
    fetch(`/api/cards${year ? `?year=${year}` : ''}`).then(r => r.json())
  );
};

export const useWorldCups = () => {
  return useQuery(['worldcups'], () =>
    fetch('/api/worldcups').then(r => r.json())
  );
};
```

### Styling

- Use TailwindCSS for grid layout
- Cards: rounded corners, shadow, hover effect
- Color scheme: Simple and clean
- Responsive: Mobile 1 column, tablet 2, desktop 4

## Testing

1. Load explore page - should display cards
2. Filter by year - should update grid
3. Click card - should show modal
4. Mobile view - should be responsive
5. No console errors

## Assigned To

Frontend Agent, Testing Agent

## Notes

- Use React Query for data fetching
- Lazy load images for performance
- Use next/image for optimization
- Keep component tree shallow
