# Datasets Folder

Contains seed data and datasets for development.

## Files

### worldcups.json
World Cup tournaments for testing.

```json
[
  { "year": 2022, "country": "Qatar", "totalCards": 670 },
  { "year": 2018, "country": "Russia", "totalCards": 682 },
  { "year": 2014, "country": "Brazil", "totalCards": 640 }
]
```

### sample-cards.json
Sample cards for database seeding.

### users.json (Optional)
Test users for development.

## Usage

```bash
# Seed database with sample data
npm run seed
```

See `scripts/seed.ts` for seeding logic.
