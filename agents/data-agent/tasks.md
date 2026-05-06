# Data Agent Tasks

## Phase 1 Implementation

### Task 03: Database Schema & Migrations

#### Deliverables
- [ ] Update `prisma/schema.prisma` with all models:
  - User
  - Card
  - WorldCup
  - UserCard
  - Transaction
- [ ] Create Prisma migration
- [ ] Test migrations run cleanly
- [ ] Document data relationships

#### Models to Define

**User**
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  username  String   @unique
  password  String
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

**Card**
```prisma
model Card {
  id         Int    @id @default(autoincrement())
  number     Int
  year       Int
  team       String
  country    String
  playerName String
  rarity     String
}
```

**WorldCup**
```prisma
model WorldCup {
  id         Int    @id @default(autoincrement())
  year       Int    @unique
  country    String
  totalCards Int
}
```

**UserCard** (Inventory)
```prisma
model UserCard {
  id            Int     @id @default(autoincrement())
  userId        String
  cardId        Int
  quantity      Int     @default(1)
  listedForSale Boolean @default(false)
  price         Float?
  status        String  @default("available")
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

**Transaction**
```prisma
model Transaction {
  id        Int     @id @default(autoincrement())
  type      String  // "buy", "sell", "exchange"
  from_id   String
  to_id     String?
  cardIds   Int[]
  price     Float?
  status    String  @default("pending")
  createdAt DateTime @default(now())
}
```

### Seed Data Preparation

#### `scripts/seed.ts`

Create script to populate:
- [ ] 5 World Cups (2006-2022)
- [ ] 100-200 sample cards (mix of years)
- [ ] 5-10 test users
- [ ] Sample user inventory
- [ ] Sample transactions

#### `datasets/worldcups.json`

```json
[
  { "year": 2022, "country": "Qatar", "totalCards": 670 },
  { "year": 2018, "country": "Russia", "totalCards": 682 },
  ...
]
```

#### `datasets/sample-cards.json`

```json
[
  {
    "number": 1,
    "year": 2022,
    "team": "Qatar",
    "country": "Qatar",
    "playerName": "Al-Sheeb",
    "rarity": "common"
  },
  ...
]
```

### Verification

- [ ] Run `npx prisma migrate dev`
- [ ] Run `npm run seed`
- [ ] Open `npx prisma studio`
- [ ] Verify all data exists and relationships work
- [ ] Check no foreign key errors
- [ ] Document schema in README

## Commands

```bash
# Create migration
npx prisma migrate dev --name init

# View database GUI
npx prisma studio

# Seed database
npm run seed

# Reset database (dev only)
npx prisma migrate reset
```

## Activation

When ready, share:
- Task 03 file
- docs/ARCHITECTURE.md
- Database requirements

Request: "Set up database schema and seed data. Follow Task 03 exactly."
